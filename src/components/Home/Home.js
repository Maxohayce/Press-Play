import React from "react";
import { Layout } from "../../Layout/index";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import Firefox from "../../images/firefox.png";
import Auba from "../../images/auba.png";
import Crad from "../../images/crad.png";
import Crypto from "../../images/crypto.png";
import Simplicity from "../../images/simplicity.png";

import "./Home.css";

const cards = [
  { image: Auba, episode: "E7", time: "12 mins", title: "A Big Win?" },
  { image: Crad, episode: "E14", time: "5 mins", title: "Idea Power" },
  { image: Crypto, episode: "E1", time: "10 mins", title: "Taking Bitcoin" },
  {
    image: Simplicity,
    episode: "E7",
    time: "6 mins",
    title: "Save the Planet",
  },
];
const Home = () => (
  <Layout>
    <section className="Background">
      <div className="Text">
        <h1>Press play and Listen to the World!</h1>
        <br />
        <div className="Button">
          <Button btnType="DarkHome">Create Yours</Button>
          <Button btnType="Orange">Explore</Button>
        </div>
      </div>
    </section>
    <section>
      <h4>Most Popular Topics</h4>
      <div className="Icons">
        <span>
          <i className="fa fa-th"></i>
          <p>Headlines</p>
        </span>
        <span>
          <i className="fa fa-thumbs-up"></i>
          <p>Politics</p>
        </span>
        <span>
          <i className="fa fa-heart"></i>
          <p>Relationships</p>
        </span>
        <span>
          <i className="fa fa-dollar"></i>
          <p>Money</p>
        </span>
      </div>
    </section>
    <section>
      <h4>Top Podcast</h4>
      <div className="Cards">
        {cards.map((card, i) => (
          <Card
            key={i}
            image={card.image}
            episode={card.episode}
            time={card.time}
            title={card.title}
          />
        ))}
      </div>
    </section>
    <section className="About">
      <h4>See how press play works</h4>
      <img className="aboutImage" src={Firefox} alt="learn" />
    </section>
  </Layout>
);

export default Home;
