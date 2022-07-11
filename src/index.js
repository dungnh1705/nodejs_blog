const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(
    express.json({
        extended: true
    })
);

// HTTP Logger
// app.use(morgan('combined'));

// Template
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
