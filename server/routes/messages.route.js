const express = require('express');

class Route {
    _data;

    constructor() {
        this._data = {
            path: '/messages',
            name: 'Messages'
        }
    }
    main() {
        const route = express.Router();

        // récup la requête apres l'url : http://localhost:3000/message/try
        route.get('/try', (req,res) => res.send('try is success'))

        return route;
    }
    get data() {
        return this._data;
    }
}

module.exports = Route