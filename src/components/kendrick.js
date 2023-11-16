import React from "react";
import "../styles/kendrick.css"
import kendrick from "../assets/King Kendrick Lamar.jpg"
import ring from "../assets/about below.png";
function Kendrick(){
    return(
        <div className="main">
            <img src={kendrick} alt="king" className="king"></img>
            <p className="music centerText">MUSIC</p>
            <p className="everywhere centerText">EVERYWHERE/©2023</p>
            <p className="oklama centerText">OKLAMA</p>
            <img src={ring} alt="about below" className="indicater"></img>
        </div>
    );
}

export default Kendrick;