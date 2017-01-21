let element = document.getElementById('mailAddress')

if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}
