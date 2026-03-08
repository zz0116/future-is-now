/* ============================================================
   app.js — Main Application Logic
   ============================================================ */

// --- State ---
let currentLang = (navigator.language || 'zh').startsWith('zh') ? 'zh' : 'en';
let currentFilter = 'all';

// --- i18n Helpers ---
function T(key) { return i18n[currentLang]?.[key] || key; }

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = T(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.title = currentLang === 'zh'
    ? '未来已来 — 人类科技预测与实现进度'
    : 'The Future Is Now — Tech Prediction Tracker';
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', 
      (lang === 'zh' && b.textContent.trim() === '中文') ||
      (lang === 'en' && b.textContent.trim() === 'EN')
    );
  });
  applyI18n();
  renderNav();
  renderLegend();
  renderCards(currentFilter);
  renderTimeline();
  updateTimeDisplay();
}

// --- Status Text ---
function getStatusText(s) {
  const map = {
    realized: 'statusRealized',
    progressing: 'statusProgressing',
    early: 'statusEarly',
    concept: 'statusConcept',
    theoretical: 'statusTheoretical'
  };
  return T(map[s] || s);
}

// --- Progress Colors ---
function getProgressColor(p) {
  if (p >= 80) return 'var(--accent-green)';
  if (p >= 50) return 'var(--accent-blue)';
  if (p >= 20) return 'var(--accent-orange)';
  if (p >= 5) return 'var(--accent-purple)';
  return 'var(--accent-red)';
}

function getProgressGradient(p) {
  if (p >= 80) return 'linear-gradient(90deg,#10b981,#06b6d4)';
  if (p >= 50) return 'linear-gradient(90deg,#3b82f6,#06b6d4)';
  if (p >= 20) return 'linear-gradient(90deg,#f59e0b,#ef4444)';
  if (p >= 5) return 'linear-gradient(90deg,#8b5cf6,#ec4899)';
  return 'linear-gradient(90deg,#ef4444,#dc2626)';
}

// --- Render Nav ---
function renderNav() {
  const cats = [
    { f: 'all', k: 'filterAll' },
    { f: 'ai', k: 'filterAI' },
    { f: 'space', k: 'filterSpace' },
    { f: 'bio', k: 'filterBio' },
    { f: 'transport', k: 'filterTransport' },
    { f: 'energy', k: 'filterEnergy' },
    { f: 'life', k: 'filterLife' }
  ];
  const nav = document.getElementById('navFilter');
  nav.innerHTML = cats.map(c =>
    `<button class="nav-btn${c.f === currentFilter ? ' active' : ''}" data-filter="${c.f}">${T(c.k)}</button>`
  ).join('');
  nav.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      nav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(currentFilter);
    });
  });
}

// --- Render Legend ---
function renderLegend() {
  const items = [
    { color: 'var(--accent-green)', k: 'legendRealized' },
    { color: 'var(--accent-blue)', k: 'legendProgressing' },
    { color: 'var(--accent-orange)', k: 'legendEarly' },
    { color: 'var(--accent-purple)', k: 'legendConcept' },
    { color: 'var(--accent-red)', k: 'legendTheoretical' }
  ];
  document.getElementById('legendBar').innerHTML = items.map(i =>
    `<div class="legend-item"><div class="legend-dot" style="background:${i.color}"></div>${T(i.k)}</div>`
  ).join('');
}

// --- Render Cards ---
function renderCards(filter = 'all') {
  const grid = document.getElementById('cardsGrid');
  const filtered = filter === 'all' ? predictions : predictions.filter(p => p.category === filter);
  const L = currentLang;

  grid.innerHTML = filtered.map(p => {
    const d = p[L];
    return `
    <div class="card cat-${p.category} fade-in" onclick="openModal(${p.id})">
      <div class="card-header">
        <div class="card-icon">${p.icon}</div>
        <span class="card-status status-${p.status}">${getStatusText(p.status)}</span>
      </div>
      <h3 class="card-title">${d.title}</h3>
      <p class="card-prediction">📖 ${d.prediction}</p>
      <p class="card-desc">${d.desc}</p>
      <div class="progress-section">
        <div class="progress-header">
          <span class="progress-label">${T('progressLabel')}</span>
          <span class="progress-value" style="color:${getProgressColor(p.progress)}">${p.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" data-width="${p.progress}"></div>
        </div>
      </div>
      <div class="card-meta">
        <span class="meta-item">📅 ${T('expected')}：<span class="meta-highlight">${p.predictedYear}</span></span>
        <span class="meta-item">📚 ${(d.source.split(/[、,]/)[0]).trim()}</span>
      </div>
    </div>`;
  }).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.card.fade-in').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
        const fill = el.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.width + '%';
      }, i * 80);
    });
  });
}

// --- Render Timeline ---
function renderTimeline() {
  const data = timelineData[currentLang] || timelineData.en;
  document.getElementById('timeline').innerHTML = data.map(item =>
    `<div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-text">${item.text}</div>
      </div>
      <div class="timeline-dot"></div>
    </div>`
  ).join('');
  setTimeout(() => {
    document.querySelectorAll('.timeline-item.fade-in').forEach((el, i) => {
      setTimeout(() => observer.observe(el), i * 100);
    });
  }, 200);
}

