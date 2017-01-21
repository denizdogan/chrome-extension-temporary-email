# Temporary Email

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Chrome extension for quickly creating temporary email addresses.

## Usage

Right-click any text field and choose one of the providers from the list.

![Screenshot](http://i.imgur.com/NVfMTZR.png)

## Installation

Install it from [Chrome Web Store](https://chrome.google.com/webstore/detail/temporary-email/dpdilneogeopnmannkiopkignbbimbik)

### Providers

To add an email provider, look at the existing examples.

1. Copy `src/js/providers/10minutemail` to `src/js/providers/foobar`
2. Edit `index.js` and `content.js` for `foobar`
3. In `src/js/providers/index.js`, import and export the `foobar` module
4. In `manifest.json`, add `foobar` to `content_scripts` and `permissions`
5. In `webpack.config.babel.js`, add `foobar` to `entry`

## TODO

See the project issues.
