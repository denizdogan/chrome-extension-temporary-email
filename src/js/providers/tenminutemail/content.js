import config from './content.js'

// get the input element holding the email
let element = document.getElementById('addyForm:addressSelect')

// if found, tell the background script
if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}

const SETTING_HANDLERS = {
  '10minutemail--auto-renew': function (value) {
    // click the reset button every 2 seconds
    // let's do it this way so people won't understand what's going on
    value && setInterval(function () {
      let resetElem = document.querySelector('a[href$="resetSessionLife"]')
      resetElem && resetElem.click()
    }, 2 * 1000)
  }
}

// get the settings and let its handler deal with it
chrome.storage.sync.get(config.DEFAULT_SETTINGS, function (response) {
  for (let key in response) {
    let value = response[key]
    let handler = SETTING_HANDLERS[key]
    if (handler) {
      handler(value)
    }
  }
})
