const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.send('../../public/bundle.js')
    } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
