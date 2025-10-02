import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    const newUser = await createUser(name, email, password, "user");
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) return res.status(400).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: { id: user.user_id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
