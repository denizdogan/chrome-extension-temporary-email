const timer = setInterval(() => {
  const element = document.getElementsByClassName('what_to_copy')
  if (!element.length) {
    return
  }
  clearInterval(timer)
  chrome.runtime.sendMessage({
    type: 'found',
    value: element[0].innerHTML
  })
}, 100)
