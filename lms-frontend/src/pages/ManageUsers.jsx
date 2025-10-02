import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u.user_id} className="border p-3 rounded">
            {u.name} - {u.email} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}
