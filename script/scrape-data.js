'use strict';

/**
 * Dependencies.
 */

var fs,
    Scraper;

fs = require('fs');
Scraper = require('scraperjs').DynamicScraper;

/**
 * Scrape.
 *
 * @return {Array.<string>}
 */

function scrape() {
    return Array.prototype.slice.call(
        document.querySelectorAll('td p')
    ).map(function (node) {
        return node.textContent;
    });
}

/**
 * Clean scraped data.
 *
 * @param {Array.<string>} values
 * @return {Array.<string>}
 */

function parse(values) {
    values = values
        .join('|')
        .replace(/\\/g, '$&\'')
        .trim()
        .split(/\s*\|\s*/g)
        .filter(function (value) {
            return Boolean(value);
        })
        .map(function (value) {
            return value.toLowerCase();
        });

    return values.filter(function (value, index) {
        return values.indexOf(value, index + 1) === -1;
    });
}

/**
 * Write clean data.
 *
 * @param {Array.<string>} results - Raw data.
 */

function save(results) {
    fs.writeFileSync('data/spache.txt', parse(results).join('\n') + '\n');
}

/**
 * Scraper.
 */

Scraper.create(
    'http://www.readabilityformulas.com/articles/spache-formula-word-list.php'
).scrape(scrape, save);
