import airmail from './providers/airmail/config'
import guerrillamail from './providers/guerrillamail/config'
import tempmail from './providers/tempmail/config'
import tenminutemail from './providers/10minutemail/config'
import throwawaymail from './providers/throwawaymail/config'

// array of provider configurations
const PROVIDERS = [
  tenminutemail,
  airmail,
  guerrillamail,
  tempmail,
  throwawaymail
]

// map sender tab IDs to receiver tab IDs
const TABS = {}

// add a context menu item for each provider
PROVIDERS.forEach((p) => {
  chrome.contextMenus.create({
    title: `${p.title} (${p.example})`,
    contexts: ['editable'],
    onclick: (info, tab) => {
      chrome.tabs.create({
        url: p.url,
        index: tab.index + 1,
        openerTabId: tab.id,
        active: false
      }, (createdTab) => {
        TABS[createdTab.id] = tab.id
      })
    }
  })
})

// listen for content script messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // check who the message is for
  let receiverId = TABS[sender.tab.id]
  if (receiverId === undefined) {
    // this can happen e.g. if the user F5's the provider tab
    return
  }

  const HANDLERS = {
    'found': () => {
      // tell the receiver to insert the email
      chrome.tabs.sendMessage(receiverId, {
        type: 'insert',
        value: request.value
      })

      // we are no longer waiting for anything from that tab
      delete TABS[sender.tab.id]
    }
  }

  let handler = HANDLERS[request.type]
  if (handler) {
    handler()
  } else {
    console.warn('Unknown request: %O from %O', request, sender)
  }
})

// the general extension settings
const DEFAULTS = {
  'provider-in-bg': true
}

// initialize settings
chrome.storage.sync.get(null, (items) => {
  // add each provider's default options to DEFAULTS
  PROVIDERS.forEach((p) => {
    for (let key in p.options) {
      let val = p.options
      if (!items.hasOwnProperty(key)) {
        toUpdate[key] = val
      }
    }
  })

  // map of settings that don't exist in storage to their default values
  let toUpdate = {}
  for (let key in DEFAULTS) {
    if (!items.hasOwnProperty(key)) {
      toUpdate[key] = DEFAULTS[key]
    }
  }

  // update storage with any missing settings
  chrome.storage.sync.set(toUpdate)
})
