var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use(function(req, res, next) {
  //res.send("Req")
  res.render('index');
});

MongoClient.connect("mongodb://localhost:27017/local", function(err, db) {
  if (err) throw err;

  db.collection('tasks', function(err, collection) {
    //console.log(collection.find());
    collection.insert({str: "Teste string"}).then(data => {
      console.log(data);
    });
  })
})

module.exports = app;
