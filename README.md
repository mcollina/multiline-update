# multiline-update

Update multiple lines via an id, useful for building multiline progress bars

## Install

```
npm i multiline-update --save
```

## Usage

```js
'use strict'

var multiline = require('multiline-update')(process.stdout)

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
```

## Acknowledgements

multiline-update is sponsored by [nearForm](http://nearform.com).

## License

MIT
