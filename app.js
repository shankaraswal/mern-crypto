const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

var bodyParser = require('body-parser')

//const debug = require("debug")("server");


//serving static files: middleware
app.use(express.static('public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

//importing routes
require('./routes')(app);

//template engine
app.set('view engine', 'ejs');

//listen on port
//app.listen(port, () => debug(`Listening on port ${port}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
