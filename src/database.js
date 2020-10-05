const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/tasksdb'

mongoose.connect(mongoDB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection

module.exports = db

