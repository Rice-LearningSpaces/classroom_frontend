import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

function AdminRoomCreate() {
  const [roomName, setRoomName] = useState("");
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    document.title = "Create Room";

    const fetchBuildings = async () => {
      const { data, error } = await supabase.from("Buildings").select("id, name");

      if (error) {
        console.error("Error fetching buildings:", error.message);
      } else {
        setBuildings(data);
      }
    };

    fetchBuildings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!roomName.trim() || !selectedBuilding) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    if(roomName.trim().toLowerCase() == "create") {
      setError("You cannot name your room that.");
      setLoading(false);
      return;
    }

    if(roomName.trim().toLowerCase().includes("-")) {
      setError("The '-' character is not allowed in room names.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("Rooms").insert([
      { name: roomName, building_id: selectedBuilding }
    ]);

    if (error) {
      setError(error.message);
    } else {
      history.push("/admin/rooms");
    }

    setLoading(false);
  };

  return (
    <div>
      <br></br>
      <Link to="/admin/rooms">Back to rooms</Link>
      <h1>Create New Room</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Room Name:
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Building:
          <select value={selectedBuilding} onChange={(e) => setSelectedBuilding(e.target.value)}>
            <option value="">Select a Building</option>
            {buildings.map((building) => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Room"}
        </button>
      </form>
    </div>
  );
}

export default AdminRoomCreate;
