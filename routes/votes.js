const express = require('express')
const router = express.Router()

const db = require('./../db')

const http = require('./../utls/http')(router)

http.post('/', (req) => db.votes.post(req.body))

module.exports = router
