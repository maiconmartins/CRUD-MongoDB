const mongoose = require('mongoose');
var schema = new mongoose.schema({

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

mongoose.model('bucket' ,schema);