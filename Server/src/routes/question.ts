import { Router } from 'express';
import QuestionController from '../controllers/questionController';

const router = Router();

router.post('/questions', QuestionController.createQuestion);
router.get('/questions/:id', QuestionController.getQuestion);
router.get('/questions/quiz/:quizId', QuestionController.getQuizQuestions);
router.delete('/questions/:id', QuestionController.deleteQuestion);

export default router
