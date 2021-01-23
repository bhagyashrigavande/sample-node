const express = require('express');
const app = express();

app.use('/index', (req, res, next) => {
    res.send('Hello from sample app');
})

app.use('/test', (req, res, next) => {
    res.send('this is test');
})

app.listen(3000, () => {
    console.log('app is working on port 3000')
});