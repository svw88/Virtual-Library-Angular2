var express = require('express');
var app = express();
const path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');

// configuration =================

app.use(express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	'extended' : 'true'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
}));
// parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

// method to get favorites.json and pass it to app.js
app.get('/favoritesList', function(req, res) {
	res.sendFile(__dirname + '/favorites.json');
});

// method to get favorites from app.js and write it to file in local storage
app.post('/favoritesList', function(req, res) {
	fs.writeFile(__dirname + "/favorites.json", JSON.stringify(req.body, null, 2), function(err) {
		if (err) {
			return console.log(err);
		}
		res.send('The file was saved!');
	});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});