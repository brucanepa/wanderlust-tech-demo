const express = require('express');
const helmet = require('helmet');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const compression = require('compression');

const config = require('./config');
const routes = require('./routes');
const customMiddlewares = require('./src/middlewares/alwaysRunMiddlewares');
const mongoDbUtils = require('./src/utils/mongoDbUtils');

const app = express();

const useThirdPartyMiddlewares = () => {
    app.use(helmet());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride('X-HTTP-Method-Override'));
    app.use(function(req, res, next) { // CORS Support
        res.header('Access-Control-Allow-Origin', config.cors);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Auth-UserId, X-Auth-Token');
        next();
    });
    app.use(compression());
    app.use(function(err, req, res, next) { // error handler
        console.log(err.stack);
        next(err);
    });
};

const useCustomMiddlewares = () => {
    Object.keys(customMiddlewares).forEach(middleware => {
        app.use(customMiddlewares[middleware]);
    });
};

const useControllers = () => {
    Object.keys(routes).forEach(route => {
        app.use(route, routes[route](express.Router()));
    });
};

const initServer = () => {
    useThirdPartyMiddlewares();
    useCustomMiddlewares();
    useControllers();

    app.listen(config.serverPort, function(error) {
        if (error) {
            console.log("Error: " + error);
        } else {
            console.log("Listening on port " + config.serverPort + "...");
        }
    });

    mongoDbUtils.connect();
};

initServer();
