import { Router } from 'express';
import OptionController from '../controllers/optionController';

const router = Router()

router.post('/options', OptionController.createOption);
router.put('/options/:id', OptionController.updateOption);
router.get('/options/:id', OptionController.getOption);
router.get('/questions/:questionId/options', OptionController.getQuestionOptions);
router.delete('/options/:id', OptionController.deleteOption);

export default router;
