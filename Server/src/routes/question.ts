import { Router } from 'express';
import { createQuestion, getQuestion, getQuizQuestions, deleteQuestion } from '../controllers/questionController'; // Adjust the import path as needed

const router = Router();

router.post('/questions', createQuestion);
router.get('/questions/:id', getQuestion);
router.get('/quizzes/:quizid/questions', getQuizQuestions);
router.delete('/questions/:id', deleteQuestion);

export default router
