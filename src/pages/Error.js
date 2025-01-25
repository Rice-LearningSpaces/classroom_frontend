// import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";

// export default function Error() {
//   return (
//     <Hero>
//       <Banner title="404" subtitle="page not found">
//         <Link to="/" className="btn-primary">
//           return home
//         </Link>
//       </Banner>
//     </Hero>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 2rem;

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

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Container>
          <Link to="/">return home</Link>
        </Container>
      </Banner>
    </Hero>
  );
}
