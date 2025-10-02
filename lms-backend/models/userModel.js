import pool from "../db.js";
import bcrypt from "bcrypt";

export async function createUser(name, email, password, role = "user") {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = `
    INSERT INTO users (name, email, password_hash, role)
    VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role;
  `;
  const values = [name, email, hashedPassword, role];
  const result = await pool.query(query, values);
  return result.rows[0];
}

export async function findUserByEmail(email) {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
}

export async function getAllUsers() {
  const result = await pool.query(
    "SELECT user_id, name, email, role, date_created FROM users"
  );
  return result.rows;
}

export async function updateUserRole(userId, role) {
  const result = await pool.query(
    "UPDATE users SET role = $1 WHERE user_id = $2 RETURNING user_id, name, email, role",
    [role, userId]
  );
  return result.rows[0];
}
