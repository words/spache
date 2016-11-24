'use strict';

var fs = require('fs');
var bail = require('bail');
var jsdom = require('jsdom');

jsdom.env('http://www.readabilityformulas.com/articles/spache-formula-word-list.php', read);

function read(err, window) {
  bail(err);

  var values = [].slice.call(window.document.querySelectorAll('td p'))
    .map(function (node) {
      return node.textContent;
    })
    .join('|')
    .replace(/\\/g, '$&\'')
    .trim()
    .split(/\s*\|\s*/g)
    .filter(Boolean)
    .map(function (value) {
      return value.toLowerCase();
    })
    .sort();

  values = values.filter(function (value, index) {
    return values.indexOf(value, index + 1) === -1;
  });

  fs.writeFileSync('index.json', JSON.stringify(values, 0, 2) + '\n');
}
