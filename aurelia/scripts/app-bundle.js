var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-pal"], function (require, exports, aurelia_framework_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: aurelia_pal_1.PLATFORM.moduleName('pages/home'), nav: true, title: 'HOME' },
                { route: ['about'], name: 'about', moduleId: aurelia_pal_1.PLATFORM.moduleName('pages/about'), nav: true, title: 'ABOUT' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('pages/about',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
            this.message = 'about works!';
        }
        return About;
    }());
    exports.About = About;
});

define('pages/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.message = 'home works!';
        }
        return Home;
    }());
    exports.Home = Home;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./resources/elements/nav-bar.html\"></require>\n\n  <nav-bar router.bind=\"router\"></nav-bar>\n  \n  <router-view></router-view>\n</template>\n"; });
define('text!pages/about.html', ['module'], function(module) { module.exports = "<template>\n  ${message}\n</template>"; });
define('text!pages/home.html', ['module'], function(module) { module.exports = "<template>\n  ${message}\n</template>"; });
define('text!resources/elements/nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav>\n    <span repeat.for=\"row of router.navigation\">\n      <a href.bind=\"row.href\">${row.title}</a>\n    </span>\n  </nav>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map