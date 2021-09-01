const express = require('express');
const morgan = require('morgan');
const app = express();
const hdb = require('express-handlebars');
const port = 8888;
const path = require('path');
const route = require('./routes');

const object1 = {
    a: 1,
    b: 2,
    c: 3,
};

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(morgan('combined'));

app.engine('.hbs', hdb({ extname: '.hbs' }));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resource/views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
