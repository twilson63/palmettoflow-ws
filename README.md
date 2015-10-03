# palmettoflow-ws

A palmettoflow adapter that uses websockets and a websocket services as the pub/sub connector.

## usage

Setup a service

``` js
var palmetto = require('../')
var response = require('palmettoflow-event').response

var ee = palmetto({
  //endpoint: 'http://localhost:3000',
  auth: {
    user: 'admin',
    password: 'password'
  }
})

ee.on('/foo/bar', function (event) {
  console.log(event)
  ee.emit('send', response(event, {ok:true}))
})

```

Setup a client

``` js
var palmetto = require('../')
var newEvent = require('palmettoflow-event').newEvent

var ee = palmetto({
  endpoint: 'http://localhost:3000',
  auth: {
    user: 'admin',
    password: 'password'
  }
})

var ne = newEvent('foo', 'bar', { baz: true })
ee.on(ne.from, function (event) {
 console.log(event)
})
setTimeout(function () {
  ee.emit('send', ne)
}, 500)

```
