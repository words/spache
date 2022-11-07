import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const endpoint =
  'https://www.readabilityformulas.com/articles/spache-formula-word-list.php'

https.get(endpoint, onresponse)

/**
 * @param {import('http').IncomingMessage} response
 */
function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  const tree = unified().use(rehypeParse).parse(buf)

  const values = selectAll('td p', tree)
    .map((/** @type {import('hast').Element} */ d) => toString(d))
    .join('|')
    .replace(/\\/g, "'")
    .trim()
    .split(/\s*\|\s*/g)
    .filter(Boolean)
    .map((/** @type {string} */ d) => d.toLowerCase())
    .filter(
      (
        /** @type {string} */ d,
        /** @type {number} */ index,
        /** @type {Array.<string>} */ all
      ) => all.indexOf(d) === index
    )
    .sort()

  fs.writeFile(
    'index.js',
    'export const spache = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
