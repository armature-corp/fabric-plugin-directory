import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-html-import-template-loader');

  // FAB-UI PLUGINS
  aurelia.use.plugin('appleskin/skeleton-plugin');

  aurelia.start().then(() => aurelia.setRoot());
}
