import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function AdminRoomDelete() {
  const { roomName } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    const { error } = await supabase.from("Rooms").delete().eq("name", roomName.replaceAll("-", " "));
    
    if (!error) {
      history.push("/admin/rooms");
    }
  };

  return (
    <div>
      <h1>Delete Room</h1>
      <p>Are you sure you want to delete <strong>{roomName}</strong>?</p>
      <button onClick={handleDelete} style={{ color: "red" }}>Confirm Delete</button>
      <button onClick={() => history.push(`/admin/rooms/${roomName}`)}>Cancel</button>
    </div>
  );
}

export default AdminRoomDelete;