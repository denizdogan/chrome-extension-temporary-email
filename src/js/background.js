import providers from './providers'
console.log(providers)

// map sender tab IDs to receiver tab IDs
const WAITING = {}

// add a context menu item for every provider
providers.forEach((p) => {
  chrome.contextMenus.create({
    title: `${p.config.title} (${p.config.example})`,
    contexts: ['editable'],
    onclick: (info, tab) => {
      chrome.tabs.create({
        url: p.url,
        index: tab.index + 1,
        openerTabId: tab.id,
        active: false
      }, (createdTab) => {
        WAITING[createdTab.id] = tab.id
      })
    }
  })
})

// routing between content scripts and context menu items
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // check who the request is for
  let receiverId = WAITING[sender.tab.id]
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
    delete WAITING[sender.tab.id]
  } else {
    console.warn('Unknown request: %O from %O', request, sender)
  }
})
