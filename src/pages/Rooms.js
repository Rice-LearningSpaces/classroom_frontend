import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomContainer";

const LinkContainer = styled.div`
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
    cursor: pointer;

    &:hover {
      background: transparent;
      color: var(--primaryColor);
    }
  }
`;

export default function Rooms() {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <LinkContainer>
            <Link to="/">return home</Link>
          </LinkContainer>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>
  );
}
