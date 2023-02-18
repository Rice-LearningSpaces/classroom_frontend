import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { getRooms } from "../data/actions/roomActions";


//import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     width: 500,
//     height: 450,
//   },
// }));
// const classes = useStyles();


function SingleRoom(props) {
  const [state, setState] = useState({ room: {} });

  useEffect(() => {
    document.title = "Beach Resort || Room Details";
    props.getRooms();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const room = props.rooms.find(
      item => item.slug === props.match.params.slug
    );
    setState({ room: room });
    //eslint-disable-next-line
  }, [props.rooms]);

  if (!state.room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const { room } = state;


  

  return (
    <React.Fragment>
      <StyledHero img={room.images ? room.images[0] : null}>
        <Banner title={`${room.name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      {/* TODO change to react scrollable image list https://mui.com/material-ui/react-image-list/*/}
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {room.images.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="single-room-images">
        {room.images &&
          room.images.map((img, i) => {
            return i === 0 ? null : <img key={i} src={img} alt={room.name} />;
          })}
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>details</h3>
          <p>{room.description ? room.description : null}</p>
        </article>
        <article className="info">
          <h3>info</h3>
          <h6>price : {room.price ? room.price : null}</h6>
          <h6>size : {room.size ? room.size : null} SQFT</h6>
          <h6>
            max capacity :{" "}
            {room.capacity
              ? room.capacity > 1
                ? `${room.capacity} people`
                : room.capacity
              : null}
          </h6>
          <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
          <h6>{room.breakfast ? "free breakfast included" : null}</h6>
        </article>
      </div>
      <div className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {room.extras &&
            room.extras.map((item, i) => {
              return <li key={i}>- {item}</li>;
            })}
        </ul>
      </div>
    </React.Fragment>
  );
}
const mapStatesToProps = state => {
  return { rooms: state.rooms };
};

export default connect(
  mapStatesToProps,
  { getRooms }
)(SingleRoom);
