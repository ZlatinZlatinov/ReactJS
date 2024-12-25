const projectController = require("../controllers/projectController");

module.exports = (app) => {
    app.use('/projects', projectController);
}