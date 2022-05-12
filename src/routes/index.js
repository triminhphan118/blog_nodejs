// import newsRouter from './news.js';
const newsRouter = require('./news');
// import siteRouter from './site.js';
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/course', courseRouter);
    app.use('/me', meRouter);
}

module.exports = route;
