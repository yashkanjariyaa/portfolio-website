import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <div className="navbar">
      <div className="hero">
      <ScrollLink
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <FontAwesomeIcon
          className="landMarkIcon"
          icon={faLandmark}
          style={{ color: "#ffffff" }}
        />
      </ScrollLink>
      </div>
      <ul className="unordered-list">
        <li className="list-element">
          <ScrollLink
            activeClass="active"
            to="music"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Music
          </ScrollLink>
        </li>
        <li className="list-element">
          <ScrollLink
            activeClass="active"
            to="merch"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Merch
          </ScrollLink>
        </li>
        <li className="list-element">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
