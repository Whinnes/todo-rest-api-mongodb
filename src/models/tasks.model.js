const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    name: {type: String, required: true},
    status: {type: String, default: 'Pending'},
})

module.exports = mongoose.model('taskModel', taskSchema);

