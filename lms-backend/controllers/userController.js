import { getAllUsers, updateUserRole } from "../models/userModel.js";

export async function listUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function changeUserRole(req, res) {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const updatedUser = await updateUserRole(id, role);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
