export const config = {
  title: '10 Minute Mail',
  id: 'tenminutemail',
  example: 'c8494@trbvn.com',
  url: 'http://10minutemail.com/'
}

export const options = [{
  id: 'tenminutemail--auto-renew',
  description: 'Automatically renew email',
  value: true
}, {
  id: 'tenminutemail--auto-renew-period',
  description: 'Minutes to wait between email renewals',
  value: 2
}]

export default {config, options}
