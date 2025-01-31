import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getRooms } from "../data/actions/roomActions";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

// Styled Components
const Container = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: var(--primaryColor);
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

function RoomContainer(props) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    loading: true,
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
      loading: false,
    });
    // eslint-disable-next-line
  }, [props.rooms]);

  const handleChange = ({
    type,
    name,
    system,
    selected_students_per_computer,
    window,
    capacity,
    Chalkboard,
    whiteboard,
    minSpc,
    maxSpc,
    minSeats,
    maxSeats,
  }) => {
    let sortedRooms = props.rooms;
    if (type) {
      if (type === "all") {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter((room) => room.type === type);
      }
    }
    if (system) {
      sortedRooms = sortedRooms.filter((room) => room.system === system);
    }
    if (name) {
      if (name === "all") {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter((room) => room.name === name);
      }
    }
    if (window) {
      if (window === "all") {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter((room) => room.windows === window);
      }
    }
    if (selected_students_per_computer) {
      if (selected_students_per_computer === 0) {
        sortedRooms = props.rooms;
      } else {
        sortedRooms = sortedRooms.filter(
          (room) => room.students_per_computer === selected_students_per_computer
        );
      }
    }
    if (minSeats && maxSeats) {
      sortedRooms = sortedRooms.filter(
        (room) => room.capacity >= minSeats && room.capacity <= maxSeats
      );
    }
    if (whiteboard) {
      sortedRooms = sortedRooms.filter((room) => room.whiteboard === true);
    }
    if (Chalkboard) {
      sortedRooms = sortedRooms.filter((room) => room.Chalkboard === true);
    }
    setState({ ...state, sortedRooms: sortedRooms });
  };

  return (
    <Container>
      <Title>Available Rooms</Title>
      <RoomFilter rooms={state.rooms} onChange={handleChange} />
      <RoomList rooms={state.sortedRooms} />
    </Container>
  );
}

const mapStatesToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStatesToProps, { getRooms })(RoomContainer);
