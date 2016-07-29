/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module spache:script
 * @fileoverview Generate a dictionary of entity names to replacements.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var Scraper = require('scraperjs');

/* Read. */
Scraper.DynamicScraper
  .create(
    'http://www.readabilityformulas.com/articles/' +
    'spache-formula-word-list.php'
  )
  .scrape(scrape, function (results) {
    var list = JSON.stringify(parse(results), 0, 2) + '\n';
    fs.writeFileSync(path.join(__dirname, '..', 'index.json'), list);
  });

/**
 * Scrape.
 */
function scrape() {
  /* global document */
  return [].slice.call(document.querySelectorAll('td p'))
    .map(function (node) {
      return node.textContent;
    });
}

/**
 * Parse.
 */
function parse(values) {
  values = values
    .join('|')
    .replace(/\\/g, '$&\'')
    .trim()
    .split(/\s*\|\s*/g)
    .filter(Boolean)
    .map(function (value) {
      return value.toLowerCase();
    })
    .sort();

  return values.filter(function (value, index) {
    return values.indexOf(value, index + 1) === -1;
  });
}
