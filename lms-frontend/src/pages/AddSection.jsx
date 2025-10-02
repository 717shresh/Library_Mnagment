import { useState } from "react";
import API from "../services/api";

export default function AddSection() {
  const [form, setForm] = useState({ name: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/sections", form);
      alert("Section added!");
    } catch (err) {
      alert(err.response?.data?.error || "Error adding section");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Section</h2>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input type="text" placeholder="Section Name" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <textarea placeholder="Description" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Section</button>
      </form>
    </div>
  );
}
