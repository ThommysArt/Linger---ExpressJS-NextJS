import { Router } from 'express';
import FinishedQuizController from '../controllers/finishedQuizController';

const router = Router();

// Define routes and associate them with controller methods
router.post('/finishedQuiz', FinishedQuizController.addFinishedQuiz);
router.get('/finishedQuiz/:userId', FinishedQuizController.getFinishedQuizzes);
router.delete('/finishedQuiz/:id', FinishedQuizController.deleteFinishedQuiz);
router.put('/finishedQuiz/:id/score', FinishedQuizController.updateScore);

export default router;
