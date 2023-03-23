import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRooms } from "../data/actions/roomActions";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

function RoomContainer(props) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    loading: true
  });

  useEffect(() => {
    document.title = "Rice University || EdTech";
    props.getRooms();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setState({
      ...state,
      rooms: props.rooms,
      sortedRooms: props.rooms,
      loading: false
    });
    // eslint-disable-next-line
  }, [props.rooms]);

  const handleChange = ({
    type,
    name,
    system,
    students_per_computer,
    capacity,
    Chalkboard,
    whiteboard,
    minSpc,
    maxSpc,
    minSeats,
    maxSeats
  }) => {
    let sortedRooms = props.rooms;
    if (type) {
      if (type === "all") {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter(room => room.type === type);
      }
    }
    if (system) {
      sortedRooms = sortedRooms.filter(room => room.system === system);
    }
    if (name) {
      if (name === "all") {
        sortedRooms = props.rooms;
      } else {
        console.log(name);
        sortedRooms = sortedRooms.filter(room => room.name === name);
      }
    }
    // if (capacity) {
    //   console.log(capacity);
    //   sortedRooms = sortedRooms.filter(room => room.capacity >= capacity);
    // }
    if (minSpc && maxSpc && students_per_computer) {
      sortedRooms = sortedRooms.filter(
        room => room.students_per_computer === students_per_computer
      );
    }
    if (minSeats && maxSeats) {
      sortedRooms = sortedRooms.filter(
        room => room.capacity >= minSeats && room.capacity <= maxSeats
      );
    }
    if (whiteboard) {
      sortedRooms = sortedRooms.filter(room => room.whiteboard === true);
    }
    if (Chalkboard) {
      sortedRooms = sortedRooms.filter(room => room.Chalkboard === true);
    }
    setState({ ...state, sortedRooms: sortedRooms });
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <RoomFilter rooms={state.rooms} onChange={handleChange} />
      <RoomList rooms={state.sortedRooms} />
    </div>
  );
}
const mapStatesToProps = state => {
  return { rooms: state.rooms };
};
export default connect(
  mapStatesToProps,
  { getRooms }
)(RoomContainer);
