const sitesRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const loginRouter = require('./login');

function route(app) {
  // app.use("/news", newsRouter);
  app.use('/login', loginRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
  app.use('/', sitesRouter);
}

module.exports = route;