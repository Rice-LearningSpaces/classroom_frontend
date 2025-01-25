import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { getRooms } from "../data/actions/roomActions";
import ImageList from "@mui/material/ImageList";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import BasicTabs from "./Tabs";

// Styled Components
const ErrorMessage = styled.div`
  text-align: center;
  margin: 2rem 0;

  h3 {
    font-size: 1.5rem;
    color: var(--mainBlack);
  }

  a {
    display: inline-block;
    text-decoration: none;
    letter-spacing: var(--mainSpacing);
    color: var(--mainWhite);
    background: var(--primaryColor);
    padding: 0.4rem 0.9rem;
    border: 3px solid var(--primaryColor);
    text-transform: uppercase;
    transition: var(--mainTransition);

    &:hover {
      background: transparent;
      color: var(--primaryColor);
    }
  }
`;

const SingleRoomInfo = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--mainBlack);
  }
`;

const RoomProps = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;

      .key {
        font-weight: bold;
        margin-right: 0.5rem;
      }

      .value {
        font-style: italic;
      }
    }
  }
`;

const SeatingChartContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Details = styled.article`
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--mainBlack);
  }

  p {
    line-height: 1.5;
    color: var(--mainBlack);
  }
`;

const Container = styled.div`
  a {
    display: inline-block;
    text-decoration: none;
    color: var(--mainWhite);
    background: var(--primaryColor);
    padding: 0.4rem 0.9rem;
    border: 3px solid var(--primaryColor);
    cursor: pointer;

    &:hover {
      background: transparent;
      color: var(--primaryColor);
    }
  }
`;

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
      (item) => item.slug === props.match.params.slug
    );
    setState({ room: room });
    //eslint-disable-next-line
  }, [props.rooms]);

  if (!state.room) {
    return (
      <ErrorMessage>
        <h3>No such room could be found...</h3>
        <Link to="/rooms">Back to Rooms</Link>
      </ErrorMessage>
    );
  }

  const { room } = state;

  const toggleDrawer =
    (open) =>
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setToggle(open);
    };

  return (
    <React.Fragment>
      <StyledHero img={room.images ? room.images[0] : null}>
        <Banner title={`${room.name}`} subtitle={`${room.building}`}>
          <Container>
            <Link to="/rooms">Back to Rooms</Link>
          </Container>
        </Banner>
      </StyledHero>

      <ImageList sx={{ display: "flex", width: "100%", height: 450 }} row={1}>
        {room.images &&
          room.images.map((img, i) =>
            i === 0 ? null : <img key={i} src={img} alt={room.name} />
          )}
      </ImageList>

      <SeatingChartContainer>
        <Button
          onClick={() => setToggle(true)}
          variant="outlined"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderColor: "black",
            color: "#000000",
          }}
        >
          Seating Chart
        </Button>
        <Drawer
          onClose={() => setToggle(false)}
          anchor={"top"}
          open={toggle}
          PaperProps={{
            sx: {
              alignItems: "center",
            },
          }}
        >
          <img
            src={room.seating_chart}
            alt={room.name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Drawer>
      </SeatingChartContainer>


      <SingleRoomInfo>
        <RoomProps>
          <h3>Properties</h3>
          <ul>
            {room &&
              Object.keys(room).map((key, i) => {
                if (key === "id" || key === "images" || key === "seating_chart") {
                  return null;
                }
                let value = room[key] || "";
                if (Array.isArray(value)) {
                  return (
                    <li key={i}>
                      <span className="key">{key}:</span>
                      <ul>
                        {value.map((item, j) => (
                          <span key={j} className="value">
                            {item}
                          </span>
                        ))}
                      </ul>
                    </li>
                  );
                } else if (typeof value === "object" && !Array.isArray(value)) {
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
        </RoomProps>

        <Details>
          <h3>Technology Instructions</h3>
          <BasicTabs tabs={room.instructions} />
          <p>{room.description ? room.description : null}</p>
        </Details>
      </SingleRoomInfo>
    </React.Fragment>
  );
}

const mapStatesToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStatesToProps, { getRooms })(SingleRoom);
