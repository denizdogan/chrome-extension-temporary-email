// the input element which the user opens the context menu on
let targetElement = null

// CSS selector for our targets
const SELECTOR = `input[type="email"],
                  input[type="password"],
                  input[type="search"],
                  input[type="text"],
                  input[type="url"],
                  textarea`

// add context menu event listeners to all input elements
Array.from(document.querySelectorAll(SELECTOR), (elem) => {
  elem.addEventListener('contextmenu', () => {
    targetElement = elem
  })
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
