let element = document.getElementById('tempemail')
if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}
