# example-rollup-react-component-npm-package

[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/example-rollup-react-component-npm-package.svg)](https://greenkeeper.io/)
![Example Rollup React Component NPM Package](https://github.com/jaebradley/example-rollup-react-component-npm-package/workflows/Example%20Rollup%20React%20Component%20NPM%20Package/badge.svg)
[![codecov](https://codecov.io/gh/jaebradley/example-rollup-react-component-npm-package/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/example-rollup-react-component-npm-package)
[![npm](https://img.shields.io/npm/dt/@jaebradley/example-rollup-react-component-npm-package.svg)](https://www.npmjs.com/package/@jaebradley/example-rollup-react-component-npm-package)
[![npm](https://img.shields.io/npm/v/@jaebradley/example-rollup-react-component-npm-package.svg)](https://www.npmjs.com/package/@jaebradley/example-rollup-react-component-npm-package)

Example `React` component "library" using [`rollup`](https://github.com/rollup/rollup) that is published to `npm`.

## `rollup` and `webpack`

There are a lot of articles that compare `rollup` and `webpack` (like [this](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) or [this](https://webpack.js.org/comparison/) or [this](https://stackoverflow.com/a/43255948/5225575) or [this](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/)).

The general point is
> `webpack` is generally a better fit for applications, and `rollup` is generally a better fit for libraries
<sup>[1](#general-footnote)</sup>

## So what is this project?

I've never used `rollup` before - hell, I've *barely* used `webpack` before.

This was mostly to see how easy / difficult it was to create a `React` component package using `rollup` (aka "proof-of-concept").

My requirements for this package were

1. Use `babel`
2. Use `semantic-release`
3. Use `sass`
4. Support `umd` and `es` modules
5. Use `storybook`
6. Make the exported components really simple

## My general thoughts

* Seemed pretty easy to get started with `rollup`
  * There are **a lot of plugins** <sup>[2](#metric-fuck-ton-footnote)</sup>
  * Pretty easy to specify output types (`umd` and `es`, for example)
  * Some `rollup` plugins didn't really play nicely with `babel@7` - which is why I downgraded to `6` (I could definitely be messing something up)
* Not an easy way to plug `storybook` in
  * It's weird and feels kind've gross because `storybook` is using `webpack` to build 😬
* Articles that were helpful
  * [`rollup` Guide](https://rollupjs.org/guide/en)
  * [How I Set Up a React Component Library with Rollup](https://medium.com/tech-grandata-com/how-i-set-up-a-react-component-library-with-rollup-be6ccb700333)
  * [Publishing Baller React Modules](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) <sup>[3](#baller-react-modules-footnote)</sup>
  * [Making of a Component Library for React](https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7)
  * The [`transitive-bullshit/create-react-library`](https://github.com/transitive-bullshit/create-react-library) was also very useful to inspect

## Footnotes

<ul>
  <li><a name="general-footnote"><sup>1</sup></a>general general general general general. In general, I could do this all day.</li>
  <li><a name="metric-fuck-ton-footnote"><sup>2</sup></a><a href="https://github.com/rollup/rollup/wiki/Plugins">Like a metric fuck ton of plugins</a></li>
  <li><a name="baller-react-modules-footnote"><sup>3</sup></a><a href="https://media.giphy.com/media/oOTTyHRHj0HYY/giphy.gif">How I feel about "baller"</a></li>
</ul>
