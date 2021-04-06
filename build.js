import fs from 'fs'
import https from 'https'
import {bail} from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
import $ from 'hast-util-select'
import toString from 'hast-util-to-string'

var endpoint =
  'https://www.readabilityformulas.com/articles/spache-formula-word-list.php'

https.get(endpoint, onresponse)

function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var values = $.selectAll('td p', tree)
    .map((d) => toString(d))
    .join('|')
    .replace(/\\/g, "'")
    .trim()
    .split(/\s*\|\s*/g)
    .filter(Boolean)
    .map((d) => d.toLowerCase())
    .filter((d, index, all) => all.indexOf(d) === index)
    .sort()

  fs.writeFile(
    'index.js',
    'export var spache = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
