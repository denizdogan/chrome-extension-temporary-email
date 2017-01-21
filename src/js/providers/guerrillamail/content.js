let element = document.getElementById('email-widget')

if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.innerHTML
  })
}
