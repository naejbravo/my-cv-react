import React from "react";
import "./Experience.css";
const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <h2>Experiencia</h2>
      {experience.map((item, index) => (
        <div key={index} className="experienceItem">
          <ul className="experienceList">
            <li className="itemList">&lt; {item.date} &gt; </li>
            <li className="itemList"> &lt; {item.description} &gt; </li>
            <li className="itemList">&lt; {item.name} &gt; </li>
            <li className="itemList">&lt; {item.where} &gt; </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
