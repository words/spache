# spache [![Build Status][travis-badge]][travis]

List of easy American-English words: [Revised Spache (1974)][wiki].

Read more on the matter in [Perera, Katherine.  Linguistic Difficulty
in Reading Material (Linguistics and the Teacher.  Vol.  112)][book].

You probably also want the [formula][].

## Installation

[npm][]:

```bash
npm install spache
```

## Usage

```js
var spache = require('spache');

spache.length; //=> 1063

console.log(spache.slice(0, 10));
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

*   [`buzzwords`](https://github.com/wooorm/buzzwords)
    — List of buzzwords
*   [`fillers`](https://github.com/wooorm/fillers)
    — List of filler words
*   [`hedges`](https://github.com/wooorm/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/wooorm/profanities)
    — List of profane words
*   [`dale-chall`](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words: New Dale-Chall (1995)
*   [`weasels`](https://github.com/wooorm/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/spache.svg

[travis]: https://travis-ci.org/wooorm/spache

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Spache_readability_formula

[book]: http://books.google.com/books?id=oNXFQ9Gn6XIC&pg=PA106&lpg=PA106

[formula]: https://github.com/wooorm/spache-formula
