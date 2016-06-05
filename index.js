var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var ObjectId = require('mongodb').ObjectId;
var mongoUri = "mongodb://heroku_m4c5l1x1:n1q59l0vq10d5njkjc8hdgnig3@ds023"

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters

var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});
/* CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.send(__dirname + '/index.html');
});

app.post('/saveGame', function (req, res) {
	var toInsert = {_id:req.body.pStats.name};
	toInsert[req.body.pStats.name] = req.body.pStats;
	db.collection('users').update({_id:req.body.pStats.name}, toInsert, {upsert:true});
	res.send(200);
});

app.get('/allStats', function (req, res) {
	console.log(db.collection('users').find());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});