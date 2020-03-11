//const as they will never change
const express       = require('express');
const app           = express();
const path          = require('path');
const mysql         = require('mysql');
const session       = require('express-session');
const MySQLStore    = require('express-mysql-session')(session);
const Router        = require('./Router');

var Port          = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

// For the Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lifesaverdb'
});

db.connect(function(err) {
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }
});

const sessionStore = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionOnClose: false
}, db);

app.use(session ({
    key: '132jmklpojtfy0wrttljklsdre',
    secret: 'oipuujighiuhdwawdewqaawd',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));

new Router(app, db);

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(Port, () => {
    console.log(`Server started on port ${Port}...`);
});