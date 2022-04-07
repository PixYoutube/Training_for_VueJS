const {readdirSync} = require('fs');

class Router {
    _dirname;
    _application;

    constructor(dirname, application) {
        this._dirname = dirname;
        this._application = application;
    }

    initializeRoutes() {
        const routesFiles = readdirSync(`${this._dirname}/routes`).filter(f => f.endsWith('route.js'));
        routesFiles.map(fileName => {
            const routeClass = require(`${this._dirname}/routes/${fileName}`);
            const route = new routeClass();
            console.log(route)
            this._application.use(route.data.path, route.main())
        })
    }
}

module.exports = Router;