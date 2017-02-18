const express = require('express')
const router = express.Router()

const db = require('./../db')

const http = require('./../utls/http')(router)

http.get('/:id', (req) => db.users.get(req.params))
http.post('/', (req) => db.users.post(req.body))

module.exports = router
