//reques statement for express
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');//request statement
const bucket = mongoose.model('bucket');//variable that will store the bucket scheema into mongoose

//creating a new router using GET function, request and response
//this function will handle my request
router.get('/', (req, res) => {

    res.render("BucketList/AddEdit", {//rendering my file 

        viewTitle: "Bucket List"//

    });

});
//Creating a new router using POST
router.post('/', (req, res) => {
    insertData(req, res); // calling the function created bellow


});

//This function will add the information from the form to MONGODB
function insertData(req, res) {

    var Bucket = new bucket();//object of bucket Schema
    Bucket.name = req.body.name;//
    Bucket.nationality = req.body.nationality;
    Bucket.age = req.body.age;
    Bucket.dream = req.body.dream;

    Bucket.save((err, doc) => {  //Saving the records, if there`s no error all the inserted will information will be listed
        if (!err)
            res.redirect('Bucket/list');
        else {

            console.log('Error during proceediment' + err);
        }


    });
}
//creating a router for the list, for that I`m using GET request, this will retrieve the information
//from mongodb to my table
router.get('/list', (req, res) => {

    bucket.find((err, docs) => {
        if (!err) {                              // if there is no error, we will return a view
            res.render("BucketList/list", {     // calling render function from response 
                list: docs                      //returning Documents into list
            });
        }
        else {
            console.log('Error in retrieving Bucket list :' + err);         //Error msg to be shown in case something goes wrong
        }
    }).lean();

});


//exporting the router from the controller
module.exports = router;