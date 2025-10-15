// src/pages/Home.jsx
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/books") // 👈 your backend endpoint
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error("Error fetching books:", err));
//   }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Library 📖</h1>
        <p className="text-lg">Explore, borrow, and enjoy thousands of e-books</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Recently Added Books</h2>
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No books available yet.</p>
        )}
      </main>
    </div>
  );
};

export default Home;
