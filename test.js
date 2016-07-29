/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module spache
 * @fileoverview Test suite for `spache`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var spache = require('./');

/* Tests. */
test('characterEntities', function (t) {
  t.equal(typeof spache, 'object', 'should be an array #1');
  t.equal(Array.isArray(spache), true, 'should be an array #2');
  t.notEqual(spache.indexOf('train'), -1, 'should contain words');

  t.end();
});
