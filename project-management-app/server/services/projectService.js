const Project = require("../models/Project");
const Task = require("../models/Task");

async function getAllProjects() {
    return Project.find({}).select('title').lean();
}

async function getProjectById(projectId) {
    return Project.findById(projectId).populate('tasks');
}

async function createProject(payload) {
    await Project.create(payload);
}

async function updateProject(projectId, payload) {
    await Project.findByIdAndUpdate(projectId, payload);// need to add some options, to return the updated project
}

async function deleteProject(projectId) {
    await Project.findByIdAndDelete(projectId);
    //Not sure what happens to the created tasks
}

async function addTask(projectId, taskPayload) {
    const task = await Task.create(taskPayload);
    const project = await Project.findById(projectId);

    project.tasks.push(task._id);
    await project.save();

    return task;
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    addTask
}