import React from "react";
import styled from "styled-components";
import defaultImg from "../images/home-page-bcg.jpg";

// Styled components
const HeroContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  z-index: 1;
  text-align: center;
  color: var(--mainWhite);
  padding: 2rem;
`;

function Hero({ children }) {

  return (
    <HeroContainer>
      <HeroImage src={defaultImg} alt="Hero background" />
      <HeroContent>{children}</HeroContent>
    </HeroContainer>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
