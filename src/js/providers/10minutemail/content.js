let element = document.getElementById('addyForm:addressSelect')
if (element) {
  chrome.runtime.sendMessage({
    type: 'found',
    value: element.value
  })
}

chrome.storage.sync.get('10minutemail--auto-renew', (response) => {
  if (response['10minutemail--auto-renew'] === true) {
    console.log('setting timeout')
    setTimeout(() => {
      let resetElem = document.querySelector('a[href$="resetSessionLife"]')
      if (!resetElem) {
        return
      }
      resetElem.click()
    }, 120 * 1000)
  }
})
