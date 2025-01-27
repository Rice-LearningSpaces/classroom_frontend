import React from "react";
import styled from "styled-components";
import { FaGlobe, FaHiking, FaWindowRestore } from "react-icons/fa";
import Title from "./Title";
import { StyledSpan, StyledH6, StyledParagraph } from "./staticStyles";

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: var(--darkGrey);
  text-align: center;
`;

const ServicesCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const Service = styled.article`
  background: var(--mainWhite);
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

const services = [
  {
    icon: <FaGlobe />,
    title: "360 degree photo viewer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaHiking />,
    title: "campus map viewer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaWindowRestore />,
    title: "inventory",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function Services() {
  return (
    <ServicesSection>
      <Title title="services" />
      <ServicesCenter>
        {services.map((service, i) => (
          <Service key={i}>
            <StyledSpan>{service.icon}</StyledSpan>
            <StyledH6>{service.title}</StyledH6>
            <StyledParagraph>{service.info}</StyledParagraph>
          </Service>
        ))}
      </ServicesCenter>
    </ServicesSection>
  );
}

export default Services;
