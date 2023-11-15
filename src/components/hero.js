import React from "react";
import "../styles/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowUp,
  faLandmark,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import hillbillies from "../assets/Screenshot_20231113-164120_Spotify.jpg";
import kendrick from "../assets/kendrick lamar with text.png";
import bgImageOne from "../assets/Screenshot_20231113-165101_Spotify.jpg";
import bgImageTwo from "../assets/Screenshot_20231113-164541_Spotify.jpg";
import circle from "../assets/circle.png";
function Hero() {
  return (
    <div className="main">
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
      <div className="navbar">
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#ffffff" }}
          className="menu"
        />
        <FontAwesomeIcon
          icon={faLandmark}
          style={{ color: "#ffffff" }}
          className="hero"
        />
        <ul className="unordered-list">
          <li className="list-element">
            <a href="#Music">Music</a>
          </li>
          <li className="list-element">
            <a href="#Merch">Merch</a>
          </li>
          <li className="list-element">
            <a href="#About">About</a>
          </li>
          <li className="list-element">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="achievements-container">
          <ul className="achievements-list subcontainer">
            <li className="achievements listHead">
              <p>Achievements</p>
            </li>
            <li className="achievements listEle">
              <p>13 Grammy Awards</p>
            </li>
            <li className="achievements listEle">
              <p>Academy Award for best original song 'HUMBLE'</p>
            </li>
            <li className="achievements listEle">
              <p>Multiple Billboard Music Awards</p>
            </li>
            <li className="achievements listEle">
              <p>
                First non-classical or jazz artist to win a Pulitzer Price for
                Music
              </p>
            </li>
          </ul>
        </div>
        <div className="events-container">
          <ul className="events-list subcontainer">
            <li className="events listHead">
              <p>Events</p>
            </li>
            <li className="events listEle">
              <p>2024 Concert Tour</p>
            </li>
            <li className="events listEle">
              <p>2023 Concert Tour</p>
            </li>
            <li className="events listEle">
              <p>2022 Super Bowl</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="links">
        <ul className="list">
          <li>
            <a href="#">PGLang</a>
          </li>
          <li>
            <a href="#">Top Dawg Entertainment</a>
          </li>
          <li>
            <a href="#">Oklama</a>
          </li>
        </ul>
      </div>
      <div className="latest">
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ color: "#ffffff" }}
          className="arrow"
        />
        <img src={hillbillies} alt="music" className="image"></img>
        <p className="title">New Single Released</p>
        <p className="content">The Hillbillies</p>
      </div>
      <div className="location">
        <p>COMPTON, CALIFORNIA, US</p>
      </div>
      <div className="center">
        <img src={circle} alt="circle text" className="circle"></img>
        <img src={kendrick} alt="kendrick lamar" className="image"></img>
      </div>
      <div className="text-container">
        <p className="head">Wikipedia -</p>
        <p className="text">
          Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper,
          singer, and songwriter. Known as "King Kendrick", he is widely
          regarded as one of the most influential rappers of his generation.
        </p>
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
              <p>Money Trees</p>
              <FontAwesomeIcon icon={faPlay} className="icon"/>
            </div>
          </li>
          <li>
            <div>
              <p>HUMBLE</p>
              <FontAwesomeIcon icon={faPlay} className="icon" />
            </div>
          </li>
          <li>
            <div>
              <p>All The Stars(with SZA)</p>
              <FontAwesomeIcon icon={faPlay} className="icon" />
            </div>
          </li>
          <li>
            <div>
              <p>family ties</p>
              <FontAwesomeIcon icon={faPlay} className="icon" />
            </div>
          </li>
          <li>
            <div>
              <p>LOVE. FEAT. ZACARI</p>
              <FontAwesomeIcon icon={faPlay} className="icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Hero;
