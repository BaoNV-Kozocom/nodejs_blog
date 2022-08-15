const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
// const sass = require('node-sass');
const route = require('./routes');
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http loger
app.use(morgan('combined'));

//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
