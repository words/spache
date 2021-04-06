'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var selectAll = require('hast-util-select').selectAll
var toString = require('hast-util-to-string')

var endpoint =
  'https://www.readabilityformulas.com/articles/spache-formula-word-list.php'

https.get(endpoint, onresponse)

function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var values = selectAll('td p', tree)
    .map((d) => toString(d))
    .join('|')
    .replace(/\\/g, "'")
    .trim()
    .split(/\s*\|\s*/g)
    .filter(Boolean)
    .map((d) => d.toLowerCase())
    .filter((d, index, all) => all.indexOf(d) === index)
    .sort()

  fs.writeFile('index.json', JSON.stringify(values, 0, 2) + '\n', bail)
}
