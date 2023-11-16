import React from "react";
import "../styles/merch.css";
import tshirt1 from "../assets/Kendrick Lamar Cool Potrait T-shirt.jpg";
import tshirt2 from "../assets/Kendrick Lamar Shirt the Heart Part 5 Tshirt Mr_ Morale & - Etsy (1).jpg";
import tshirt3 from "../assets/Kendrick Lamar Shirt the Heart Part 5 Tshirt Mr_ Morale & - Etsy.jpg";
import tshirt4 from "../assets/Kendrick Lamar T-Shirt.jpg";
import bgImageMerch from "../assets/[deleted by user].jpg";
function Merch(){
    return(
        <div className="main">
            <img src={bgImageMerch} alt="bgImage" className="bgImageMerch"></img>
            <p className="Merch">MERCH OFFICIAL ©2023</p>
            <p className="carouselText carouselTextOne">TO PIMP A BUTTERFLY</p>
            <p className="carouselText carouselTextTwo">MR MORALE & BIG STEPPERS</p>
            <p className="carouselText carouselTextThree">DAMN</p>
            <p className="carouselText carouselTextFour">BLACK PANTHER</p>
            <p className="carouselText carouselTextFive">GOOD KID BAD CITY</p>
        </div>
    );
}

export default Merch;