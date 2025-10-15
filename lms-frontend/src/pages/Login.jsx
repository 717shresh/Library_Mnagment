import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Error logging in");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md space-y-4 w-96">
        <h2 className="text-xl font-bold">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
