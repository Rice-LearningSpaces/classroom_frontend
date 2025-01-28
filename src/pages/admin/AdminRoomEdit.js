import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function AdminRoomEdit() {
  const { roomName } = useParams();
  const [room, setRoom] = useState(null);
  const [buildings, setBuildings] = useState([]);
  const [updatedName, setUpdatedName] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {

      const cleanName = roomName.replaceAll("-", " ");

      const { data: roomData } = await supabase
        .from("Rooms")
        .select("id, name, building_id")
        .eq("name", cleanName)
        .single();

      if (roomData) {
        setRoom(roomData);
        setUpdatedName(roomData.name);
        setSelectedBuilding(roomData.building_id);
      }

      const { data: buildingsData } = await supabase.from("Buildings").select("id, name");
      if (buildingsData) setBuildings(buildingsData);
    };

    fetchData();
  }, [roomName]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("Rooms")
      .update({ name: updatedName, building_id: selectedBuilding })
      .eq("id", room.id);

    if (!error) {
      history.push(`/admin/rooms/${updatedName.replaceAll(" ", "-")}`);
    }
  };

  if (!room) return <p>Loading room data...</p>;

  return (
    <div>
      <h1>Edit Room</h1>
      <form onSubmit={handleUpdate}>
        <label>Room Name:
          <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
        </label>
        <br />
        <label>Building:
          <select value={selectedBuilding} onChange={(e) => setSelectedBuilding(e.target.value)}>
            {buildings.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default AdminRoomEdit;
