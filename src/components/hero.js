import React from "react";
import "../styles/hero.css";
import NavBar from "./subcomponents/navbar.js";
/*fontawesome icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
/*Images*/
import hillbillies from "../assets/Screenshot_20231113-164120_Spotify.jpg";
import kendrick from "../assets/kendrick lamar with text.png";
import bgImageOne from "../assets/Screenshot_20231113-165101_Spotify.jpg";
import bgImageTwo from "../assets/Screenshot_20231113-164541_Spotify.jpg";
import circle from "../assets/circle.png";
/*scrolling and link*/
function Hero(){
  const goToHilbillies = () =>{
    window.open('https://open.spotify.com/album/6ltyScGRzS0Z2TI1VD5dns?si=bA6xEoMPTACcIml9zNEewQ','_blank');
  }
  return (
    <div>
      <NavBar/>
    <div className="main" id="hero">
      <img
        src={bgImageOne}
        alt="the heart part five"
        className="bgImage imageOne"
      ></img>
      <img
        src={bgImageTwo}
        alt="another album"
        className="bgImage imageTwo"
      ></img>
      <div className="container">
        <div className="achievements-container">
          <ul className="achievements-list subcontainer">
            <li className="achievements listHead highlight">
              <p>Achievements</p>
            </li>
            <li className="achievements listEle highlight">
              <p>13 Grammy Awards</p>
            </li>
            <li className="achievements listEle highlight">
              <p>Academy Award for best original song 'HUMBLE'</p>
            </li>
            <li className="achievements listEle highlight">
              <p>Multiple Billboard Music Awards</p>
            </li>
            <li className="achievements listEle highlight">
              <p>
                First non-classical or jazz artist to win a Pulitzer Price for
                Music
              </p>
            </li>
          </ul>
        </div>
        <div className="events-container">
          <ul className="events-list subcontainer">
            <li className="events listHead highlight">
              <p>Events</p>
            </li>
            <li className="events listEle highlight">
              <p>2024 Concert Tour</p>
            </li>
            <li className="events listEle highlight">
              <p>2023 Concert Tour</p>
            </li>
            <li className="events listEle highlight">
              <p>2022 Super Bowl</p>
            </li>
          </ul>
        </div>
        <div className="text-container">
          <p className="head">Wikipedia -</p>
          <p className="text">
            Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper,
            singer, and songwriter. Known as "King Kendrick", he is widely
            regarded as one of the most influential rappers of his generation.
          </p>
        </div>
      </div>
      <div className="links">
        <ul className="list">
          <li className="highlight">
            <a href="#">PGLang</a>
          </li>
          <li className="highlight">
            <a href="#">Top Dawg Entertainment</a>
          </li>
          <li className="highlight">
            <a href="#">Oklama</a>
          </li>
        </ul>
      </div>
      <div className="latest" onClick={goToHilbillies}>
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "#ffffff" }}
          className="arrow"
        />
        <img src={hillbillies} alt="music" className="image"></img>
        <p className="title">New Single Released</p>
        <p className="content highlight">The Hillbillies</p>
      </div>
      <div className="location">
        <p className=" highlight">COMPTON, CALIFORNIA, US</p>
      </div>
      <div className="center">
        <img src={circle} alt="circle text" className="circle"></img>
        <img src={kendrick} alt="kendrick lamar" className="image"></img>
      </div>
      <div className="tophits">
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "#ffffff" }}
          className="arrow"
        />
        <p className="head">top hits</p>
        <ul className="tophits-list">
          <li>
            <div>
              <a
                href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                className="linkToSpotify highlight"
              >
                Money Trees
              </a>
              <FontAwesomeIcon icon={faPlay} className="icon highlight" />
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                className="linkToSpotify highlight"
              >
                HUMBLE
              </a>
              <FontAwesomeIcon icon={faPlay} className="icon highlight" />
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                className="linkToSpotify highlight"
              >
                All The Stars (with SZA)
              </a>
              <FontAwesomeIcon icon={faPlay} className="icon highlight" />
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                className="linkToSpotify highlight"
              >
                family ties
              </a>
              <FontAwesomeIcon icon={faPlay} className="icon highlight" />
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
                className="linkToSpotify highlight"
              >
                LOVE. FEAT. ZACARI
              </a>
              <FontAwesomeIcon icon={faPlay} className="icon highlight" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Hero;
