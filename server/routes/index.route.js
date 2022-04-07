const express = require('express');

class Route {
    _data;

    constructor() {
        this._data = {
            path: '/',
            name: 'Index'
        }
    }
    main() {
        const route = express.Router();

        route.get('/try', (req,res) => res.send('try is success'))

        return route;
    }
    get data() {
        return this._data;
    }
}

module.exports = Route