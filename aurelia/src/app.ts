import { Aurelia, autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

@autoinject
export class App {
  router: Router;

  constructor() {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;
    config.map([
      { route:['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('pages/home'), nav: true, title: 'HOME' },
      { route:['about'], name: 'about', moduleId: PLATFORM.moduleName('pages/about'), nav: true, title: 'ABOUT' }
    ]);

    this.router = router;
  }
}
