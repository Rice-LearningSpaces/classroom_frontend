import React, { useState, useEffect, useRef} from "react";
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
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import FlightClassIcon from '@mui/icons-material/FlightClass';

// const useStyles = (pheight)=> makeStyles({
//   drawer: {
//     position: "relative",
//     marginLeft: "auto",
//     width: 200,
//     "& .MuiBackdrop-root": {
//       display: "none"
//     },
//     "& .MuiDrawer-paper": {
//       width: 200,
//       position: "absolute",
//         height: pheight,
//       transition: "none !important"
//     }
//   }
// });

function SingleRoom(props) {
  const [state, setState] = useState({ room: {} });
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);



  useEffect(() => {
    document.title = "Rice University || Edtech";
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

  


  const toggleDrawer =
    (open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setToggle(open);
    };



  

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
          {room &&
            Object.keys(room).map((key, i) => {
              // don't display id and images on the property list
              if (key === "id" || key === "images" || key === "seating_chart") {
                return null;
              }
              let value = (room[key]) ?room[key]:"";
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
              } else if (typeof value === 'object' && !Array.isArray(value)) {
                return null;
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
      <div className="seating-chart" ref={containerRef}>
        {/* <h3>Seating Chart</h3> */}
        {/* <img src={room.seating_chart} alt={room.name} />; */}
        <React.Fragment key={"top"} >
          <Button onClick={toggleDrawer(true)} 
          variant="outlined" 
         
          sx = {{fontSize: "1.5em",
            lineHeight: "1",
            fontWeight: "bold",
            fontFamily: 'Verdana',
            borderColor: "black",
            color:'#000000',
            mb: "1em"}}
          // startIcon={<FlightClassIcon />}>
          >
         Seating Chart </Button>
          <Drawer
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            anchor={"top"}
            open={toggle}
            
            
          >
            {<img src={room.seating_chart} className = "seating-chart-img" alt={room.name} />}
          </Drawer>
        </React.Fragment>
      </div>
      <div className="rm-service"> 
        <h3>Services</h3>
        <h6>
        <Button onClick={()=>{}} 
          variant="outlined" 
          sx = {{fontSize: "1em",
            lineHeight: "1",
            fontFamily: 'Verdana',
            color:'#000000',
            fontWeight: "bold",
       }}
          >
         request help </Button>
        </h6>
        <h6>
        <Button onClick={()=>{}} 
          variant="outlined" 
          sx = {{fontSize: "1em",
            lineHeight: "1",
            fontFamily: 'Verdana',
            color:'#000000',
            fontWeight: "bold",
          }}
          >
         request room </Button>
        </h6>
        
        
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
