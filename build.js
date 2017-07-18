'use strict';

var fs = require('fs');
var http = require('http');
var bail = require('bail');
var concat = require('concat-stream');
var unified = require('unified');
var parse = require('rehype-parse');
var selectAll = require('hast-util-select').selectAll;
var toString = require('hast-util-to-string');

http.get('http://www.readabilityformulas.com/articles/spache-formula-word-list.php', function (res) {
  res.pipe(concat(onconcat)).on('error', bail);

  function onconcat(buf) {
    var tree = unified().use(parse).parse(buf);
    var values = selectAll('td p', tree)
      .map(toString)
      .join('|')
      .replace(/\\/g, '$&\'')
      .trim()
      .split(/\s*\|\s*/g)
      .filter(Boolean)
      .map(lower)
      .filter(unique)
      .sort();

    fs.writeFile('index.json', JSON.stringify(values, 0, 2) + '\n', bail);
  }
});

function lower(value) {
  return value.toLowerCase();
}

function unique(value, index, all) {
  return all.indexOf(value, index + 1) === -1;
}
