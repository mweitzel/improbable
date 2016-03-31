## probably

probably run a function

## install

npm install `improbable`

## usage

```js
var probably = require('improbable').probably

var maybeHello = probably(0.5, function() { console.log('hello') })
// 0.5 probability of being this function, 0.5 of being noop

maybeHello()
maybeHello()
maybeHello()
// calling over will always yield same result, either logging "hello" or doing nothing

```

## license

MIT
