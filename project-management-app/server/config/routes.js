const projectController = require("../controllers/projectController");
const taskController = require("../controllers/taskController");

module.exports = (app) => {
    app.use('/projects', projectController);
    app.use('/tasks', taskController);
}