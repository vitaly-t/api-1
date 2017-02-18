const config = process.env.DB_CONFIG || {
  host: 'localhost',
  port: 5432,
  database: '9gagify_dev',
  user: '9gagify',
}

module.exports = config
