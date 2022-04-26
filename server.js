require('./models/db');

const express = require('express');
var app = express();

//adding request statement 
const bucketController = require('./Controller/bucketController');


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
//this line will configure the router for our application

app.use('/bucket', bucketController);