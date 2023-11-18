import React from "react";
import "../styles/footer.css";
import spotify from "../assets/8.png";
import amazonMusic from "../assets/9.png";
import youtubeMusic from "../assets/10.png";
import jioSaavan from "../assets/11.png";
function Footer() {
  return (
    <div className="mainFooter">
      <div className="block">
        <p className="name">Kendrick Lamar portfolio</p>
        <p className="by">by Yash Kanjariya</p>
        <p className="mail socials highlight">yashkanjariyaa@gmail.com</p>
        <a href="https://www.instagram.com/yashkanjariyaa" className="instagram socials highlight">@yashkanjariyaa</a>
        <a href="https://www.linkedin.com/in/yashkanjariyaa69/" className="linkedIn socials highlight">Yash Kanjariya - LinkedIn</a>
        <a href="https://github.com/yashkanjariyaa" className="github socials highlight">yashkanjariyaa - Github</a>
      </div>
      <div className="block">
        <div className="sub-block">
          <img src={spotify} className="icon spotfiy"></img>
          <a href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg" className="link highlight">
            Spotfiy
          </a>
        </div>
        <div className="sub-block">
          <img src={amazonMusic} className="icon amazonMusic"></img>
          <a href="https://music.amazon.com/artists/B0042Q3AB4/kendrick-lamar" className="link highlight">
            Amazon Music
          </a>
        </div>
        <div className="sub-block">
          <img src={youtubeMusic} className="icon youtubeMusic"></img>
          <a href="https://www.youtube.com/channel/UC3lBXcrKFnFAFkfVk5WuKcQ" className="link highlight">
            Youtube Music
          </a>
        </div>
        <div className="sub-block">
          <img src={jioSaavan} className="icon jioSaavan"></img>
          <a href="https://www.jiosaavn.com/artist/kendrick-lamar-songs/44fbKDllOW0_" className="link highlight">
            Jio Saavan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
