// reques statement for express
const express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const mongoose = require('mongoose'); // request statement
const bucket = mongoose.model('bucket');
// variable that will store the bucket scheema into mongoose

// creating a new router using GET function, request and response
// this function will handle my request
router.get('/', (req, res) => {

    res.render("BucketList/AddEdit", { // rendering my file

        viewTitle: "Bucket List" //

    });

});
// Creating a new router using POST, here I can identify if I have an INSERT or UPDATE operation
router.post('/', (req, res) => {

    if (req.body._id == '') 
        insertData(req, res);
     // function Insert Data else 
        updateData(req, res);
     // function updataData

});

// ----------------INSERT NEW DATA TO MONGODB--------------------------------------------------
function insertData(req, res) {

    var Bucket = new bucket(); // object of bucket Schema
    Bucket.name = req.body.name; //
    Bucket.nationality = req.body.nationality;
    Bucket.age = req.body.age;
    Bucket.dream = req.body.dream;

    Bucket.save((err, doc) => { // Saving the records, if there`s no error all the inserted will information will be listed
        if (!err) 
            res.redirect('Bucket/list');
         else {

            console.log('Error during proceediment' + err);
        }


    });
}
// ------------------------UPDATE DATA--------------------------------
function updateData(req, res) {
    bucket.findOneAndUpdate({
        _id: req.body._id
    }, req.body, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.redirect('Bucket/list');
        } // if there is no error I will return the update values else {
            if (err.name == 'ValidationError') { // if there is some error, I will return the validation error
                handleValidationError(err, req.body);
                res.render("Bucket/AddEdit", {
                    viewTitle: 'Update User',
                    bucket: req.body
                });
            } else 
                console.log('Error during record update : ' + err);
             // if the error is not related to validation I will return the error
        }
    });
}


// ------------------RETRIEVE INFORMATION FROM MONGODB TO MY TABLE-------------------------------------
// creating a router for the list, for that I`m using GET request, this will retrieve the information
// from mongodb to my table
router.get('/list', (req, res) => {

    bucket.find((err, docs) => {
        if (!err) { // if there is no error, we will return a view
            res.render("BucketList/list", { // calling render function from response
                list: docs // returning Documents into list
            });
        } else {
            console.log('Error in retrieving Bucket list :' + err); // Error msg to be shown in case something goes wrong
        }
    }).lean();

});
// ---------------------Retrieve information to UPDATE TABLE----------------------------

router.get('/:id', (req, res) => { // this will retrieve  a specific user by ID into my UPDATE table
    bucket.findById(req.params.id, (err, doc) => { // finding user by id
        if (!err) {
            res.render("BucketList/AddEdit", { // rendering my file Add and eddit
                viewTitle: "Update User",
                bucket: doc
            });
        }
    }).lean();
});
// -------------------DELETE OPERATION--------------------------------
router.get('/delete/:id', (req, res) => {
    bucket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/Bucket/list'); // if there is no error I wanna return an updated list
        } else {
            console.log('Error in user delete :' + err);
        }
    });
});


// exporting the router from the controller
module.exports = router;
