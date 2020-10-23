const express = require('express')
const router = express.Router()
const Res = require('../../model/Res')
const moduleUrl = '/login-api'
const user = {
  username: '123456',
  password: '123456'
}
router.post(moduleUrl + '/login', (req, res) => {
  const { body: { data } } = req
  console.log(data, user)
  if (data.username === user.username && data.password === user.password) {
    res.send(new Res({
      data: 'token123456'
    })).end()
  } else {
    res.send(new Res({
      code: -1,
      message: 'login fail'
    })).end()
  }
})
module.exports = router