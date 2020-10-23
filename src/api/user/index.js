const express = require('express')
const router = express.Router()
const Res = require('../../model/Res')
const moduleUrl = '/user-api'
router.post(moduleUrl + '/getPermission', (req, res) => {
  console.log(req.body)
  res.send(new Res({
    data: [100, 101, 102]
  }))
})
module.exports = router