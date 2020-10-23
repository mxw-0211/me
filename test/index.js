const fetch = require('node-fetch')
fetch('http://prod.com:8080/user-api/getPermisson', {
  method: 'post'
}).then(res => res.text()).then(text => console.log(text))