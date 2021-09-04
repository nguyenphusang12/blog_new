const express = require('express');
const morgan = require('morgan');
const app = express();
const hdb = require('express-handlebars');
const port = 8888;
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
var methodOverride = require('method-override');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride('_method'));

// app.use(morgan('combined'));

app.engine(
    '.hbs',
    hdb({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resource', 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
