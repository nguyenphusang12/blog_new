const courseRouter = require('./course');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/', courseRouter);
}

module.exports = route;
