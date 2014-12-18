'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/*
 * Data.
 */

var words;

words = require('./data/spache.json');

/*
 * Expose spache.
 */

module.exports = new Interface(words);
