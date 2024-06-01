import { Router } from 'express';
import QuizController from './quizController';

const router = Router();

// Define routes and associate them with controller methods
router.post('/quiz', QuizController.createQuiz);
router.put('/quiz/:id', QuizController.updateQuiz);
router.get('/quiz/:id', QuizController.getQuiz);
router.get('/quiz/:id/level', QuizController.getLevelQuiz);
router.get('/quiz/:id/language', QuizController.getLanguageQuiz);
router.delete('/quiz/:id', QuizController.deleteQuiz);

export default router;
