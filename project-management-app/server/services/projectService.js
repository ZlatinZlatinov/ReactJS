const Project = require("../models/Project");
const Task = require("../models/Task");

async function getAllProjects() {
    return Project.find({}).select('title').lean();
}

async function getProjectById(projectId) {
    return Project.findById(projectId).populate('tasks');
}

async function createProject(payload) {
    const project = await Project.create(payload);
    return { _id: project._id, title: project.title }; // Only those values are needed for now
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