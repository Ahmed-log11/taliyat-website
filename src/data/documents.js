// Documents shown on the About / Governance sub-pages.
// Files live in /public/docs. To add a document: drop the file there and add an
// entry below (title = i18n key, file = path under /public). An empty array
// shows the "coming soon" empty state.

export const documentSections = {
  license: {
    titleKey: 'docs.license.title',
    subtitleKey: 'docs.license.subtitle',
    items: [
      { titleKey: 'docs.license.items.license', file: '/docs/license.jpeg', type: 'image' },
    ],
  },
  bylaws: {
    titleKey: 'docs.bylaws.title',
    subtitleKey: 'docs.bylaws.subtitle',
    items: [
      { titleKey: 'docs.bylaws.items.bylaws', file: '/docs/bylaws.pdf', type: 'pdf' },
    ],
  },
  boardMinutes: {
    titleKey: 'docs.boardMinutes.title',
    subtitleKey: 'docs.boardMinutes.subtitle',
    items: [
      { titleKey: 'docs.boardMinutes.items.m1', file: '/docs/minutes-new-meeting-1.pdf', type: 'pdf' },
      { titleKey: 'docs.boardMinutes.items.m2', file: '/docs/minutes-ministry-islamic-affairs.pdf', type: 'pdf' },
      { titleKey: 'docs.boardMinutes.items.m3', file: '/docs/minutes-meeting-2.pdf', type: 'pdf' },
      { titleKey: 'docs.boardMinutes.items.m4', file: '/docs/minutes-board-4.pdf', type: 'pdf' },
    ],
  },
  policies: {
    titleKey: 'docs.policies.title',
    subtitleKey: 'docs.policies.subtitle',
    items: [], // ستُضاف السياسات واللوائح لاحقاً
  },
};
