import airmail from './providers/airmail/config'
import guerrillamail from './providers/guerrillamail/config'
import tempmail from './providers/tempmail/config'
import tenminutemail from './providers/tenminutemail/config'
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

  // mapping request types to its handler
  const HANDLERS = {
    // an email address was found by a provider
    'found': () => {
      // tell the receiver to deal with the email address
      chrome.tabs.sendMessage(receiverId, {
        type: 'insert',
        value: request.value
      })
    }
  }

  // get the handler for the given request type
  let handler = HANDLERS[request.type]
  if (handler) {
    handler()

    // we are no longer waiting for anything from that tab
    delete TABS[sender.tab.id]
  } else {
    console.warn('Unknown request: %O from %O', request, sender)
  }
})
