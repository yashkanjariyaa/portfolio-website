import React, { useEffect, useRef} from "react";
import Section from "./subcomponents/section";
import DAMN from "../assets/DAMN.jpg";
import MrMorale from "../assets/Mr Morale.jpg";
import Butterfly from "../assets/Butterfly.jpg";
import GoodKid from "../assets/GoodKid.jpg";
import Section80 from "../assets/Section80.jpg";
import Untitled from "../assets/Untitled.jpg";
import BlackPanther from "../assets/BlackPanther.jpg";
import bgImage from "../assets/Kendrick Lamar Wallpaper HD.jpg"
import "../styles/music.css";
import "react-intersection-observer";
function Music() {
  const sectionArray = [
    {
      head: {
        name: "DAMN",
        year: "2017",
        description:
          "Damn (stylized as DAMN.) is the fourth studio album by American rapper Kendrick Lamar.",
      },
      text: "Lamar assembled numerous artists and producers to produce the album, including executive producer and Top Dawg Entertainment label-head Anthony 'Top Dawg' Tiffith, Sounwave, DJ Dahi, Mike Will Made It, and Ricci Riera, as well as further production contributions from James Blake, Steve Lacy, BadBadNotGood, Greg Kurstin, The Alchemist, and 9th Wonder, among others. The album features guest vocals from singer Rihanna and Top Dawg singer Zacari, along with Irish rock band U2.",
      image: DAMN,
    },
    {
      head: {
        name: "Mr Morale & The Big Steppers",
        year: "2022",
        description:
          "Mr. Morale & the Big Steppers is the fifth studio album by American rapper Kendrick Lamar, released on May 13, 2022.",
      },
      text: "Mr. Morale & the Big Steppers is a concept album that analyzes and reflects on his life experiences during his therapy journey. Its lyrics touches on a variety of personal themes, including childhood and generational trauma, infidelity, and celebrity worship.",
      image: MrMorale,
    },
    {
      head: {
        name: "To Pimp a Butterfly",
        year: "2015",
        description:
          "To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on March 15, 2015.",
      },
      text: "Primarily a hip hop album, To Pimp a Butterfly incorporates numerous other musical styles spanning the history of African-American music, most prominently jazz, funk, and soul. Lyrically, it features political commentary and personal themes concerning African-American culture, racial inequality, depression, and institutional discrimination.",
      image: Butterfly,
    },
    {
      head: {
        name: "Good Kid, M.A.A.D City",
        year: "2012",
        description:
          "Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by the American rapper Kendrick Lamar. It was released on October 22, 2012.",
      },
      text: "Good Kid, M.A.A.D City was recorded mostly at several studios in California, with producers such as Dr. Dre, Just Blaze, Pharrell Williams, Hit-Boy, Scoop DeVille, Jack Splash, and T-Minus, among others, contributing to the album. Billed as a 'short film by Kendrick Lamar' on the album cover, the concept album follows the story of Lamar's teenage experiences in the drug-infested streets and gang lifestyle of his native Compton. Good Kid, M.A.A.D City received widespread acclaim from critics, who praised its thematic scope and Lamar's lyrics.",
      image: GoodKid,
    },
    {
      head: {
        name: "Section.80",
        year: "2011",
        description:
          "Section.80 is the debut studio album by American rapper Kendrick Lamar. It was released on July 2, 2011, by Top Dawg Entertainment (TDE).",
      },
      text: "The production of Section.80 was mainly handled by TDE in-house producers from production group Digi+Phonics, as well as THC, Tommy Black, Wyldfyer, Terrace Martin and J. Cole. A concept album, it features lyrical themes delivered by Lamar such as the 1980s crack epidemic, racism and the medication tolerance of Generation Y. The album features guest appearances from GLC, Colin Munroe, Ashtrobot, BJ the Chicago Kid, Schoolboy Q, Ab-Soul and vocals from late singer-songwriter Alori Joh.",
      image: Section80,
    },
    {
      head: {
        name: "Untitled Unmastered",
        year: "2016",
        description:
          "Untitled Unmastered (stylized as untitled unmastered.) is a compilation album by American rapper Kendrick Lamar.",
      },
      text: "It was released on March 4, 2016,[1] through Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. It consists of previously unreleased demos that originated during the recording of Lamar's album To Pimp a Butterfly (2015),[2] continuing that work's exploration of politically charged and philosophical themes, as well as its experimentation with free jazz, soul, avant-garde music, and funk styles. The album received widespread acclaim from critics, and it debuted atop the US Billboard 200.",
      image: Untitled,
    },
    {
      head: {
        name: "Black Panther (soundtrack)",
        year: "2018",
        description:
          "The soundtrack for the 2018 American superhero film Black Panther, based on the Marvel Comics character of the same name and produced by Marvel Studios.",
      },
      text: "After reading the film's script, Göransson traveled to Africa to research traditional African music for the film. He went on tour with Senegalese musician Baaba Maal, and recorded performances by Maal and other African musicians for use in the score. Notably, Göransson used recordings of talking drums and a tambin for character themes in the film, while Maal sung an original song for the opening of the score. Göransson combined these traditional African elements with the classical orchestra that is often used in superhero films. The orchestra was recorded at Abbey Road Studios, along with a choir singing in the Xhosa language.",
      image: BlackPanther,
    },
  ];
  const container = useRef(null);
  const options = {
    roots: null,
    rootMargin: "0px",
    threshold: 1,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("stopScroll");
          entry.target.classList.add("startScroll");
        } else {
          entry.target.classList.remove("startScroll");
          entry.target.classList.add("stopScroll");
        }
      });
    }, options);
    if (container.current) {
      observer.observe(container.current);
    }
  }, [options]);
  /*
  const [isHover, setIsHover] = useState(false);
  const [image, setImage] = useState();
  const handleHover = (index)=>{
    setIsHover(true);
    setImage(sectionArray[index].image);
  }
  const handleHoverLeft = () =>{
    setIsHover(false);
    setImage('');
  }
  const bgImage = useMemo(()=>{
    if(isHover){
      return image
    }else{
      return null;
    }
  }, [image, isHover]) /*
  /*
  const [coverImage, setCoverImage] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  function setCover(index){
    setIsClicked(true);
    const object = sectionArray[index];
    setCoverImage(object.image);
    console.log(object);
    console.log('Image set');
  };
  */
 
  return (
    <div className="main">
          <p className="heading">Discography</p>
          <div className="big-container stopScroll" ref={container}>
            {/*<img src={bgImage} className="bgImage" alt="bgImage"></img>*/}
            {sectionArray.map((section, index) => (
              <Section
                key={index}
                section={section}
              ></Section>
            ))}
          </div>
    </div>
  );
}

export default Music;
