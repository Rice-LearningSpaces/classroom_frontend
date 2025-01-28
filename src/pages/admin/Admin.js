import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Admin() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/rooms">Manage Rooms</Link>
    </div>
  );
}

export default Admin;