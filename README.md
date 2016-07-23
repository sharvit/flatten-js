# flatten-js

Returns a new array that is a one-dimensional flattening of the input array (recursively).
That is, for every element that is an array, extract its elements into the new array.

### install

```bash
npm install --save https://github.com/sharvit/flatten-js.git
```

### usage

```javascript
var flatten = require('flatten-js');

var deepArray = [[1,2,[3]],4];

flatten(deepArray); // -> [1, 2, 3, 4]

```