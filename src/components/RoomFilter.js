import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "./Title";

// Styled Components
const FilterContainer = styled.section`
  padding: 5rem 0;
  background: var(--mainWhite);
`;

const Form = styled.form`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;

  @media screen and (min-width: 776px) {
    width: 70vw;
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const FormGroup = styled.div`
  text-transform: capitalize;

  label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    background: transparent;
    font-size: 1rem;
    border: 1px solid var(--mainBlack);
    border-radius: 0.3rem;
    padding: 0.4rem;
  }

  .size-inputs {
    display: flex;
    gap: 0.5rem;

    input {
      width: 40%;
    }
  }

  .single-extra {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      font-size: 0.8rem;
    }
  }
`;

function RoomFilter(props) {
  const [state, setState] = useState({
    types: [],
    windows: [],
    extras: [],
    capacity: [],
    sizes: [],
    type: "all",
    system: "all",
    name: "all",
    window: "all",
    students_per_computer: [],
    selected_students_per_computer: 0,
    capacity: 1,
    systems: [],
    Chalkboard: false,
    whiteboard: false,
    minSpc: 0,
    maxSpc: 0,
    minSeats: 0,
    maxSeats: 0,
    minSize: 0,
    maxSize: 0,
  });

  useEffect(() => {
    const getRoomData = (rooms, d_type) => {
      const data = rooms.map((item) => item[d_type]);
      return [...new Set(data)];
    };

    const types = getRoomData(props.rooms, "type");
    const systems = getRoomData(props.rooms, "system");
    const name = getRoomData(props.rooms, "name");
    const windows = getRoomData(props.rooms, "windows");
    const capacity = getRoomData(props.rooms, "capacity");
    const sizes = getRoomData(props.rooms, "size");
    const students_per_computer = getRoomData(
      props.rooms,
      "students_per_computer"
    );
    const minSpc =
      students_per_computer.length > 0 ? Math.min(...students_per_computer) : 0;
    const maxSpc =
      students_per_computer.length > 0 ? Math.max(...students_per_computer) : 0;
    const minSeats = capacity.length > 0 ? Math.min(...capacity) : 0;
    const maxSeats = capacity.length > 0 ? Math.max(...capacity) : 0;
    const minSize = sizes.length > 0 ? Math.min(...sizes) : 0;
    const maxSize = sizes.length > 0 ? Math.max(...sizes) : 0;

    setState({
      ...state,
      types: types,
      systems: systems,
      windows: windows,
      minSpc: minSpc,
      maxSpc: maxSpc,
      minSeats: minSeats,
      maxSeats: maxSeats,
      minSize: minSize,
      maxSize: maxSize,
    });
    //eslint-disable-next-line
  }, [props.rooms]);

  useEffect(() => {
    props.onChange(state);
    //eslint-disable-next-line
  }, [state]);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <FilterContainer>
      <Title title="search rooms" />
      <Form>
        {/* Room Name */}
        <FormGroup>
          <label htmlFor="name">Search:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </FormGroup>

        {/* System Type */}
        <FormGroup>
          <label htmlFor="system_type">System Type</label>
          <select name="system" id="system_type" onChange={handleChange}>
            <option value="all">All System Types</option>
            {state.systems.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormGroup>

        {/* Room Type */}
        <FormGroup>
          <label htmlFor="type">Room Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="all">All Types</option>
            {state.types.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormGroup>

        {/* Window Type */}
        <FormGroup>
          <label htmlFor="window">Window Type</label>
          <select name="window" id="window" onChange={handleChange}>
            <option value="all">All Types</option>
            {state.windows.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormGroup>

        {/* Students per Computer */}
        <FormGroup>
          <label htmlFor="selected_students_per_computer">
            Students per Computer: {state.selected_students_per_computer}
          </label>
          <input
            type="number"
            name="selected_students_per_computer"
            id="selected_students_per_computer"
            value={state.selected_students_per_computer}
            onChange={handleChange}
          />
        </FormGroup>

        {/* Room Capacity */}
        <FormGroup>
          <label htmlFor="size">Capacity</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSeats"
              id="size"
              value={state.minSeats}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSeats"
              id="size"
              value={state.maxSeats}
              onChange={handleChange}
            />
          </div>
        </FormGroup>

        {/* Extras */}
        <FormGroup>
          <div className="single-extra">
            <input
              type="checkbox"
              name="Chalkboard"
              id="Chalkboard"
              checked={state.Chalkboard}
              onChange={handleChange}
            />
            <label htmlFor="Chalkboard">Chalkboard</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="whiteboard"
              id="whiteboard"
              checked={state.whiteboard}
              onChange={handleChange}
            />
            <label htmlFor="whiteboard">Whiteboard</label>
          </div>
        </FormGroup>
      </Form>
    </FilterContainer>
  );
}

export default RoomFilter;
