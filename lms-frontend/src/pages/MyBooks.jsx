import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyBooks() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    API.get("/issues/my").then((res) => setIssues(res.data));
  }, []);

  const returnBook = async (id) => {
    try {
      await API.put(`/issues/${id}/return`);
      alert("Book returned!");
      setIssues(issues.filter(i => i.issue_id !== id));
    } catch (err) {
      alert("Error returning book");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Books</h2>
      {issues.map((i) => (
        <div key={i.issue_id} className="border p-3 mb-2 rounded">
          <h3 className="font-semibold">{i.book_name}</h3>
          <p>Issued on: {i.date_issued}</p>
          <button onClick={() => returnBook(i.issue_id)} className="bg-red-500 text-white px-3 py-1 mt-2 rounded">
            Return Book
          </button>
        </div>
      ))}
    </div>
  );
}
