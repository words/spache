# spache

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of familiar American-English words: [Revised Spache (1974)][wiki].

Read more on the matter in [Perera, Katherine.  *Linguistic Difficulty in
Reading Material.*  (Linguistics and the Teacher.  Vol.  112)][book].

You probably also want the [formula][].

## Install

[npm][]:

```sh
npm install spache
```

## Use

```js
var spache = require('spache')

spache.length //=> 1063

console.log(spache.slice(0, 10))
```

Yields:

```js
[ 'a',
  'able',
  'about',
  'above',
  'across',
  'act',
  'add',
  'afraid',
  'after',
  'afternoon' ]
```

## API

### `spache`

**spache** exposes a list of strings (`Array.<string>`).

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of easy American-English words: New Dale-Chall (1995)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/spache.svg

[build]: https://travis-ci.org/words/spache

[downloads-badge]: https://img.shields.io/npm/dm/spache.svg

[downloads]: https://www.npmjs.com/package/spache

[size-badge]: https://img.shields.io/bundlephobia/minzip/spache.svg

[size]: https://bundlephobia.com/result?p=spache

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Spache_readability_formula

[book]: https://books.google.com/books?id=oNXFQ9Gn6XIC&pg=PA106&lpg=PA106

[formula]: https://github.com/words/spache-formula
