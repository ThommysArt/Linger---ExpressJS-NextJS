import { Router } from 'express';
import LessonController from '../controllers/lessonController';

const router = Router();

// Route for creating a new lesson
router.post('/lessons', LessonController.createLesson);

// Route for updating an existing lesson
router.put('/lessons/:id', LessonController.updateLesson);

// Route for deleting a lesson
router.delete('/lessons/:id', LessonController.deleteLesson);

// Route for retrieving a specific lesson
router.get('/lessons/:id', LessonController.getLesson);

// Route for retrieving all lessons for a specific level
router.get('/levels/:levelId/lessons', LessonController.getLevelLessons);

export default router;