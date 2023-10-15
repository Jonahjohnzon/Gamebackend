const app = require('express')()
const routers = require('./Routes/router')
const cors = require('cors')
const mongoose = require('./mongo')
require('dotenv').config()
mongoose()
const port = process.env.PORT || 5000
app.use(cors())
app.use(require('express').json())
app.use('/',routers)

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})