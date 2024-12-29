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

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}