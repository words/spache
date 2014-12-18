'use strict';

/*
 * Dependencies.
 */

var spache,
    assert;

spache = require('./');
assert = require('assert');

/*
 * Tests.
 */

describe('spache', function () {
    it('should be an `Object`', function () {
        assert(typeof spache === 'object');
    });
});

describe('spache.is(word)', function () {
    it('should return true if a word is listed', function () {
        assert(spache.is('train') === true);
    });

    it('should return false if a word is not listed', function () {
        assert(spache.is('unicorn') === false);
    });
});

describe('spache.all()', function () {
    var all;

    all = spache.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (word) {
            assert(word.toLowerCase() === word);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (word, index) {
            assert(all.indexOf(word, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(spache.all().indexOf('unicorn') === -1);
    });
});

describe('spache.add(word) and spache.remove(word)',
    function () {
        it('should add and remove a word', function () {
            assert(spache.is('unicorn') === false);

            spache.add('unicorn');

            assert(spache.is('unicorn') === true);

            spache.remove('unicorn');

            assert(spache.is('unicorn') === false);
        });

        it('should add and remove multiple words', function () {
            assert(spache.is('unicorn') === false);
            assert(spache.is('rainbow') === false);

            spache.add('unicorn', 'rainbow');

            assert(spache.is('unicorn') === true);
            assert(spache.is('rainbow') === true);

            spache.remove('unicorn', 'rainbow');

            assert(spache.is('unicorn') === false);
            assert(spache.is('rainbow') === false);
        });

        it('should fail silently when removing a non-existing word',
            function () {
                assert(spache.is('unicorn') === false);

                spache.remove('unicorn');

                assert(spache.is('unicorn') === false);
            }
        );
    }
);
