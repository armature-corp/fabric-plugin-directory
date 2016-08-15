export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'directory'], name: 'directory',       moduleId: 'directory',       nav: true, title: 'Directory' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
