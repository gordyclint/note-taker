const db = require('../db/db');
let id = 1;

function apiRoutes(app) {

    app.get('/api/notes', function (req, res) {
        res.json(db);
    });


    app.post('/api/notes', function (req, res) {

        req.body.id = id++;

        console.log(req.body);

        db.push(req.body);
        res.json(db);
    });

    app.get('/api/notes/:id', function (req, res) {
        let id = parseInt(req.params.id);

        index = db.findIndex(x => x.id === id);
        console.log(id);
        res.json(db[index]);


    });

    app.delete('/api/notes/:id', function (req, res) {
        let id = req.params.id;
        var myObject = { id: id };
        db.splice(db.indexOf(myObject), 1);
        res.json(db);
    });
};

module.exports = apiRoutes;