// --- Modal ---
async function openModal(id) {
  const p = predictions.find(x => x.id === id);
  if (!p) return;
  const d = p[currentLang];

  // Render modal immediately with loading state for news
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-icon">${p.icon}</div>
    <h2 class="modal-title">${d.title}</h2>
    <p class="modal-prediction">📖 "${d.prediction}"</p>
    <div style="margin-bottom:16px">
      <span class="card-status status-${p.status}" style="font-size:.8rem">${getStatusText(p.status)} · ${p.progress}%</span>
    </div>
    <div class="progress-section" style="margin-bottom:20px">
      <div class="progress-bar" style="height:10px">
        <div class="progress-fill" style="width:${p.progress}%;background:${getProgressGradient(p.progress)}"></div>
      </div>
    </div>
    <div class="modal-body">
      <p>${d.detail}</p>
      <p><strong>${T('predSource')}：</strong>${d.source}</p>
      <p><strong>${T('predYear')}：</strong>${p.predictedYear}</p>
    </div>
    <div class="modal-milestones">
      <h4>${T('milestonesTitle')}</h4>
      ${d.milestones.map(m => `<div class="milestone"><span class="milestone-year">${m.year}</span><span class="milestone-text">${m.text}</span></div>`).join('')}
    </div>
    <div class="modal-news" id="modalNewsSection">
      <h4>${T('newsTitle')}</h4>
      <div class="news-loading"><span class="spinner"></span>${T('newsLoading')}</div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Fetch news asynchronously
  try {
    const { items, fromCache } = await NewsEngine.getNews(id);
    const newsSection = document.getElementById('modalNewsSection');
    if (!newsSection) return; // modal was closed

    if (items.length > 0) {
      newsSection.innerHTML = `
        <h4>${fromCache ? T('newsTitleCached') : T('newsTitle')}</h4>
        ${items.map(n => `
          <div class="news-item">
            <span class="news-date">${n.date}</span>
            ${n.link ? `<a href="${n.link}" target="_blank" rel="noopener">${n.title}</a>` : n.title}
            ${n.source ? `<span style="color:var(--text-muted);font-size:.75rem"> — ${n.source}</span>` : ''}
          </div>
        `).join('')}
      `;
    } else {
      newsSection.innerHTML = `
        <h4>${T('newsTitle')}</h4>
        <div class="news-item" style="color:var(--text-muted)">${T('newsNone')}</div>
      `;
    }
  } catch {
    const newsSection = document.getElementById('modalNewsSection');
    if (newsSection) {
      newsSection.innerHTML = `
        <h4>${T('newsTitle')}</h4>
        <div class="news-item" style="color:var(--text-muted)">${T('newsError')}</div>
      `;
    }
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// --- Update Bar ---
function updateTimeDisplay() {
  const el = document.getElementById('lastUpdateTime');
  const cacheTime = NewsEngine.getCacheTime();
  if (cacheTime) {
    const fmt = currentLang === 'zh'
      ? cacheTime.toLocaleString('zh-CN')
      : cacheTime.toLocaleString('en-US');
    el.textContent = `${T('lastUpdate')}: ${fmt}`;
  } else {
    el.textContent = '';
  }
}

async function manualRefreshNews() {
  const btn = document.getElementById('refreshBtn');
  const bar = document.getElementById('updateBar');
  btn.textContent = T('updateLoading');
  btn.style.pointerEvents = 'none';
  bar.classList.add('loading');

  NewsEngine.clearCache();
  
  await NewsEngine.refreshAll((done, total) => {
    btn.textContent = `${done}/${total}...`;
  });

  btn.textContent = T('updateNow');
  btn.style.pointerEvents = '';
  bar.classList.remove('loading');
  updateTimeDisplay();
}

// --- Scroll Observer ---
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const fill = entry.target.querySelector('.progress-fill');
      if (fill) fill.style.width = fill.dataset.width + '%';
    }
  });
}, { threshold: 0.1 });

// --- Hero Counter ---
function animateCounter(el, target, suffix = '') {
  let c = 0;
  const step = target / 60;
  const t = setInterval(() => {
    c += step;
    if (c >= target) { c = target; clearInterval(t); }
    el.textContent = Math.round(c) + suffix;
  }, 20);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  // Set initial lang based on browser
  const initLang = (navigator.language || 'zh').startsWith('zh') ? 'zh' : 'en';
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active',
      (initLang === 'zh' && b.textContent.trim() === '中文') ||
      (initLang === 'en' && b.textContent.trim() === 'EN')
    );
  });
  currentLang = initLang;

  applyI18n();
  renderNav();
  renderLegend();
  renderCards();
  renderTimeline();
  updateTimeDisplay();

  // Hero stats
  const total = predictions.length;
  const realized = predictions.filter(p => p.progress >= 50).length;
  const avg = Math.round(predictions.reduce((s, p) => s + p.progress, 0) / total);
  setTimeout(() => {
    animateCounter(document.getElementById('stat1'), total);
    animateCounter(document.getElementById('stat2'), realized);
    animateCounter(document.getElementById('stat3'), avg, '%');
  }, 500);

  // Background news refresh if cache is stale
  if (!NewsEngine.isCacheFresh()) {
    // Non-blocking background refresh
    NewsEngine.refreshAll().then(() => updateTimeDisplay());
  }

  // Auto-refresh every 4 hours
  setInterval(() => {
    NewsEngine.clearCache();
    NewsEngine.refreshAll().then(() => updateTimeDisplay());
  }, 4 * 60 * 60 * 1000);
});
