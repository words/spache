# spache

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of familiar American-English words: [Revised Spache (1974)][wiki].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`spache`](#spache-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a list of familiar words.

## When should I use this?

Use this when you want to do readability things with natural language.

Use [`spache-formula`][spache-formula] for the formula.

Alternatively, you can use [`dale-chall`][dale-chall], which has more words
(about 3 000) and is more recent (1995).

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install spache
```

In Deno with [`esm.sh`][esmsh]:

```js
import {spache} from 'https://esm.sh/spache@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {spache} from 'https://esm.sh/spache@2?bundle'
</script>
```

## Use

```js
import {spache} from 'spache'

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

This package exports the identifier `spache`.
There is no default export.

### `spache`

List of strings (`Array<string>`).

## Data

See [Perera, Katherine.  *Linguistic Difficulty in
Reading Material.*  (Linguistics and the Teacher.  Vol.  112)][book].

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`spache-formula`][spache-formula]
    — formula to detect the grade level of text according
*   [`dale-chall`][dale-chall]
    — list of easy American-English words: new Dale–Chall (1995)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/spache/workflows/main/badge.svg

[build]: https://github.com/words/spache/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/spache.svg

[coverage]: https://codecov.io/github/words/spache

[downloads-badge]: https://img.shields.io/npm/dm/spache.svg

[downloads]: https://www.npmjs.com/package/spache

[size-badge]: https://img.shields.io/bundlephobia/minzip/spache.svg

[size]: https://bundlephobia.com/result?p=spache

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[wiki]: https://en.wikipedia.org/wiki/Spache_readability_formula

[book]: https://books.google.com/books?id=oNXFQ9Gn6XIC&pg=PA106&lpg=PA106

[spache-formula]: https://github.com/words/spache-formula

[dale-chall]: https://github.com/words/dale-chall
