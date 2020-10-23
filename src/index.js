const express = require('express')
const bodyParser = require('body-parser')
const login = require('./api/login')
const user = require('./api/user')
const app = express()
app.all('*', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, token');
  next();
})
app.use(bodyParser.json())
app.use(login)
app.use(user)
app.listen(8080)