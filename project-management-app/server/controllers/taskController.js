const { addTask, clearTask } = require('../services/taskService');

const taskController = require('express').Router();

taskController.post('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const { task } = req.body;
    
    try {
        const t = await addTask(projectId, task);
        res.json(t);
    } catch (err) {
        console.log(err.message);
        console.error(err);
        res.status(400).end();
    }
});

taskController.delete('/:taskId', async (req, res) => {
    const taksId = req.params.taskId;

    try {
        await clearTask(taksId);
        res.status(204).end();
    } catch (err) {
        res.status(400).end();
        console.log(err.message);
    }
})

module.exports = taskController;