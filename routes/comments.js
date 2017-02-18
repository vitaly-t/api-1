const express = require('express')
const router = express.Router()

const db = require('./../db')

const http = require('./../utls/http')(router)

http.get('/:gag_id', (req) => db.comments.list(req.params))
http.post('/', (req) => db.comments.post(req.body))

module.exports = router
