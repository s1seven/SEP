const pkg = require('../../package.json');

module.exports = {
  title: 'S1Seven Enhancement Proposals',
  base: '/SEP/',
  themeConfig: {
    logo: '/logo.png',
    repo: pkg.repository.url,
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [{ text: 'Readme', link: '/readme/' }],
    sidebar: [['/readme/', 'Readme']],
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
