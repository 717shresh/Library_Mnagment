import {
  requestIssue,
  approveIssue,
  returnBook,
  getUserIssues,
} from "../models/issueModel.js";

export async function createIssue(req, res) {
  try {
    const { bookId, returnDate } = req.body;
    const userId = req.user.id; // from JWT
    const issue = await requestIssue(bookId, userId, returnDate);
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function approveIssueRequest(req, res) {
  try {
    const { id } = req.params;
    const issue = await approveIssue(id);
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function returnIssuedBook(req, res) {
  try {
    const { id } = req.params;
    const issue = await returnBook(id);
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listUserIssues(req, res) {
  try {
    const userId = req.user.id; // from JWT
    const issues = await getUserIssues(userId);
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
