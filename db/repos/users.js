const sql = require('./../sql').users

module.exports = (rep, pgp) => ({
  get: (values) => rep.one(sql.get, values),
  post: (values) => rep.one(sql.post, values),
})
