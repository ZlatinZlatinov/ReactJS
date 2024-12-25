const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    task: {
        type: String
    }
});

const Task = model('Task', taskSchema);

module.exports = Task;