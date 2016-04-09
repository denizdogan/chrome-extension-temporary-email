let element = document.getElementById('temp_email')
if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}
