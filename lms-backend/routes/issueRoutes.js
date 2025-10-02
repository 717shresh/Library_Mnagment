import express from "express";
import {
  createIssue,
  approveIssueRequest,
  returnIssuedBook,
  listUserIssues,
} from "../controllers/issueController.js";
import { authenticate, authorizeRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// User requests a book issue
router.post("/", authenticate, createIssue);

// User views their issues
router.get("/my", authenticate, listUserIssues);

// Librarian/Admin approves issue
router.put("/:id/approve", authenticate, authorizeRole("librarian", "admin"), approveIssueRequest);

// User/Librarian marks a book as returned
router.put("/:id/return", authenticate, returnIssuedBook);

export default router;
