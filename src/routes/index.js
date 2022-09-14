const sitesRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
  // app.use("/news", newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
  app.use('/', sitesRouter);
}

module.exports = route;
