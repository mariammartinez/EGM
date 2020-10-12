const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz')


router.post('/', quizCtrl.createQuiz);



module.exports = router;