// Navbar structure. Each link holds a path + i18n key (NOT the text itself).
// Add / reorder / nest links here — the text lives in the translation files.
// `dropdown: []` marks a menu that will have sub-items later (caret shown).

export const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about', dropdown: [] },
  { key: 'nav.governance', path: '/governance', dropdown: [] },
  { key: 'nav.donateStore', path: '/donate', dropdown: [] },
  { key: 'nav.centers', path: '/centers', dropdown: [] },
  { key: 'nav.jobs', path: '/jobs' },
  { key: 'nav.media', path: '/media' },
  { key: 'nav.satisfaction', path: '/satisfaction' },
  { key: 'nav.contact', path: '/contact' },
];
