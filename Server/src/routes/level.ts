import { Router } from 'express';
import LevelController from '../controllers/levelController';

const router = Router();

// Route for creating a new level
router.post('/levels', LevelController.createLevel);

// Route for retrieving a specific level
router.get('/levels/:id', LevelController.getLevel);

// Route for retrieving all language levels
router.get('/levels/language/:languageId', LevelController.getLanguageLevels);

// Route for deleting a level
router.delete('/levels/:id', LevelController.deleteLevel);

export default router;