const express = require('express');
const app = express();

app.use('/index', (req, res, next) => {
    res.send('Hello from sample app, this project is build by Jenkins');
});

app.use('/test', (req, res, next) => {
    res.send('this is test');
});

app.use('/', (req, res, next) => {
    res.send('<p> Welcome ZenConix Test Server </p>');
});

app.listen(3001, () => {
    console.log('app is working on port 3001')
});
