// src/components/BookCard.jsx
const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800">{book.name}</h3>
      <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
      <p className="text-gray-600 text-sm">{book.description || "No description available."}</p>
    </div>
  );
};

export default BookCard;
