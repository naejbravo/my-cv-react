import React from "react";
import "./About.css";
const About = ({ hero }) => {
  return (
    <div className="about">
    <h2>Acerca de mi</h2>
      <ul className="aboutList">
        {hero.map((item, index) => {
          return <li className="aboutItem" key={index}>{item.info}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;
