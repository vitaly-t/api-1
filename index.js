const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})
