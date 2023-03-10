// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


let utcRes, unixRes;

app.get("/api/", function (req, res) {
  const dateObj = new Date();
  unixRes = dateObj.getTime();
  utcRes = dateObj.toUTCString()

  res.json({
    unix: unixRes,
    utc: utcRes
  }
  );
});
app.get("/api/:data", function (req, res) {
  res.json({
    name :'dsds'
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3232, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
