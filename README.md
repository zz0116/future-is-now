# 🚀 The Future Is Now / 未来已来

> Track humanity's boldest predictions about the future and see how close we are to making them real.
>
> 追踪人类对未来世界的大胆预测，看看我们距离实现它们还有多远。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen)
![No Backend](https://img.shields.io/badge/backend-none-orange)

## ✨ Features

- **18 Future Tech Predictions** across 6 categories: AI, Space, Biomedical, Transport, Energy, Lifestyle
- **Visual Progress Bars** showing real-time implementation status (12% to 80%)
- **Live News Updates** — fetches latest news via Google News RSS directly in the browser (no backend!)
- **Bilingual (中文/English)** — instant language switching, auto-detects browser language
- **Interactive Timeline** — from 1950s predictions to 2050 visions
- **Click-to-Explore** — detailed modal with milestones and live news for each prediction
- **4-Hour Auto-Refresh** — news cache refreshes automatically, with manual refresh option
- **Pure Frontend** — deploy anywhere: GitHub Pages, Netlify, Vercel, or just open `index.html`
- **Mobile Responsive** — works beautifully on all screen sizes

## 🏗️ Architecture

```
future-is-now/
├── index.html          # Main page
├── assets/
│   ├── style.css       # All styles
│   ├── i18n.js         # Bilingual text (zh/en)
│   ├── data.js         # 18 predictions + timeline data
│   ├── news.js         # News engine (Google News RSS + CORS proxy + localStorage cache)
│   └── app.js          # Main application logic
├── README.md
└── LICENSE
```

### How Live News Works (No Backend!)

```
Browser → CORS Proxy → Google News RSS → Parse XML → Display
                ↓
         localStorage cache (4h TTL)
```

1. Each prediction has a `searchKey` used to query Google News RSS
2. Requests go through free public CORS proxies (with fallbacks)
3. Results are cached in `localStorage` for 4 hours
4. When you click a card, news loads asynchronously — no blocking

## 🚀 Deploy

### GitHub Pages (Recommended)

1. Fork this repo
2. Go to **Settings → Pages → Source → main branch**
3. Your site is live at `https://yourusername.github.io/future-is-now/`

### Local

Just open `index.html` in any browser. That's it.

### Other Platforms

Works on Netlify, Vercel, Cloudflare Pages — just point to the repo. No build step needed.

## 🤝 Contributing

Contributions welcome! You can:

- **Add new predictions** — edit `assets/data.js`
- **Update progress percentages** — based on latest developments
- **Improve translations** — edit `assets/i18n.js`
- **Add new languages** — extend the i18n system
- **Fix bugs or improve UI** — PRs welcome

### Adding a New Prediction

Add an entry to the `predictions` array in `assets/data.js`:

```javascript
{
  id: 19,                    // unique ID
  icon: "🔮",               // emoji icon
  category: "ai",           // ai|space|bio|transport|energy|life
  progress: 10,             // 0-100
  status: "concept",        // realized|progressing|early|concept|theoretical
  predictedYear: "2040-2060",
  searchKey: "your search keywords for Google News",
  zh: { title, prediction, source, desc, detail, milestones },
  en: { title, prediction, source, desc, detail, milestones }
}
```

## 📄 License

MIT License — see [LICENSE](LICENSE)

## 🙏 Credits

- News data via [Google News RSS](https://news.google.com/)
- CORS proxies: [allorigins](https://allorigins.win/), [corsproxy.io](https://corsproxy.io/)
- Inspired by humanity's relentless drive to imagine and build the future
