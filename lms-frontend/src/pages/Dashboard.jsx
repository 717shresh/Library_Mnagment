import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.book_id} className="border p-3 rounded shadow">
            <h2 className="font-semibold">{book.name}</h2>
            <p className="text-sm text-gray-600">Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
