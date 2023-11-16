import React from "react";
import "../../styles/section.css";
const Section = ({ section }) => {
  return (
    <div className="section">
      <img src={section.image} alt="album cover" className="image"></img>
      <div className="head">
        <div className="description">{section.head.description}</div>
        <div className="name">{section.head.name}</div>
        <div className="year">{section.head.year}</div>
      </div>
    </div>
  );
};

export default Section;
