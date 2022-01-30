import React from "react";
import "./Hero.css";
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img className="imgHero" src={hero.image} alt=""></img>
      <div className="captionHero">
        <ul className="listHero">
          <li>{hero.name}</li>
          <li>{hero.city}</li>
          <li>{hero.email}</li>
          <li>{hero.birthDate}</li>
          <li>{hero.phone}</li>
          <li>{hero.gitHub}</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
