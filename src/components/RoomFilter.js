import React, { useState, useEffect } from "react";
import Title from "./Title";

function RoomFilter(props) {
  const [state, setState] = useState({
    types: [],
    windows: [],
    extras: [],
    capacity: [],
    sizes: [],
    type: "all",
    system: "all",
    name:"all",
    window:"all",
    students_per_computer: [],
    selected_students_per_computer:0,
    capacity: 1,
    systems: [],
    Chalkboard: false,
    whiteboard: false,
    minSpc: 0,
    maxSpc: 0,
    minSeats: 0,
    maxSeats: 0,
    minSize: 0,
    maxSize: 0
  });

  useEffect(() => {
    const getRoomData = (rooms, d_type) => {
      const data = rooms.map(item => {
          return item[d_type];
       
      });
      const uinque_data = [...new Set(data)];
      return uinque_data;
    };
    const types = getRoomData(props.rooms, "type");
    
    const systems = getRoomData(props.rooms, "system");
    const name = getRoomData(props.rooms, "name");
    
    const windows = getRoomData(props.rooms, "windows");
    const capacity = getRoomData(props.rooms, "capacity");
    const sizes = getRoomData(props.rooms, "size");
    const students_per_computer = getRoomData(props.rooms, "students_per_computer");
    // const selected_students_per_computer = 0;
    const minSpc = students_per_computer.length > 0 ? Math.min(...students_per_computer) : 0;
    const maxSpc = students_per_computer.length > 0 ? Math.max(...students_per_computer) : 0;
    const minSeats = capacity.length > 0 ? Math.min(...capacity) : 0;
    const maxSeats = capacity.length > 0 ? Math.max(...capacity) : 0;
    const minSize = sizes.length > 0 ? Math.min(...sizes) : 0;
    const maxSize = sizes.length > 0 ? Math.max(...sizes) : 0;

    setState({
      ...state,
      types: types,
      // selected_students_per_computer: selected_students_per_computer,
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

  const handleChange = e => {
    if (e.target.type === "checkbox") {
      setState({ ...state, [e.target.name]: e.target.checked });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
      console.log("selected_students_per_computer: ",state.selected_students_per_computer);
    }
  };

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
         {/*room name */}
         <div className="form-group">
          <label htmlFor="name">Search:</label>
          <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              //className="capacity"
              onChange={handleChange}
            />
        </div>
        {/*end of room name */}
        {/* select type */}
        <div className="form-group">
          <label htmlFor="system_type">system type</label>
          <select
            name="system"
            id="system_type"
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">All System Types</option>
            {state.systems.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">All Types</option>
            {state.types.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="window">Window Types</label>
          <select
            name="window"
            id="window"
            className="form-control"
            onChange={handleChange}
          >
             <option value="all">All Types</option>
            {state.windows.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}

        {/*room price */}
        <div className="form-group">
          <label htmlFor="selected_students_per_computer">Students per computer: {state.selected_students_per_computer}</label>
          <input
              type="number"
              name="selected_students_per_computer"
              id="selected_students_per_computer"
              value={state.selected_students_per_computer}
              className="size-input"
              onChange={handleChange}
            />
          {/* <input
            type="range"
            name="students_per_computer"
            id="students_per_computer"
            min={state.minSpc}
            max={state.maxSpc}
            className="form-control"
            value={state.students_per_computer}
            onChange={handleChange}
          /> */}
        </div>
        {/*end of room price */}
        {/*room size */}
        <div className="form-group">
          <label htmlFor="size">capacity</label> 
          <div className="size-inputs">
            <input
              type="number"
              name="minSeats"
              id="size"
              value={state.minSeats}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSeats"
              id="size"
              value={state.maxSeats}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/*end of room size */}

        {/* extras */}
        <div className="form-group">
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
            <label htmlFor="whiteboard">whiteboard</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
export default RoomFilter;
