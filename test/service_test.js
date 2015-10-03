var palmetto = require('../')
var response = require('palmettoflow-event').response

var ee = palmetto({
  endpoint: 'http://localhost:3000',
  auth: {
    user: 'admin',
    password: 'palmetto.r0x'
  }
})

ee.on('/foo/bar', function (event) {
  console.log(event)
  ee.emit('send', response(event, {ok:true}))
})
