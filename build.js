import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const response = await fetch(
  'https://www.readabilityformulas.com/articles/spache-formula-word-list.php'
)
const text = await response.text()

const tree = fromHtml(text)

const values = selectAll('td p', tree)
  .map((d) => toString(d))
  .join('|')
  .replace(/\\/g, "'")
  .trim()
  .toLowerCase()
  .split(/\s*\|\s*/g)
  .filter(Boolean)
  .sort()

await fs.writeFile(
  'index.js',
  '/**\n * List of familiar American-English words: Revised Spache (1974)\n*/\nexport const spache = ' +
    JSON.stringify([...new Set(values)], null, 2) +
    '\n'
)
