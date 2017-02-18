const { QueryFile } = require('pg-promise')
const path = require('path')

const sql = (file) => {
  const fullPath = path.join('./db/sql', file)
  const options = { minify: true }

  return new QueryFile(fullPath, options)
}

module.exports = {
  comments: {
    list: sql('comments/list'),
    post: sql('comments/post'),
  },
  gags: {
    get: sql('gags/get'),
    list: sql('gags/list'),
    post: sql('gags/post'),
  },
  users: {
    get: sql('users/get'),
    post: sql('users/post'),
  },
  votes: {
    post: sql('votes/post'),
  }
}
