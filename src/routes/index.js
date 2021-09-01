const newRouter = require('./news');
const siteRouter = require('./site');
const ad = 1;

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

module.exports = route;
