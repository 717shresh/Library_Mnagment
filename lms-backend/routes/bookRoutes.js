import express from "express";
import { addBook, listBooks, getBook } from "../controllers/bookController.js";
import { authenticate, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add book (Librarian/Admin only)
router.post("/", authenticate, authorizeRole("librarian", "admin"), addBook);

// View all books
router.get("/", listBooks);

// Get book by ID
router.get("/:id", getBook);

export default router;
