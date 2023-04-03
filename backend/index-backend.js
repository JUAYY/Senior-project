const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const dbConnection = require('./database');
const { body, validationResult } = require('express-validator');
const { Console } = require('console');

// const expressVue = require("express-vue");
const app = express();
app.use(express.urlencoded({ extended: false }))

// app.set('./src/views', path.join(__dirname, './src/views'));
// app.set('view engine');

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 3600 * 1000
}))

app.get('/', (req, res) => {
    res.json({ message: "Welcome" })
});

//Declaring Custom middleware
const ifNotLoggedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        console.log('LOL');
    }
    next();
}

//root page
// app.get('/', ifNotLoggedIn, (err, req, res, next) => {
//     dbConnection.execute("SELECT name FROM users WHERE id = ?", [req.session.userID])
//         .then(([rows]) => {
//             // res.render('HomeView', {
//             //     name: rows[0].name
//             // })
//             next(err);
//             // routes.push("/HomeView")
//             // res.redirect("/");
//             // router.
//         })
// })

app.listen(3000, () =>
    console.log("Server is running..."))