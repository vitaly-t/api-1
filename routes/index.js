const express = require('express')
const router = express.Router()

const comments = require('./comments')
const gags = require('./gags')
const users = require('./users')
const votes = require('./votes')

router.use('/comment', comments)
router.use('/comments', comments)

router.use('/gag', gags)
router.use('/gags', gags)

router.use('/user', users)
router.use('/users', users)

router.use('/vote', votes)
router.use('/votes', votes)

module.exports = router
