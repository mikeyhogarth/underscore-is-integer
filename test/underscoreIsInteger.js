var mocha      = require('mocha')
    chai       = require('chai'),
    _          = require('underscore'),
    _isInteger = require('../index'),
    expect     = chai.expect;

describe('_.isInteger', function() {
  before(function() { 
    _.mixin(_isInteger);
  });

  function performTest(num, expectedResult) {
    context('when passed ' + num, function() {
      it('returns ' + expectedResult, function() {
        expect(_.isInteger(num)).to.equal(expectedResult);
      });
    });
  }

  performTest(3, true);
  performTest(1.1, false);
  performTest(-1, true);
  performTest("hello", false);
  performTest(null, false);
  performTest(undefined, false);

});
