import riot from 'riot'
import './options.tag'

let foobar = {
  providers: [
    { name: '10 Minute Mail',
      options: {
        id: '10minutemail--auto-renew',
        description: 'Automatically renew mail',
        type: 'boolean'
      }
    }
  ]
}

riot.mount('options', foobar)

// console.log('options.js')

// import '../stylesheets/normalize.css'
// import '../stylesheets/options.less'
// import '../stylesheets/font-awesome/font-awesome.less'

// import riot from 'riot'

// import './setting.tag'
// import './options.tag'

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('Loading options')

//   // load everything in storage
//   chrome.storage.sync.get(null, (items) => {
//     console.log('Loaded storage: %O', items)

//     // for each storage key
//     for (let key in items) {
//       let value = items[key]

//       // get the input element corresponding to the setting
//       let elem = document.getElementById(key)
//       if (!elem) {
//         console.warn('Setting has no corresponding element: %s', key)
//         continue
//       }

//       // true = checked attribute present
//       // false = no attribute
//       if (value) {
//         elem.setAttribute('checked', '')
//       }

//       // save changes whenever something changes
//       elem.addEventListener('change', (e) => {
//         let obj = {}
//         obj[key] = e.target.checked
//         chrome.storage.sync.set(obj, () => {
//           console.log('saved %s -> %s', key, e.target.checked)
//         })
//       })
//     }
//   })
// })

// riot.mount('*')
