const Project = require('../models/Project');
const Task = require('../models/Task');

async function addTask(projectId, taskPayload) {
    const task = await Task.create({ task: taskPayload });
    const project = await Project.findById(projectId);

    project.tasks.push(task._id);
    await project.save();

    return task;
}

async function clearTask(taskId) {
    await Task.findByIdAndDelete(taskId);
}

module.exports = {
    addTask, clearTask
}