import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="flex justify-between bg-gray-900 text-white px-6 py-3">
      <h1 className="font-bold text-lg">📚 Library</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mybooks">My Books</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/add-section">Add Section</Link>
        <Link to="/manage-users">Manage Users</Link>
        <button onClick={logout} className="bg-red-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
