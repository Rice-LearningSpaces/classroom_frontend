import React, { useEffect } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

// Styled components
const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

function Home() {
  useEffect(() => {
    document.title = "Beach Resort || Home";
  }, []);

  return (
    <React.Fragment>
      <Hero />
      <HomeContainer>
        <Services />
        <FeaturedRooms />
      </HomeContainer>
    </React.Fragment>
  );
}

export default Home;
