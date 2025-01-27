import React from "react";
import styled from "styled-components";
import Room from "./Room";

// Styled Components
const RoomsListSection = styled.section`
  padding: 2rem 0;
`;

const EmptySearch = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: var(--mainSpacing);

  h3 {
    font-size: 1.5rem;
    color: var(--mainBlack);
  }
`;

const RoomsListCenter = styled.div`
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

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <EmptySearch>
        <h3>Unfortunately, no rooms matched your search parameters</h3>
      </EmptySearch>
    );
  }

  return (
    <RoomsListSection>
      <RoomsListCenter>
        {rooms &&
          rooms.map((item, i) => {
            return <Room key={i} room={item} />;
          })}
      </RoomsListCenter>
    </RoomsListSection>
  );
}

export default RoomList;
