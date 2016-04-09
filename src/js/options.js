console.log('options.js')

import '../stylesheets/normalize.css'
import '../stylesheets/options.less'
import '../stylesheets/font-awesome/font-awesome.less'

document.addEventListener('DOMContentLoaded', init)

function init () {
  console.log('Initializing options...')

  // load all settings, with default settings
  chrome.storage.sync.get(null, (items) => {
    // for each setting name
    for (let name in items) {
      let value = items[name]

      // get the checkbox corresponding to the setting
      let elem = document.getElementById(name)
      if (!elem) {
        console.warn('Setting has no corresponding element: %s', name)
        continue
      }

      // true = checked attribute present
      // false = no attribute
      if (value) {
        elem.setAttribute('checked', '')
      }

      // save changes whenever something changes
      elem.addEventListener('change', (e) => {
        let obj = {}
        obj[name] = e.target.checked
        chrome.storage.sync.set(obj, () => {
          console.log('saved %s -> %s', name, e.target.checked)
        })
      })
    }
  })
}
