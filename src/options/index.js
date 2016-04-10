// import styling
import 'bootstrap-loader'
import '../stylesheets/options.scss'

// import provider configs
import tenminutemail from '../js/providers/10minutemail/config.js'

let sections = [{
  title: 'General settings',
  icon: 'cog',
  options: [{
    name: 'open-in-background',
    description: 'Open email tab in background',
    value: true
  }]
}, {
  title: '10 Minute Mail',
  icon: 'bookmark',
  options: [{
    name: '10minutemail--auto-renew',
    description: 'Automatically renew the email address',
    value: false
  }]
}]

// set up the riot template context
let context = {
  sections: sections
}

chrome.storage.sync.get(null, (items) => {
  context.options = items
})

// import riot and tags
import riot from 'riot'
import './app.tag'

// mount the application
riot.mount('*', context)
