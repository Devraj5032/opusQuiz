const express = require('express')
const { getDataFromProfile } = require('../controllers/questionController')

const router = express.Router()

router.get('/' , getDataFromProfile)

module.exports = router