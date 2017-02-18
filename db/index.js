const config = require('./config')
const repos = require('./repos')

const pgp = require('pg-promise')({
  extend: (obj) => 
    Object.keys(repos).forEach((key) => obj[key] = repos[key](obj, pgp))
})

const db = pgp(config)

module.exports = db
