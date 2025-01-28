import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Admin() {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Admin";

        const fetchRooms = async () => {
            setLoading(true);
            const { data, error } = await supabase.from("Rooms").select("*");
      
            if (error) {
              console.error(error.message);
            } else {
              setRooms(data);
              console.log(data);
            }
      
            setLoading(false);
        };

        fetchRooms();
    }, []);

    return (
        <React.Fragment>
            <div>
                <h1>Admin</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.name}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
            </div>
        </React.Fragment>
    );
}

export default Admin;
