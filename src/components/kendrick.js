import React from "react";
import "../styles/kendrick.css";
import kendrick from "../assets/King Kendrick Lamar.jpg";
import ring from "../assets/about below.png";
function Kendrick() {
  return (
    <div className="main">
      <img src={kendrick} alt="king" className="king"></img>
      <p className="music centerText">MUSIC</p>
      <p className="everywhere centerText">EVERYWHERE/©2023</p>
      <p className="oklama centerText">OKLAMA</p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img src={ring} alt="about below" className="indicater"></img>
    </div>
  );
}

export default Kendrick;
