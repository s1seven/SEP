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
      ['/EN10168/', 'EN10168'],
      ['/schemas/', 'Schemas'],
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
