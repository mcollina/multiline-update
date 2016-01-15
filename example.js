'use strict'

var multiline = require('./')(process.stdout)

multiline.update('a', 'hello')
multiline.update('b', 'hello')
multiline.update('c', 'hello')

var count = 0

setInterval(function () {
  count++
  multiline.update('a', count + '')
  multiline.update('b', count + '')
  multiline.update('c', count + '')
}, 1000)
