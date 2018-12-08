var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var ObjectId = require('mongodb').ObjectId;
var mongoUri = "mongodb://heroku_m4c5l1x1:n1q59l0vq10d5njkjc8hdgnig3@ds023613.mlab.com:23613/heroku_m4c5l1x1";
var bcrypt = require('bcrypt');
var versionNumber = 2.51;
const saltRounds = 10;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP query or post parameters

var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");//"https://the-hole.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// views is directory for all template files
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname+'/public/index.html');
});

app.get('/1029384756', function (req, res) {
	res.sendFile(__dirname+'/public/beta.html');
});

app.get('/update', function (req, res) {
	res.render(__dirname+'/public/update.html');
});

app.post('/saveGame', function (req, res) {
	var pStats = JSON.parse(req.body.pStats);
	if (pStats) {
		if (pStats.pass) {
			db.collection('users').find({name:pStats.name}).toArray(function (err, cursor) {
				for (var i = 0; i < cursor.length; i++) {
					if (cursor[i].hash && bcrypt.compareSync(pStats.pass, cursor[i].hash)) {
						delete pStats.pass;
						db.collection('users').update(
							{_id:cursor[i]._id},
							{name:pStats.name, hash:cursor[i].hash, pStats:pStats},
							{upsert:true}
						);
						if (pStats.v != versionNumber) {
							res.send("update");
						} else {
							res.sendStatus(200);
						}
						return;
					}
				}
				bcrypt.hash(pStats.pass, saltRounds, function(err, hash) {
					delete pStats.pass;
					db.collection('users').insert(
						{name:pStats.name, hash:hash, pStats:pStats}
					);
				});
				if (pStats.v != versionNumber) {
					res.send("update");
				} else {
					res.sendStatus(200);
				}
			});
		} else {
			res.sendStatus(200);
		}
	} else {
		res.sendStatus(400);
	}
});

app.get('/allStats', function (req, res) {
	db.collection('users').find().toArray(function (err, cursor) {
		var allStats = {};
		for (var i = 0; i < cursor.length; i++) {
			if (cursor[i].name && cursor[i].pStats) {
				allStats[cursor[i].name] = cursor[i].pStats.highScore;
			}
		}
		res.send(allStats);
	});
});

app.post('/changeUser', function (req, res) {
	db.collection('users').find({name:req.body.user}).toArray(function (err, cursor) {
		for (var i = 0; i < cursor.length; i++) {
			if (cursor[i].hash && bcrypt.compareSync(req.body.pass, cursor[i].hash)) {
				cursor[i].pStats.pass = req.body.pass;
				res.send(cursor[i].pStats);
				return;
			}
		}
		res.send("newUser");
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});