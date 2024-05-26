import express from "express";
import LanguageController from "../controllers/languageController";

const router = express.Router();

router.get('/', LanguageController.getLanguage)
router.post('/', LanguageController.createLanguage)
router.delete('/', LanguageController.deleteLanguage)

export default router