import React from "react";
import "./Education.css";
const Education = ({ education }) => {
  return (
    <div className="education">
      <h2>Educación</h2>
      {education.map((item, index) => (
        <div key={index} className="educationItem">
          <ul className="educationList">
            <li className="itemList">&lt; {item.name} &gt; </li>
            <li className="itemList"> &lt; {item.date} &gt; </li>
            <li className="itemList">&lt; {item.where} &gt; </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
