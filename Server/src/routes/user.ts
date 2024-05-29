import express from "express"
import UserController from "../controllers/userController"

const router = express.Router()

// Assigning routes to specific controller methods
router.get('/', UserController.getUser)
router.get("/all", UserController.getAllUsers)
router.post("/", UserController.createUser)
router.delete("/", UserController.deleteUser)
router.put("/", UserController.updateUsername)

export default router;