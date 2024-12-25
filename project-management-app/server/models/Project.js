const { Schema, model, Types } = require('mongoose');

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        requred: true
    },
    tasks: [{ type: Types.ObjectId, ref: 'Task' }]
});

const Project = model('Project', projectSchema);

module.exports = Project;