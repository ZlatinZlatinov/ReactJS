const { 
    getAllProjects, 
    getProjectById, 
    createProject, 
    updateProject, 
    deleteProject, 
    addTask } = require('../services/projectService');

//Todo: Add error handling and data validation
const projectController = require('express').Router();

projectController.get('/all', async (req, res) => {
    const projects = await getAllProjects();
    res.json(projects);
});

projectController.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const project = await getProjectById(projectId);

    res.json(project);
});

projectController.post('/', async (req, res) => {
    const { title, description, date } = req.body;
    await createProject({ title, description, date });

    res.status(200).end();//At this point I dont need to return the project
});

projectController.post('/task/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const { task } = req.body;

    const t = await addTask(projectId, task);

    res.json(t);
});

projectController.put('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const { title, description, date } = req.body;
    await updateProject(projectId, { title, description, date });

    res.status(200).end();
});

projectController.delete('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await deleteProject(projectId);

    res.status(204).end();
});

module.exports = projectController;

