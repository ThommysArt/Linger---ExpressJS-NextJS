import express from "express";
import UserLanguageController from "../controllers/userLanguageController";

const router = express.Router();

// Assigning routes to specific controller methods
router.post('/', UserLanguageController.addUserLanguage); // Route to add a UserLanguage
router.put('/level', UserLanguageController.updateLevel); // Route to update level of a UserLanguage
router.delete('/', UserLanguageController.deleteUserLanguage); // Route to delete a UserLanguage
router.get('/:userId', UserLanguageController.getUserLanguages); // Route to get UserLanguages for a specific user

export default router;
