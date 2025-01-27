import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

const Article = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    display: block;
    transition: var(--mainTransition);
  }

  &:hover img {
    opacity: 0.3;
  }

`;

const PriceTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: var(--mainWhite);
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: var(--mainSpacing);

  h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
  }
`;

const RoomLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 0.2rem 0.3rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  transition: var(--mainTransition);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const RoomInfo = styled.p`
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
`;

function Room({ room }) {
  return (
    <Article>
      <ImageContainer>
        <img
          src={(room.images && room.images[0]) || defaultImg}
          alt="single room"
        />
        <PriceTop>
          <h6>{room.building}</h6>
        </PriceTop>
        <RoomLink to={`/rooms/${room.slug}`}>
          Features
      </RoomLink>
      </ImageContainer>
      <RoomInfo>{room.name}</RoomInfo>
    </Article>
  );
}

export default Room;
