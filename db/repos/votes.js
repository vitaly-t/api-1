const sql = require('./../sql').votes

module.exports = (rep, pgp) => ({
  post: (values) => rep.one(sql.post, values),
})
