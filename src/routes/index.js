const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const profileRouter = require('./profile');
const route = (app) => {
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);
    app.use('/profile', profileRouter);
    app.use('/', siteRouter);
};

module.exports = route;
