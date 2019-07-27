const express = require('express');
const app = express();

// var secure = require('express-force-https');
// app.use(secure);

app.use(express.static(__dirname + '/dist/browser'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4202);


const path = require('path');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/browser/index.html'));
});
