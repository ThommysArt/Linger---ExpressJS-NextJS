import express from "express";
import LanguageController from "../controllers/languageController";

const router = express.Router();

// Assigning routes to specific controller methods
router.get('/', LanguageController.getLanguage)
router.get('/all', LanguageController.getAllLanguages)
router.post('/', LanguageController.createLanguage)
router.delete('/', LanguageController.deleteLanguage)

export default router