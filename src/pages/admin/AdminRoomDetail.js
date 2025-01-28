import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function AdminRoomDetail() {
  const { roomName } = useParams();
  const [room, setRoom] = useState(null);
  const [building, setBuilding] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {

      const cleanName = roomName.replaceAll("-", " ");

      const { data: roomData, error: roomError } = await supabase
        .from("Rooms")
        .select("id, name, building_id")
        .eq("name", cleanName)
        .single();

      if (roomError || !roomData) {
        console.error("Error fetching room:", roomError);
        return;
      }

      setRoom(roomData);

      const { data: buildingData, error: buildingError } = await supabase
        .from("Buildings")
        .select("id, name")
        .eq("id", roomData.building_id)
        .single();

      if (buildingError) {
        console.error("Error fetching building:", buildingError);
      } else {
        setBuilding(buildingData);
      }
    };

    fetchRoomDetails();
  }, [roomName]);

  if (!room) return <p>Loading room details...</p>;

  return (
    <div>
      <br></br>
      <Link to="/admin/rooms">Back to rooms</Link>
      <h1>{room.name}</h1>
      <p><strong>Room ID:</strong> {room.id}</p>
      <p><strong>Building ID:</strong> {room.building_id}</p>
      {building && <p><strong>Building Name:</strong> {building.name}</p>}

      <Link to={`/admin/rooms/${roomName}/edit`}>
        <button>Edit</button>
      </Link>

      <Link to={`/admin/rooms/${roomName}/delete`}>
        <button style={{ color: "red" }}>Delete</button>
      </Link>
    </div>
  );
}

export default AdminRoomDetail;