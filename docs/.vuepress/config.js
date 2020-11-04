const pkg = require('../../package.json');

module.exports = {
  title: 'S1Seven Enhancement Proposals',
  base: '/SEP/',
  dest: 'public',
  themeConfig: {
    logo: '/logo.png',
    repo: pkg.repository.url,
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [
      { text: 'Readme', link: '/readme/' },
      { text: 'Schema', link: '/schema/' },
    ],
    sidebar: [
      ['/readme/', 'Readme'],
      ['/schema/', 'Schema'],
    ],
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
  },
};
