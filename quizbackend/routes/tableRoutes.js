const express = require('express')
const { addQuestionToTable , getQuestions} = require('../controllers/questionController')

const router = express.Router()

router.route('/questions').post(addQuestionToTable).get(getQuestions)

module.exports = router