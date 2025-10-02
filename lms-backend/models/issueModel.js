import pool from "../db.js";

export async function requestIssue(bookId, userId, returnDate) {
  const query = `
    INSERT INTO book_issues (book_id, user_id, return_date, status)
    VALUES ($1, $2, $3, 'pending') RETURNING issue_id, book_id, user_id, status, issued_date, return_date;
  `;
  const values = [bookId, userId, returnDate];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function approveIssue(issueId) {
  const result = await pool.query(
    "UPDATE book_issues SET status = 'issued' WHERE issue_id = $1 RETURNING *",
    [issueId]
  );
  return result.rows[0];
}

export async function returnBook(issueId) {
  const result = await pool.query(
    "UPDATE book_issues SET status = 'returned' WHERE issue_id = $1 RETURNING *",
    [issueId]
  );
  return result.rows[0];
}

export async function getUserIssues(userId) {
  const result = await pool.query(
    "SELECT * FROM book_issues WHERE user_id = $1 ORDER BY issued_date DESC",
    [userId]
  );
  return result.rows;
}
