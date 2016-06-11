# Underscore isInteger

Underscore mixin for checking a variable represents a whole number.

[![npm version](https://badge.fury.io/js/underscore-is-integer.svg)](https://badge.fury.io/js/underscore-is-integer)
[![Code Climate](https://codeclimate.com/github/mikeyhogarth/underscore-is-integer/badges/gpa.svg)](https://codeclimate.com/github/mikeyhogarth/underscore-is-integer)
[![Build Status](https://travis-ci.org/mikeyhogarth/underscore-is-integer.svg?branch=master)](https://travis-ci.org/mikeyhogarth/underscore-is-integer)
[![Test Coverage](https://codeclimate.com/github/mikeyhogarth/underscore-is-integer/badges/coverage.svg)](https://codeclimate.com/github/mikeyhogarth/underscore-is-integer/coverage)

## Getting Started

In the browser;
```html5
<script src = "path/to/underscore-min.js" type = "text/javascript"></script>
<script src = "path/to/underscore.isInteger.min.js"></script>
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
