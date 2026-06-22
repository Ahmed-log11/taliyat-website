# مؤسسة التاليات للمقارئ القرآنية — Website

Landing page scaffold. Vite + React + Tailwind + React Router, bilingual (Arabic default / English), RTL-first. Supabase wired in later for the user accounts + database.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

> Requires Node 18+.

## What's built

- **Landing page** with all six sections in order: Hero → Latest News → Achievements → Donate Band → About → Partners → Footer.
- **Navbar** with every link; all non-home routes render a shared `ComingSoon` page for now.
- **Bilingual**: Arabic is the default. Every visible string lives in `src/i18n/locales/{ar,en}/translation.json`. Language toggle in the header flips text *and* page direction (RTL/LTR).
- **Brand tokens** in `tailwind.config.js` — `primary` (green #205040), `gold` (#C0A050), `sand`. Components reference token names, never raw hex.

## Where things live

| You want to… | Edit… |
|---|---|
| Change any text | `src/i18n/locales/{ar,en}/translation.json` |
| Add / reorder nav links | `src/data/navLinks.js` |
| Update news items | `src/data/news.js` (+ titles in translation files) |
| Update achievement numbers | `src/data/stats.js` |
| Update partners | `src/data/partners.js` |
| Reorder landing sections | `src/pages/LandingPage.jsx` (reorder the lines) |
| Change brand colors | `tailwind.config.js` |
| Build a real page (e.g. About) | Swap its `element` in `src/App.jsx` |
| Wire auth / database | `src/lib/supabase.js` (+ `.env`) |

## To do later

- **Donation store**: the Donate buttons + cart currently route to the `ComingSoon` page. Real payments need a Saudi gateway (Moyasar / PayTabs) and depend on the foundation's license — wire when ready.
- **User accounts**: `حسابي الشخصي` is a static button for now. Fill `src/lib/supabase.js`, add `.env` keys, build login/profile.
- **Real assets**: replace placeholder images in `public/assets/` and the hero/about imagery.
- **Partner logos**: add the foundation's real partners; don't ship any other org's logos.

## Brand

- Name: مؤسسة التاليات للمقارئ القرآنية
- License: 1100541500
- Phone: +966 57 358 4991 · Email: t.altaliyat@gmail.com
- Colors: green `#205040`, gold `#C0A050`, sand `#E9DEC2`
- Font: IBM Plex Sans Arabic (loaded via Google Fonts in `index.html`)
