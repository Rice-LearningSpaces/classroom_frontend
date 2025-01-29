import React, { useEffect } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Button, Box, Typography } from "@mui/material";

// Styled components
const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    gap: 2rem;
  }
`;

const CustomButton = styled(Button)`
  border: 2px solid #bdbdbd;
  border-radius: 50px !important;
  padding: 12px 32px;
  width: 15rem;
  height: 4rem;
  text-transform: none !important;
  font-size: 1.1rem !important;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 767px) {
    width: 7rem;
    height: 2.5rem;
    font-size: 0.7rem !important;
  }

  @media screen and (min-width: 768px) and (max-width: 1025px){
    width: 10rem;
    height: 3rem;
    font-size: 1rem !important;
  }
`;


function Home() {
  useEffect(() => {
    document.title = "Beach Resort || Home";
  }, []);

  return (
    <React.Fragment>
      <Hero/>
      <ButtonContainer>
        <CustomButton variant="outlined">How Reserve a Classroom</CustomButton>
        <CustomButton variant="outlined">Classroom Training</CustomButton>
        <CustomButton variant="outlined">Classroom Help</CustomButton>
      </ButtonContainer>
      <HomeContainer>
        <Services />
        <FeaturedRooms />
      </HomeContainer>
    </React.Fragment>
  );
}

export default Home;
