const express = require('express');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
require('dotenv').config()
fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
var lat, long;
var risk;
var dbName = "CovidDB";
var collectionName = "SAT";
var url = process.env.DATABASE;

const riskValue = {
    "/pages/feelingOk.html": 1,
    "/pages/monitorSymptom.html": 2,
    "/pages/occupational.html": 3,
    "/pages/monitor2.html": 4,
    "/pages/feelingSick.html": 5,
    "/pages/stayHome.html": 6,
    "/pages/callMedProv.html": 7,
    "/pages/contMedProv.html": 8,
    "/pages/call911.html": 9
}

app.get('/pages/*', function (req, res) {

    if (req.url.toString() == '/pages/map.html') {
        // fetchData();

    } else {
        risk = riskValue[`${req.url}`];
    }
    res.sendFile(path.join(__dirname + `/SAT/${req.url}`));
});

app.get('/data', function (req, res) {
    res.sendFile(path.join(__dirname + `/Info.json`));

});

app.get('/script', function (req, res) {

    res.sendFile(path.join(__dirname + `/public/assets/js/scripts.js`));

});

// For parsing application/json 
app.use(express.json());

// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));

// POST method route
app.post('/coords', function (req, res) {
    lat = req.body.latitude;
    long = req.body.longitude;
    insertResponse(risk, lat, long);
    res.send('POST request to the homepage');
});

app.use('/stats', express.static('stats'));

// Setting up the SAT directory
app.use('/SAT', express.static('SAT'));

// Setting up the public directory
app.use(express.static('public'));

function insertResponse(riskVal) {

    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        console.log("Data Base Created!!");

        var dbo = db.db(`${dbName}`);

        var dataInsert = { risk: `${riskVal}`, latitude: `${lat}`, longitude: `${long}` };
        dbo.collection(`${collectionName}`).insertOne(dataInsert, function (err, res) {
            if (err) throw err;

            console.log("1 document inserted");

            db.close();
        });
    });
}

function fetchData() {

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;

        var dbo = db.db(`${dbName}`);

        dbo.collection(`${collectionName}`).find({}).toArray(function (err, result) {
            if (err) throw err;
            // plotMap();
            fs = require('fs');

            fs.writeFile('./Info.json', JSON.stringify(result), function (err) {
                if (err) return console.log(err);
                // console.log('Hello World > helloworld.txt');
            });
            db.close();
        });

    });

}
setInterval(fetchData, 60000);
app.listen(port, () => console.log(`listening on port ${port}!`));