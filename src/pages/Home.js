import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import EarthMoonVR from "../index.vr";

function Home() {
  useEffect(() => {
    document.title = "Beach Resort || Home";
  }, []);

  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Classroom Search"
          subtitle="by building"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
export default Home;
