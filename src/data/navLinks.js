// Navbar structure. Each link holds a path + i18n key (NOT the text itself).
// Add / reorder / nest links here — the text lives in the translation files.
// `dropdown: []` marks a menu that will have sub-items later (caret shown).

export const navLinks = [
  { key: 'nav.home', path: '/' },
  {
    key: 'nav.about',
    path: '/about',
    dropdown: [
      { key: 'nav.aboutMenu.whoWeAre', path: '/about' },
      { key: 'nav.aboutMenu.boardMembers', path: '/about/board-members' },
      { key: 'nav.aboutMenu.executiveDirector', path: '/about/executive-director' },
      { key: 'nav.aboutMenu.orgStructure', path: '/about/organizational-structure' },
      { key: 'nav.aboutMenu.team', path: '/about/team' },
      { key: 'nav.aboutMenu.strategy', path: '/about/strategic-directions' },
      { key: 'nav.aboutMenu.license', path: '/about/license-certificate' },
    ],
  },
  {
    key: 'nav.governance',
    path: '/governance',
    dropdown: [
      { key: 'nav.governanceMenu.bylaws', path: '/governance/bylaws' },
      { key: 'nav.governanceMenu.boardMinutes', path: '/governance/board-minutes' },
      { key: 'nav.governanceMenu.policies', path: '/governance/policies' },
    ],
  },
  { key: 'nav.jobs', path: '/jobs' },
  { key: 'nav.media', path: '/media' },
  { key: 'nav.satisfaction', path: '/satisfaction' },
  { key: 'nav.contact', path: '/contact' },
];
