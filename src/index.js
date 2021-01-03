/*
 * Title:Stack Bucket
 * Description:A simple Shoping List Application Made with Node & Express
 * Author:Mks Tamin
 * Date: 02.01.2021
 *
 */
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../', 'public')));

app.get('/', (req, res) => {
    // throw new Error('error');
    res.send('Hello World');
});

app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    if (error.status === 404) {
        res.status(404);
        return res.render('errors/404');
    }

    res.status(500);
    res.render('errors/500');

    // not writen on real code that had writen by HM Nayem @TODO:  deleteable
    return next();
});

app.listen(3000, () => {
    console.log('Server is listening on Port 3000');
});
