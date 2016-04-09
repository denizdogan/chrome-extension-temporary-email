# Temporary Email

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

This is a Chrome extension (and Opera add-on) which lets you easily insert temporary email addresses anywhere on the web. Perfect for registering when you don't really want to.

## Installation

Install it from Chrome Web Store or Opera add-ons (links coming later)

## Building

Requirements: NPM, Webpack

You need [Node.js](https://nodejs.org/) and the NPM tool that comes with it. Once you have that, you will need to install a lot of dependencies by running `npm install` in the root directory.

    $ cd ./chrome-extension-temporary-email
    $ npm install
    $ npm run compile

After this, the built extension will be located in the "dist" directory.

To install it, go to chrome://extensions/ in Chrome, check "Developer mode" and then "Load unpacked extension..." Point it at the "dist" directory and you're good to go.

## Development

To build everything:

    $ npm run compile

To watch the files for changes while developing:

    $ npm run watch

Note that the file watcher uses Webpack's watch feature and only detects changes to the entrypoints or their dependencies.

### Providers

To develop a new provider (temporary email website), you're probably best off just looking at the existing examples, e.g. 10minutemail. This process would ideally be simpler, but I haven't had the time or strength to develop a method for it.

1. Copy `js/providers/10minutemail` to `js/providers/foobar`
2. Edit `config.js` and `content.js` for `foobar`
3. In `background.js`, import the `foobar` configuration module and add it to the `PROVIDERS` array
4. In `manifest.json`, add references too `foobar` under `content_scripts` and `permissions`
5. In `webpack.config.js`, add a reference to `foobar` under `entry`

## TODO

See the project issues.
