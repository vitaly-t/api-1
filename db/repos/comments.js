const sql = require('./../sql').comments

module.exports = (rep, pgp) => ({
  list: (values) => rep.any(sql.list, values),
  post: (values) => rep.one(sql.post, values),
})
