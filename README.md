# flatten-js

> Flatten any dimensional array

[![Package Version](https://img.shields.io/npm/v/flatten-js.svg?style=flat-square)](https://www.npmjs.com/package/flatten-js)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Downloads Status](https://img.shields.io/npm/dm/flatten-js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=flatten-js&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/sharvit/flatten-js/master.svg?style=flat-square)](https://travis-ci.org/sharvit/flatten-js)
[![Coverage Status](https://coveralls.io/repos/github/sharvit/flatten-js/badge.svg?branch=master)](https://coveralls.io/github/sharvit/flatten-js?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/sharvit/flatten-js/status.svg)](https://david-dm.org/sharvit/flatten-js)
[![devDependencies Status](https://david-dm.org/sharvit/flatten-js/dev-status.svg)](https://david-dm.org/sharvit/flatten-js?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Returns a new array that is a one-dimensional flattening of the input array (recursively).
That is, for every element that is an array, extract its elements into the new array.

## Installation

```sh
npm install --save sharvit-flatten-js
```

## Usage

```js
import flatten from 'sharvit-flatten-js';

flatten([[1,2,[3]],4]);
//=> [1, 2, 3, 4]
```

If you are not able to use `es-modules`, you can use `require` instead of `import`
```js
const { default: flattenJs } = require('sharvit-flatten-js');
```

To use it directly inside a browser, load it via a script `tag`:
```html
<script type="text/javascript" src="./node_modules/sharvit-flatten-js/dist/index.js"></script>
<script type="text/javascript">
  const { default: flattenJs } = window.flattenJs;
</script>
```

## License

MIT &copy; [Avi Sharvit](https://sharvit.github.io)
