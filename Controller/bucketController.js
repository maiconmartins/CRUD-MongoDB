//reques statement for express
const express = require('express');


var router = express.Router();

//creating a new router using GET function, request and response
//this function will handle my request
router.get('/', (req, res) => {
    
    res.render("BucketList/AddEdit", {//rendering my file 

        viewTitle:"Bucket List"//
    
    });
    
});
//Creating a new router using POST
router.post('/', (req, res) => {
   console.log(req.body); // my formdata will be inside my request body attribute


});

//exporting the router from the controller
module.exports = router;