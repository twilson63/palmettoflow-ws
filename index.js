var EventEmitter = require('events')
var ee = (new EventEmitter).setMaxListeners(0)

var request = require('request')

module.exports = function (config) {
  var socket = require('socket.io-client')(config.endpoint)
  request.post(config.endpoint + '/auth', {
    json: config.auth
  }, function (e,r,b) {
    if (e) return console.log(e)
    socket.emit('join', b.token)
    ee.on('send', function (event) {
      socket.emit('publish', event)
    })
    socket.on('event', function (event) {
      ee.emit(event.to, event)
    })
    
  })
  return ee
}
