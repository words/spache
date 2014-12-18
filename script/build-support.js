'use strict';

/**
 * Dependencies.
 */

var fs,
    words;

fs = require('fs');
words = require('../data/spache.json');

/**
 * Write.
 */

fs.writeFileSync('Supported-words.md',
    'Supported Words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);