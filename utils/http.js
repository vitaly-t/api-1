const get = (app) => (url, handler) => {
  app.get(url, (req, res) =>
    handler(req)
      .then((data) => res.json({ success: true, data }))
      .catch((error) => res.json({ success: false, error })) 
  )
}

const post = (app) => (url, handler) => {
  app.post(url, (req, res) =>
    handler(req)
      .then((data) => res.json({ success: true, data }))
      .catch((error) => res.json({ success: false, error })) 
  )
}

module.exports = (app) => ({
  get: get(app),
  post: post(app),
})
