var path = require('path')
var fs = require('fs')
var mockPath = path.join(__dirname, '')
var routesObj = require('./proxy.js')
var routesArray = Object.keys(routesObj)
var app = require('express')()
var router = require('express').Router()
routesArray.forEach(function (item) {
  var data = fs.readFileSync(mockPath + routesObj[item], 'utf-8')
  router.get(item, function (req, res) {
    res.send(data)
  })
  router.post(item, function (req, res) {
    res.send(data)
  })
})
app.use('/api', router)
app.listen(3000, () => console.log('mock app listening on port 3000!'))
