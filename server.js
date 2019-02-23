///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();

//Models
var models = require("./models");

// Ports
const port = process.env.PORT || 5000;


///////////////////////////////////////////////////////////////////////////////////////
//                               App & Database Config                               //
///////////////////////////////////////////////////////////////////////////////////////

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// An api endpoint that returns a short list of items
app.get('/api/getGames', (req, res) => {
    // find multiple entries
    models.Game.findAll().then(games => {
        // games will be an array of all Game instances
        res.json(games);
    })
});

app.get('/api/createGame', (req, res) => {
    models.Game.create({ gameName: req.query.name}).then(task => {
        // you can now access the newly created task via the variable task
        res.json(task);
      })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(port);

console.log('App is listening on port ' + port);