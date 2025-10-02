import express from "express";
import { addSection, listSections } from "../controllers/sectionController.js";
import { authenticate, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// Librarian/Admin can add sections
router.post("/", authenticate, authorizeRole("librarian", "admin"), addSection);

// Anyone can view sections
router.get("/", listSections);

export default router;
