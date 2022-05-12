// import engine  from 'express-handlebars';
const { engine } = require('express-handlebars');
// import express from 'express';
const express = require('express');

// import morgan from 'morgan';
const morgan = require('morgan');
// import path from 'path';

const path = require('path');
// import route from './routes/index.js';

const route = require('./routes/index');

// import { fileURLToPath } from 'url';
const fileURLToPath = require('url');

var methodOverride = require('method-override');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// connect db
const db = require('./config/db/connect');
db.connect();

let app = express();
let port = 3000;

// public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

// view engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// app.use(morgan('combined'));

// route init

route(app);

app.listen(port, () => {
    console.log('App listening port ' + port);
});
