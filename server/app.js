var express = require("express");   //Putting code in our app
var app = express();
var bodyParser = require('body-parser');
var jokes = require('./jokes');
var index = require('./index');

// initial jokes provided by the client


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/jokes', jokes);

app.use('/', index);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
 console.log('server is listening on port ' + app.get('port'));
});
