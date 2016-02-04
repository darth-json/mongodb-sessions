var http = require('http')
var server = http.createServer(require('./app'))

server.on('listening', function () {
  console.log('server listening on port', server.address().port)
})
server.on('error', function (error) {
  console.error('Could not start listening', error)
})
server.listen(process.env.PORT || 7000)
