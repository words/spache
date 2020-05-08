'use strict'

var test = require('tape')
var spache = require('.')

test('spache', function(t) {
  t.equal(typeof spache, 'object', 'should be an array #1')
  t.equal(Array.isArray(spache), true, 'should be an array #2')
  t.notEqual(spache.indexOf('train'), -1, 'should contain words')
  t.notEqual(spache.indexOf("can't"), -1, "should contain can't")
  t.equal(spache.indexOf("aren't"), -1, "should not contain aren't")

  t.end()
})
