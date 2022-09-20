const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const app = express();
const port = 3000;
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');
const sortMiddleware = require('./app/middleware/sortMiddlewareEdit');
const allowCORS = require('./app/middleware/allowCORSMiddleware');

// Import function exported by newly installed node modules.
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
// Config Middleware
app.use(sortMiddleware);
app.use(allowCORS);
// methodOverride
app.use(methodOverride('_method'));
// Body-parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Connect DB
db.connect();

// Express-handlebars
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./app/helpers/handlebars'),
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Morgan
app.use(morgan('combined'));

// Routes Init
route(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});