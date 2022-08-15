const newRouter = require('./news');
const siteRouter = require('./site');
const route = (app) => {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
};

module.exports = route;
