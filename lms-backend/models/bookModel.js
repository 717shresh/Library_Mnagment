import pool from "../db.js";

export async function createBook(sectionId, name, author, content) {
  const query = `
    INSERT INTO books (section_id, name, author, content)
    VALUES ($1, $2, $3, $4) RETURNING book_id, section_id, name, author, date_added;
  `;
  const values = [sectionId, name, author, content];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAllBooks() {
  const result = await pool.query("SELECT * FROM books ORDER BY date_added DESC");
  return result.rows;
}

export async function getBookById(bookId) {
  const result = await pool.query("SELECT * FROM books WHERE book_id = $1", [bookId]);
  return result.rows[0];
}
