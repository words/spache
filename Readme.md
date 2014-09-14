# spache [![Build Status](https://travis-ci.org/wooorm/spache.svg?branch=master)](https://travis-ci.org/wooorm/spache) [![Coverage Status](https://img.shields.io/coveralls/wooorm/spache.svg)](https://coveralls.io/r/wooorm/spache?branch=master)

List of easy American-English words: The Revised Spache (1974).

Read more on the matter in [Perera, Katherine. Linguistic Difficulty in Reading Material (Linguistics and the Teacher. Vol. 112)](http://books.google.com/books?id=oNXFQ9Gn6XIC&pg=PA106&lpg=PA106).

## Installation

npm:
```sh
$ npm install spache
```

Component:
```sh
$ component install wooorm/spache
```

Bower:
```sh
$ bower install spache
```

## Usage

```js
var spache = require('spache');

spache.is('train'); // true
spache.is('unicorn'); // false

spache.add('unicorn');
spache.is('unicorn'); // true

spache.remove('unicorn');
spache.is('unicorn'); // false
```

## API

See [the **datalist-interface** API](https://github.com/wooorm/datalist-interface#datalistinterfaceisword).

## Supported words

See [Supported-words.md](Supported-words.md).

## License

MIT © Titus Wormer
