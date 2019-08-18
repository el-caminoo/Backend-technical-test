const express = require('express');
const bodyParser = require('body-parser');
require('express-validator');
const app = express();
const object = require('./routes/object.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', object);

app.listen(8000, () => {
    console.log('server started at 8000');
});