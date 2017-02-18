const sql = require('./../sql').gags

module.exports = (rep, pgp) => ({
  get: (values) => rep.one(sql.get, values),
  list: (values) => rep.any(sql.list, values),
  post: (values) => rep.one(sql.post, values),
  user: (values) => rep.any(sql.user, values),
})
