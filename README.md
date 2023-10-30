# Colors

Colors is JSON with the names of colors, their values and localization. Colors
are based on HTML color names and CSS keywords:
https://en.wikipedia.org/wiki/Web_colors#HTML_color_names.

### About

Our goal is not to name all 6 million RGB color variants, but to arrive at a
standard that we can work with in the future. For this reason, `HTML` names that
are used in `CSS` have been chosen, which gives greater coverage of use cases.
It is impossible to say exactly which standard and which color names should be
used, some colors are perceived differently, others have many aliases - it is
too abstract.

Situation with colors has become quite absurd. Developers are chasing the number
of names, creating a semblance of their own palette, rather than something that
can really give an understanding of color to the user and developer at the same
time. It's easy to write "dark blue", but how will it be different from a unique
color name if without the color itself, we don't know how dark that "blue" is?

**Colors** tries to get away from abstraction by using a standard, giving
usability with a combination of performance and development at the same time, as
exemplified by the `i18n`... `No third-party dependencies`...

## Installation

`CommonJS` (script directory) and `ModuleJS` (esm directory) support for
`Node.js`, see [NPM page] for installation command. Also support for `Yarn` and
other package managers or CDNs like `UNPKG`. For `Deno` reference see
[module page], or use CDN like `esm.sh`.

[NPM page]: https://www.npmjs.com/package/@chalkpot/colors

[module page]: https://deno.land/x/chalkpot_colors

## Usage

`CommonJS` is supported, but the example represents `ESM`.

#### Basic colors

The basic colors are 16 colors defined in the HTML 4.01 specification, ratified
in 1999.

#### Extended colors

Extended colors are the result of merging specifications from HTML 4.01, CSS
2.0, SVG 1.0 and CSS3 User Interfaces (CSS3 UI).

```javascript
/* {
 *   name: 'grey',
 *   hex: '#808080',
 *   rgb: [ 128, 128, 128 ],
 *   localize: [Function: localize]
 * }
 */
console.log(basicColors.grey);

/* {
 *   name: 'darkgrey',
 *   hex: '#a9a9a9',
 *   rgb: [ 169, 169, 169 ],
 *   localize: [Function: localize]
 * }
 */
console.log(colors.darkgrey);

// dark grey
console.log(colors.darkgrey.localize("en-US"));
```

The localization function accepts a locale code: `be-BY`, `en-US`, `ru-RU`,
`uk-UA`, in various formats, such as "enUS" or "enus" or "ru", but it is
recommended to explicitly specify "en-US" with a sensitive case and delimiter
(`-`).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.
