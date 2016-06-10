var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var ObjectId = require('mongodb').ObjectId;
var mongoUri = "mongodb://heroku_m4c5l1x1:n1q59l0vq10d5njkjc8hdgnig3@ds023613.mlab.com:23613/heroku_m4c5l1x1";

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
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.send("<p>Sorry, The Game is not available at this time.</p>");
	//res.send(__dirname + '/index.html');
});

/*app.post('/saveGame', function (req, res) {
	var pStats = JSON.parse(req.body.pStats);
	if (pStats) {
		if (pStats.pass) {
			var toInsert = {name:pStats.name, pass:(pStats.pass), pStats:pStats};
			db.collection('users').update(
				{$and:[{name:pStats.name},{pass:pStats.pass}]},
				toInsert,
				{upsert:true}
			);
		}
		res.sendStatus(200);
	} else {
		res.sendStatus(400);
	}
});

app.get('/allStats', function (req, res) {
	db.collection('users').find().toArray(function (err, cursor) {
		var allStats = {}
		for (var i = 0; i < cursor.length; i++) {
			if (cursor[i].name && cursor[i].pStats) {
				allStats[cursor[i].name] = cursor[i].pStats.highScore;
			}
		}
		res.send(allStats);
	});
});

app.post('/changeUser', function (req, res) {
	db.collection('users').findOne({$and:[{name:req.body.user},{pass:req.body.pass}]}, function (err, doc) {
		if (doc) {
			res.send(doc.pStats);
		} else {
			res.send("newUser");
		}
	});
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});