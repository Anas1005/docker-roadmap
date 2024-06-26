

const express = require('express')
const app = express()
const dbConnect = require('./config/database')

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


dbConnect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
