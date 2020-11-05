const pkg = require('../../package.json');

module.exports = {
  title: 'S1Seven Enhancement Proposals',
  base: '/SEP/',
  themeConfig: {
    logo: '/logo.png',
    repo: pkg.repository.url,
    repoLabel: 'Git',
    docsDir: 'docs',
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      ['/informations/', 'Informations'],
      ['/schemas/', 'Schemas'],
      ['/tools/', 'Tools'],
    ],
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
  },
};
