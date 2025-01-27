import React from "react";
import styled from "styled-components";

// Styled-components
const BannerContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: var(--primaryColor);
  margin: 1.7rem auto;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

function Banner({ title, subtitle, children }) {
  return (
    <BannerContainer>
      <Title>{title}</Title>
      <Divider />
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </BannerContainer>
  );
}

export default Banner;
