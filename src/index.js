import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import route from './routes/index.js';

// const express = require('express');
// const morgan = require('morgan');
import { fileURLToPath } from 'url';
import { query } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// view engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.use(morgan('combined'));

// route init

route(app);

app.listen(port, () => {
    console.log('App listen port ' + port);
});
