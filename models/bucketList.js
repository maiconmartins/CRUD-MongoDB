const mongoose = require('mongoose');
var Bucketschema = new mongoose.Schema({

    name: {
        type: String

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

mongoose.model('bucket', Bucketschema);
