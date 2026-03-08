/* ============================================================
   news.js — Pure Frontend News Fetching
   ============================================================
   
   Strategy (no backend needed, works on GitHub Pages):
   
   1. PRIMARY: Google News RSS via public CORS proxies
      - Free, no API key, real-time news
      - Multiple proxy fallbacks for reliability
   
   2. FALLBACK: Cached/bundled news data
      - Ships with the repo, updated via GitHub Actions or manually
   
   3. CACHE: localStorage with 4-hour TTL
      - Avoids hammering APIs on every page load
   ============================================================ */

const NewsEngine = (() => {

  // --- Config ---
  const CACHE_KEY = 'future_news_cache';
  const CACHE_TTL = 4 * 60 * 60 * 1000; // 4 hours in ms
  const MAX_NEWS = 3;

  // CORS proxies (public, free) — we try them in order
  const CORS_PROXIES = [
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?',
    'https://api.codetabs.com/v1/proxy?quest=',
  ];

  // --- Cache ---
  function getCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() - data.timestamp > CACHE_TTL) return null;
      return data;
    } catch (e) { return null; }
  }

  function setCache(newsMap) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        news: newsMap
      }));
    } catch (e) { /* quota exceeded, ignore */ }
  }

  // --- Google News RSS Parser ---
  function buildGoogleNewsURL(query) {
    const q = encodeURIComponent(query);
    return `https://news.google.com/rss/search?q=${q}&hl=en&gl=US&ceid=US:en`;
  }

  function createTimeout(ms) {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), ms);
    return ctrl.signal;
  }

  async function fetchWithProxy(url) {
    for (const proxy of CORS_PROXIES) {
      try {
        const resp = await fetch(proxy + encodeURIComponent(url), {
          signal: createTimeout(10000)
        });
        if (resp.ok) {
          return await resp.text();
        }
      } catch (e) { /* try next proxy */ }
    }
    return null;
  }

  function parseRSS(xmlText) {
    const results = [];
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlText, 'text/xml');
      const items = doc.querySelectorAll('item');
      for (let i = 0; i < Math.min(items.length, MAX_NEWS); i++) {
        const item = items[i];
        const title = item.querySelector('title')?.textContent?.trim() || '';
        const link = item.querySelector('link')?.textContent?.trim() || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const source = item.querySelector('source')?.textContent?.trim() || '';
        
        let dateStr = '';
        if (pubDate) {
          try {
            const d = new Date(pubDate);
            dateStr = d.toISOString().slice(0, 10);
          } catch {
            dateStr = new Date().toISOString().slice(0, 10);
          }
        }
        
        // Clean Google News title (often has " - Source" at end)
        let cleanTitle = title;
        if (source && cleanTitle.endsWith(' - ' + source)) {
          cleanTitle = cleanTitle.slice(0, -(source.length + 3));
        }
        
        results.push({
          date: dateStr,
          title: cleanTitle,
          source: source,
          link: link
        });
      }
    } catch (e) { /* parse error */ }
    return results;
  }

  // --- Fetch news for one prediction ---
  async function fetchForPrediction(prediction) {
    const query = prediction.searchKey;
    if (!query) return [];
    
    const url = buildGoogleNewsURL(query);
    const xml = await fetchWithProxy(url);
    if (!xml) return [];
    
    return parseRSS(xml);
  }

  // --- Public API ---

  /**
   * Get news for a specific prediction ID.
   * Returns from cache if fresh, otherwise fetches live.
   */
  async function getNews(predictionId) {
    // Check cache first
    const cache = getCache();
    if (cache && cache.news && cache.news[predictionId]) {
      return { items: cache.news[predictionId], fromCache: true };
    }
    
    // Fetch live
    const pred = predictions.find(p => p.id === predictionId);
    if (!pred) return { items: [], fromCache: false };
    
    const items = await fetchForPrediction(pred);
    
    // Update cache
    const existingCache = getCache();
    const newsMap = existingCache?.news || {};
    newsMap[predictionId] = items;
    setCache(newsMap);
    
    return { items, fromCache: false };
  }

  /**
   * Refresh all news (background, non-blocking).
   * Called on page load and every 4 hours.
   */
  async function refreshAll(onProgress) {
    const newsMap = {};
    let done = 0;
    
    for (const pred of predictions) {
      try {
        const items = await fetchForPrediction(pred);
        newsMap[pred.id] = items;
      } catch {
        newsMap[pred.id] = [];
      }
      done++;
      if (onProgress) onProgress(done, predictions.length);
      // Small delay to be polite to the proxy
      await new Promise(r => setTimeout(r, 800));
    }
    
    setCache(newsMap);
    return newsMap;
  }

  /**
   * Get cache timestamp
   */
  function getCacheTime() {
    const cache = getCache();
    return cache ? new Date(cache.timestamp) : null;
  }

  /**
   * Check if cache is fresh
   */
  function isCacheFresh() {
    return getCache() !== null;
  }

  /**
   * Clear cache (force refresh)
   */
  function clearCache() {
    localStorage.removeItem(CACHE_KEY);
  }

  return { getNews, refreshAll, getCacheTime, isCacheFresh, clearCache };
})();
