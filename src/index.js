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
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is listening on Port 3000');
});
