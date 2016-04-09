let element = document.getElementById('addyForm:addressSelect')
if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}
