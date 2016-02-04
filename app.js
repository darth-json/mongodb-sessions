var config = require('./config')
var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname)

app.get('/', function (req, res) {
  res.render('index', {user: req.user})
})

module.exports = app
