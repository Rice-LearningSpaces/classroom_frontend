import React, { useState, useEffect } from "react";
import Title from "./Title";

function RoomFilter(props) {
  const [state, setState] = useState({
    types: [],
    guests: [],
    extras: [],
    capacity: [],
    sizes: [],
    type: "all",
    system: "all",
    name:"all",
    seats: 0,
    capacity: 1,
    systems: [],
    breakfast: false,
    pets: false,
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
    //const extras = getRoomData(props.rooms, "extras"); TODO: delete when works
    const systems = getRoomData(props.rooms, "system");
    const name = getRoomData(props.rooms, "name");
    const guests = getRoomData(props.rooms, "capacity");
    const capacity = getRoomData(props.rooms, "capacity");
    const sizes = getRoomData(props.rooms, "size");
    const minSeats = capacity.length > 0 ? Math.min(...capacity) : 0;
    const maxSeats = capacity.length > 0 ? Math.max(...capacity) : 0;
    const minSize = sizes.length > 0 ? Math.min(...sizes) : 0;
    const maxSize = sizes.length > 0 ? Math.max(...sizes) : 0;

    setState({
      ...state,
      types: types,
      systems: systems,
      guests: guests,
      minSeats: minSeats,
      maxSeats: maxSeats,
      minSize: minSize,
      maxSize: maxSize,
      seats: maxSeats
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
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            onChange={handleChange}
          >
            {state.guests.sort().map((guest, i) => {
              return (
                <option key={i} value={guest}>
                  {guest}
                </option>
              );
            })}
          </select>
        </div>
        {/* end select type */}

        {/*room price */}
        <div className="form-group">
          <label htmlFor="seats">Students per computer: {state.seats}</label>
          {/* todo: change to extras.computer count */}
          <input
            type="range"
            name="seats"
            id="seats"
            min={state.minSeats}
            max={state.maxSeats}
            className="form-control"
            value={state.seats}
            onChange={handleChange}
          />
        </div>
        {/*end of room price */}
        {/*room size */}
        <div className="form-group">
          <label htmlFor="size">capacity</label> 
          {/* TODO: change to capacity */}
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
              name="breakfast"
              id="breakfast"
              checked={state.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={state.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
export default RoomFilter;
