const mongoose = require('mongoose');
var Bucketschema = new mongoose.Schema({

    name: {
        type: String,
        required: 'This field is required'
    },
    nationality: {
        type: String
    },
    age: {
        type: String

    },
    dream: {
        type: String
    }


});

mongoose.model('bucket' ,Bucketschema);