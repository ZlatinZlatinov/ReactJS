const config = require('./config/config');
const {mongooseInit} = require('./config/mongooseInit');
const {expressInit} = require('./config/expressInit');

async function startServer() {
    const app = require('express')();

    expressInit(app);
    require('./config/routes')(app);

    await mongooseInit();

    app.listen(config.port, () => { console.log(`Listening on port ${config.port} ...`); });
}

startServer();