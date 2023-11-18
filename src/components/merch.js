import React from "react";
import "../styles/merch.css";
import tshirt1 from "../assets/Kendrick_Lamar_Cool_Potrait_T-shirt-removebg-preview.png";
import tshirt2 from "../assets/Kendrick_Lamar_Shirt_the_Heart_Part_5_Tshirt_Mr__Morale___-_Etsy__1_-removebg-preview.png";
import tshirt3 from "../assets/Kendrick_Lamar_Shirt_the_Heart_Part_5_Tshirt_Mr__Morale___-_Etsy-removebg-preview.png";
import tshirt4 from "../assets/Kendrick_Lamar_T-Shirt-removebg-preview.png";
import bgImageMerch from "../assets/[deleted by user].jpg";
function Merch() {
  return (
    <div className="main" id="merch">
      <div className="display-container">
        <div className="tshirt-container">
          <div className="tshirtElement elementOne">
            <img src={tshirt1} alt="tshirt" className="tshirt1 tshirt"></img>
            <button className="addToCart">Add to cart</button>
          </div>
          <div className="tshirtElement elementTwo">
            <img src={tshirt2} alt="tshirt" className="tshirt2 tshirt"></img>
            <button className="addToCart">Add to cart</button>
          </div>
          <div className="tshirtElement elementThree">
            <img src={tshirt3} alt="tshirt" className="tshirt3 tshirt"></img>
            <button className="addToCart">Add to cart</button>
          </div>
          <div className="tshirtElement elementFour">
            <img src={tshirt4} alt="tshirt" className="tshirt4 tshirt"></img>
            <button className="addToCart">Add to cart</button>
          </div>
        </div>
        <p className="store">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
          pharetra magna ac placerat vestibulum lectus mauris ultrices. Augue
          neque gravida in fermentum et. Pellentesque elit eget gravida cum.
          Feugiat sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper.
        </p>
      </div>
      <img src={bgImageMerch} alt="bgImage" className="bgImageMerch"></img>
      <p className="Merch">MERCH OFFICIAL ©2023</p>
      <p className="carouselText carouselTextOne">
        - DAMN TO PIMP A BUTTERFLY BLACK PANTHER SECTION.80 MONEY TREES -
      </p>
      <p className="carouselText carouselTextTwo">
        - MR MORALE & BIG STEPPERS GOOD KID BAD CITY UNTITLED UNMASTERED FAMILY
        TIES PRAY FOR ME SILENT HILL N95 -
      </p>
    </div>
  );
}

export default Merch;
