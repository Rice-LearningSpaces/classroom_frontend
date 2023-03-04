import React from "react";
import { FaGlobe, FaHiking, FaRegClipboard, FaWindowRestore } from "react-icons/fa";
import Title from "./Title";

const services = [
  {
    icon: <FaGlobe />,
    title: "360 degree photo viewer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaHiking />,
    title: "campus map viewer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaRegClipboard />,
    title: "seating chart",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    icon: <FaWindowRestore />,
    title: "inventory",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];
function Services() {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, i) => {
          return (
            <article key={i} className="service">
              <span>{service.icon} </span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
