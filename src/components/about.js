import React from "react";
import kendrick from "../assets/kendrick sitting.png";
import kendrickFlying from "../assets/Kendrick Lamar Wallpaper HD.jpg";
import "../styles/about.css";
function About() {
  return (
    <div className="main">
      <img src={kendrickFlying} alt="kendrick" className="kendrickFlying"></img>
      <img src={kendrick} alt="kendrick" className="kendrickSitting"></img>
      <p className="about">About</p>
      <div className="heading-about">
        <p className="thisIs">This is</p>
        <p className="oklama">OKLAMA</p>
      </div>
      <div className="para paraOne">
        Lamar developed an interest in music and songwriting from a young age.
        He began releasing music as a teenager under the stage name K.Dot, and
        signed to the independent record label Top Dawg Entertainment (TDE) in
        2005. After retiring his stage name, he first gained attention through
        the release of his final mixtape, Overly Dedicated (2010).
      </div>
      <div className="kendrickAbout">KENDRICK</div>
      <div className="genres">
        #hiphop #progressiverap #jazzrap #conciousrap #westcoastrap
      </div>
      <div className="para paraTwo">
        Heralded as a generational icon by the California State Senate, Lamar's
        accolades include seventeen Grammy Awards, including three Best Rap
        Album wins, a Primetime Emmy Award, a Brit Award, four American Music
        Awards, six Billboard Music Awards, 11 MTV Video Music Awards and 25 BET
        Hip Hop Awards; the most for any artist. He is one of the most-streamed
        rappers on Spotify, with each of his albums surpassing 1 billion
        streams.
      </div>
      <div className="para paraThree">
        Lamar was named MTV's Hottest MC in the Game in 2012, and has since been
        included on the Time 100 and Forbes 30 Under 30. Three of his albums
        were included in Rolling Stone's 500 greatest albums of time in 2020.
      </div>
      <div className="para paraFour">
        Kendrick Lamar Duckworth was born on June 17, 1987, in Compton,
        California, to Paula Oliver, a McDonald's worker, and Kenneth "Kenny"
        Duckworth, a KFC worker. His parents were from the South Side of
        Chicago and relocated to Compton three years before his birth due to his
        father's affiliation with the Gangster Disciples.Lamar is the eldest
        of four children and was named after singer-songwriter Eddie Kendricks
        of the Temptations. He was raised in a working class African American
        family, lived in Section 8 housing, and was reliant on welfare.
        Although he was not a member of a gang, he grew up among close
        affiliates of the Westside Piru Bloods.
      </div>
      <div className="quote quotePara">
        Rap has truly helped my expansion of self. Beyond the perception of who
        I believed to be. Music is air to a young nigga at this point. Mr.
        Morale, the catalyst of my self-expression.
      </div>
      <div className="quote quoteBy">
        — Kendrick Lamar on Mr. Morale & the Big Steppers
      </div>
    </div>
  );
}

export default About;
