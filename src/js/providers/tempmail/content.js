let element = document.getElementById('mail')

if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}
