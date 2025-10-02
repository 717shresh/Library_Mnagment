import { createBook, getAllBooks, getBookById } from "../models/bookModel.js";

export async function addBook(req, res) {
  try {
    const { sectionId, name, author, content } = req.body;
    const book = await createBook(sectionId, name, author, content);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function listBooks(req, res) {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getBook(req, res) {
  try {
    const { id } = req.params;
    const book = await getBookById(id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
