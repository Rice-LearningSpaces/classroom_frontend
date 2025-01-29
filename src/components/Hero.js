import React from "react";
import styled from "styled-components";
import defaultImg from "../images/home-page-bcg.jpg";

// Styled components
const HeroContainer = styled.div`
  position: relative;
  min-height: calc(80vh - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 1;
  text-align: center;
  color: var(--mainWhite);
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
