[![Build Status](https://travis-ci.org/mikeyhogarth/underscore-is-integer.svg?branch=travis-integration)](https://travis-ci.org/mikeyhogarth/underscore-is-integer)

# Underscore isInteger
Underscore mixin for checking a variable represents a whole number.

## Getting Started

In the browser;
```html5
<script src = "path/to/underscore-min.js" type = "text/javascript"></script>
<script src = "path/to/underscore.isInteger.js"></script>
```
In Node;
```javascript
var _ = require('underscore');
_.mixin require('underscore-is-integer');
```

## Usage
```javascript
_.isInteger(1)   // true
_.isInteger(1.1) // false
```
See tests for further examples.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
