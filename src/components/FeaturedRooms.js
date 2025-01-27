import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRooms } from "../data/actions/roomActions";
import Title from "./Title";
import Room from "./Room";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  padding: 5rem 0;
  background: var(--mainWhite);
`;

const FeaturedRoomsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;

  @media screen and (min-width: 776px) {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const FeaturedRooms = (props) => {
  const [state, setState] = useState({ rooms: [], loading: true });

  useEffect(() => {
    props.getRooms();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let featured = props.rooms.filter((item) => item.featured === true);
    setState({ rooms: featured, loading: false });
  }, [props.rooms]);

  return (
    <React.Fragment>
      <Section>
        <Title title="featured rooms" />
        <FeaturedRoomsCenter>
          {state.rooms.map((room, i) => {
            return <Room key={i} room={room} />;
          })}
        </FeaturedRoomsCenter>
      </Section>
    </React.Fragment>
  );
};

const mapStatesToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStatesToProps, { getRooms })(FeaturedRooms);
