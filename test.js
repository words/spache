import assert from 'node:assert'
import test from 'node:test'
import {spache} from './index.js'

test('spache', function () {
  assert.equal(typeof spache, 'object', 'should be an array #1')
  assert.equal(Array.isArray(spache), true, 'should be an array #2')
  assert.notEqual(spache.indexOf('train'), -1, 'should contain words')
  assert.notEqual(spache.indexOf("can't"), -1, "should contain can't")
  assert.equal(spache.indexOf("aren't"), -1, "should not contain aren't")
})
