import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Admin - Rooms";

    const fetchRooms = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("Rooms").select("id, name");

      if (error) {
        console.error("Error fetching rooms:", error.message);
      } else {
        setRooms(data);
      }
      setLoading(false);
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <br></br>
      <Link to="/admin">Back to admin</Link>
      <h1>Manage Rooms</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li key={"create"}>
            <Link to="/admin/rooms/create">Create New Room</Link>
          </li>
          {rooms.map((room) => (
            
            <li key={room.id}>
              <Link to={`/admin/rooms/${encodeURIComponent(room.name.replaceAll(" ", "-"))}`}>
                {room.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminRooms;