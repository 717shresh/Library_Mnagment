import express from "express";
import { listUsers, changeUserRole } from "../controllers/userController.js";
import { authenticate, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, authorizeRole("admin"), listUsers);
router.put("/:id/role", authenticate, authorizeRole("admin"), changeUserRole);

export default router;
