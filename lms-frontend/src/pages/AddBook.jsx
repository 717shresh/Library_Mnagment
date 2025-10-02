import { useState, useEffect } from "react";
import API from "../services/api";

export default function AddBook() {
  const [sections, setSections] = useState([]);
  const [form, setForm] = useState({
    name: "",
    author: "",
    content: "",
    section_id: ""
  });

  useEffect(() => {
    API.get("/sections").then((res) => setSections(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/books", form);
      alert("Book added!");
    } catch (err) {
      alert(err.response?.data?.error || "Error adding book");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Book</h2>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input type="text" placeholder="Book Name" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Author" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, author: e.target.value })} />
        <textarea placeholder="Content" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
        <select className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, section_id: e.target.value })}>
          <option>Select Section</option>
          {sections.map((s) => (
            <option key={s.section_id} value={s.section_id}>{s.name}</option>
          ))}
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
}
