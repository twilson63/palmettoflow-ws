var palmetto = require('../')
var newEvent = require('palmettoflow-event').newEvent

var ee = palmetto({
  endpoint: 'http://localhost:3000',
  auth: {
    user: 'admin',
    password: 'palmetto.r0x'
  }
})

var ne = newEvent('foo', 'bar', { baz: true })
ee.on(ne.from, function (event) {
 console.log(event)
})
setTimeout(function () {
  ee.emit('send', ne)
}, 500)

