const mongoose = require('mongoose');

//connection to my database
mongoose.connect('mongodb+srv://admin:admin123@cluster0.bvukp.mongodb.net/BucketListDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Was a Success.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./bucketList');