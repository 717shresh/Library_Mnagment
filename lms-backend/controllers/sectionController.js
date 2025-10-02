import { createSection, getAllSections } from "../models/sectionModel.js";

export async function addSection(req, res) {
  try {
    const { name, description } = req.body;
    const section = await createSection(name, description);
    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listSections(req, res) {
  try {
    const sections = await getAllSections();
    res.json(sections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
