const wwwClass = require('./bin/www');
const Router = require('./models/router.model');
const www = new wwwClass();
www.main();

new Router(__dirname, www.application).initializeRoutes()