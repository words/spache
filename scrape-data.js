'use strict';

var fs, Scraper, scraper;

fs = require('fs');
Scraper = require('scraperjs').DynamicScraper;
scraper = Scraper.create(
    'http://www.readabilityformulas.com/articles/spache-formula-word-list.php'
);

function scrape() {
    var nodes = Array.prototype.slice.call(
        document.querySelectorAll('td p')
    );

    return nodes.map(function (node) {
        return node.textContent;
    });
}

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

function save(results) {
    fs.writeFileSync('data/spache.txt', parse(results).join('\n') + '\n');
}

scraper.scrape(scrape, save);
