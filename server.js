require('./models/db');

const express = require('express');
const path = require('path');//adding the request 
const exphbs = require('express-handlebars');// request statement for handlebars
const  bodyparser = require('body-parser');//request statement for body-parser


//converting that to json
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());



app.set('views', path.join(__dirname, '/views/'));//base file directory for this project

 //configuring express engine for handlebars
 app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
 app.set('view engine', 'hbs');


//adding request statement 
const bucketController = require('./Controller/bucketController');


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
//this line will configure the router for our application

app.use('/bucket', bucketController);