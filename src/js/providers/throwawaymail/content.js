let element = document.getElementById('email')

if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.innerHTML
  })
}
