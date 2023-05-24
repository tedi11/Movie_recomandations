const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.static(path.join(__dirname, '/ProiectFinal')));
app.use('/css', express.static(__dirname + '/ProiectFinal/css'))
app.use('/js', express.static(__dirname + '/ProiectFinal/js'))

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect('/index');
    } else {
        res.redirect('/login');
    }
});

const data = { today: new Date() };


const fs = require('fs');

let rawdata = fs.readFileSync('movies-list-db.json');
let film = JSON.parse(rawdata);


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'login.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'login.html'));
});
app.get('/css/style_login.css', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'css/style_login.css'));
});
app.get('/index', (req, res) => {
    if (!req.session.loggedIn)
        res.redirect('/');
    res.render('pages/index.ejs', { today: new Date() });
    //res.sendFile(path.join(__dirname, '', 'index.ejs'));
});
app.get('/contact', (req, res) => {
    if (!req.session.loggedIn)
        res.redirect('/');
    res.sendFile(path.join(__dirname, '', 'contact.html'));
});
app.get('/css/style_index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'css/style_index.css'));
});
app.get('/js/script_index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'js/script_index.js'));
});
///
app.get('/css/style_contact.css', (req, res) => {
    res.sendFile(path.join(__dirname, '', '/css/style_contact.css'));
});
app.get('/js/script_contact.js', (req, res) => {
    res.sendFile(path.join(__dirname, '', '/js/script_contact.js'));
});

app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '', 'eroare.html'));
});
app.get('/css/style_eroare.css', (req, res) => {
    res.sendFile(path.join(__dirname, '', '/css/style_eroare.css'));
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});