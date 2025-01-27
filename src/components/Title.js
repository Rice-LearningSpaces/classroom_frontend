import React from "react";
import styled from "styled-components";

// Styled Components
const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const TitleHeading = styled.h4`
  font-size: 2rem;
  letter-spacing: var(--mainSpacing);
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const TitleUnderline = styled.div`
  width: 5rem;
  height: 5px;
  margin: 0 auto;
  background: var(--primaryColor);
`;

function Title({ title }) {
  return (
    <TitleContainer>
      <TitleHeading>{title}</TitleHeading>
      <TitleUnderline />
    </TitleContainer>
  );
}

export default Title;
