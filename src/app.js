export class App {
  configureRouter(config, router) {
    config.title = 'Fab-UI';
    config.map([
      { route: ['', 'directory'], name: 'directory',      moduleId: 'directory',      nav: true, title: 'Directory' },
      { route: ['plugins/hello-world'], name: 'hello-world',      moduleId: 'plugins/hello-world/hello-world', title: 'Skeleton Plugin' }
      //{ route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    

    this.router = router;
  }
}
