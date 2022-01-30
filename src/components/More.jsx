import React from "react";
import "./More.css";

const More = (params) => {
  const arrayLanguajes = params.languages;
  const arrayHabilities = params.habilities;
  return (
    <div className="more">
      <h2>Idiomas</h2>
      <ul className="moreList">
        {Object.keys(arrayLanguajes).map((keyName, index) => (
          <li className="itemList" key={index}>
          &lt; {arrayLanguajes[keyName]} &gt;
          </li>
        ))}
      </ul>
      <h2>Habilidades</h2>
      <ul className="moreList">
        {arrayHabilities.map((item, index) => (
          <li className="itemList" key={index}>
            &lt; {item} &gt;
          </li>
        ))}
      </ul>
    </div>
  );
};

export default More;
