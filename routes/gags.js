const express = require('express')
const router = express.Router()

const db = require('./../db')

const http = require('./../utls/http')(router)

http.get('/', (req) => db.gags.list())
http.get('/:user_id', (req) => db.gags.user(req.params))
http.get('/:id', (req) => db.gags.get(req.params))
http.post('/', (req) => db.gags.post(req.body))

module.exports = router
