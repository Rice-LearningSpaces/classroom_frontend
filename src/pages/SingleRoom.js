import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { getRooms } from "../data/actions/roomActions";


//import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { display } from "@mui/system";
import BasicTabs from "./Tabs";


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
        <Banner title={`${room.name}`} subtitle = {`${room.building}`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
   
      <ImageList sx = {{display: "flex", width:'100%', height: 450}} row = {1}>
      {/* <div className="single-room-images"> */}
        {room.images &&
          room.images.map((img, i) => {
            return i === 0 ? null : <img key={i} src={img} alt={room.name} />;
          })}
      {/* </div> */}
      </ImageList>
      <div className="single-room-info">

      <div className="room-props">
        <h3>Properties</h3>
       <ul className="extras">
        {room.extras &&
          Object.keys(room.extras).map((key, i) => {
            let value = (room.extras[key] || room.extras[key] == false) ?room.extras[key]:"";
            if (Array.isArray(value)) {
              return (
                <li key={i}>
                  <span className="key">{key}:</span>
                  <ul>
                    {value.map((item, j) => (
                     
                        <span key={j} className="value">{item}</span>
                     
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <span className="key">{key}:</span>
                  <span className="value">{value}</span>
                </li>
              );
            }
          })}
      </ul>


      </div>
      <div className="rm-service"> 
      {/* TODO: change to buttons to request help and request room */}
        <h3>Services</h3>
        <h6>request help</h6>
        <h6>request room</h6>
      </div>
 
      </div>

      {/* https://codesandbox.io/s/tzzj28?file=/demo.tsx */}
      <article className="details">
          <h3>Technology Instructions</h3>
          <BasicTabs tabs={room.instructions} />
          {/* <TabContainer tabData={room.instructions} /> */}
          <p>{room.description ? room.description : null}</p>
        </article>
    </React.Fragment>
  );
}
const mapStatesToProps = state => {
  return { rooms: state.rooms };
};

// function TabPanel({ children, activeTab }) {
//   return (
//     <div className="tab-panel">
//       {children[activeTab]}
//     </div>
//   );
// }

// function Tab({ tabName, isActive, onTabClick }) {
//   return (
//     <div
//       className={`tab ${isActive ? 'active' : ''}`}
//       onClick={onTabClick}
//     >
//       {tabName}
//     </div>
//   );
// }

// function TabContainer({ tabData }) {
//   const [activeTab, setActiveTab] = useState(0);

//   function handleTabClick(index) {
//     setActiveTab(index);
//   }

//   const tabNames = Object.keys(tabData);
//   const tabContents = Object.values(tabData);

//   console.log(tabNames);

//   return (
//     <div className="tab-container">
//       <div className="tab-list">
//         {tabNames.map((tabName, index) => (
//           <Tab
//             key={tabName}
//             tabName={tabName}
//             isActive={activeTab === index}
//             onTabClick={() => handleTabClick(index)}
//           />
//         ))}
//       </div>
//       <TabPanel activeTab={activeTab}>
//         {tabContents.map((tabContent,index) => (
//           <div key={index}>
//             {tabContent}
//           </div>
//         ))}
//       </TabPanel>
//     </div>
//   );
// }


export default connect(
  mapStatesToProps,

  { getRooms }
)(SingleRoom);
