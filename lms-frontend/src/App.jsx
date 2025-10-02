import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddSection from "./pages/AddSection";
import AddBook from "./pages/AddBook";
import MyBooks from "./pages/MyBooks";
import ManageUsers from "./pages/ManageUsers";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-section" element={<AddSection />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/manage-users" element={<ManageUsers />} />
      </Routes>
    </BrowserRouter>
  );
}
