let element = document.getElementById('inbox')

if (element) {
  // the initial value is NOT the real email address!
  // check the element value until it's been changed
  const initialValue = element.value
  const timer = setInterval(() => {
    if (element.value !== initialValue) {
      clearInterval(timer)
      chrome.runtime.sendMessage({
        type: 'found',
        value: element.value
      })
    }
  }, 100);
}
