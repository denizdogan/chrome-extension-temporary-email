// the input element which the user opens the context menu on
let targetElement = null

document.addEventListener('contextmenu', (ev) => {
  const nodeName = ev.target.nodeName

  // only act on <input> and <textarea> elements
  if (!['INPUT', 'TEXTAREA'].includes(nodeName)) {
    return
  }

  // if it's an <input> element, filter based on its type
  if (nodeName === 'INPUT') {
    const type = ev.target.type
    if (!['email', 'password', 'search', 'text', 'url'].includes(type)) {
      return
    }
  }

  targetElement = ev.target
})

// listen for the "insert" request from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // ignore anything unless we have a target element
  if (!targetElement) {
    return
  }

  // if it's an insert request, set the target element value
  if (request.type === 'insert') {
    targetElement.value = request.value
  }
})
