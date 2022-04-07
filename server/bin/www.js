const ENV = require('dotenv').config().parsed;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class wwwClass {
    _port;
    _application;

    constructor(){
        this._port = ENV.PORT;
    }

    main() {
        this.createApplication();
        this.initializeCors();
        this.initializeBodyParser();
        this.launch();
    }

    createApplication() {
        this._application = express();
    }

    initializeCors() {
        this._application.use(cors());
    }

    initializeBodyParser() {
        this._application.use(bodyParser.json());
        this._application.use(bodyParser.urlencoded({extended: true}));
    }

    launch() {
        this._application.listen(this._port, () => {
            console.log(`application a l'url : http://localhost:${this._port}`);
        })
    }

    get application() {
        return this._application;
    }
}

module.exports = wwwClass;