import pool from "../db.js";

export async function createSection(name, description) {
  const query = `
    INSERT INTO sections (name, description)
    VALUES ($1, $2) RETURNING section_id, name, description, date_created;
  `;
  const values = [name, description];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function getAllSections() {
  const result = await pool.query("SELECT * FROM sections ORDER BY date_created DESC");
  return result.rows;
}
