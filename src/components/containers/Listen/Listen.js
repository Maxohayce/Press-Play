import React from "react";
import Layout from "../../presentational/Layout/index";
import ListEpisode from "../../presentational/ListEpisode/ListEpisode";
import Button from "../../presentational/Button/Button";
import EpisodeCard from "../../presentational/EpisodeCards/EpisodeCard";

import listenImage from "../../../assets/images/listen.png";
import episode from "../../../assets/images/episode.png";
import ep1 from "../../../assets/images/angle135.png";
import ep2 from "../../../assets/images/angle136.png";
import ep3 from "../../../assets/images/angle137.png";
import ep4 from "../../../assets/images/angle138.png";
import ep5 from "../../../assets/images/angle139.png";
import ep6 from "../../../assets/images/angle140.png";
import ep7 from "../../../assets/images/angle141.png";
import ep8 from "../../../assets/images/angle142.png";
import ep9 from "../../../assets/images/angle143.png";
import ep10 from "../../../assets/images/angle144.png";
import ep11 from "../../../assets/images/angle145.png";
import ep12 from "../../../assets/images/angle146.png";
import Logo from "../../../assets/images/logo.png";

import classes from "./Listen.module.css";
import Form from "../../containers/Form";
import fields from "../../../assets/data/fields/search.json";

const listEpisodes = [
  { title: "All About Rocketez", time: "05:00mins" },
  { title: "All About Rocketez", time: "05:00mins" },
  { title: "All About Rocketez", time: "05:00mins" },
  { title: "All About Rocketez", time: "05:00mins" },
  { title: "All About Rocketez", time: "05:00mins" },
  { title: "All About Rocketez", time: "05:00mins" },
];

const iconButtons = [
  { icon: "fa fa-chevron-left" },
  { icon: "fa fa-play" },
  { icon: "fa fa-chevron-right" },
];

const episodeButtons = [
  { title: "love" },
  { title: "life" },
  { title: "money" },
  { title: "bants" },
  { title: "bants" },
  { title: "bants" },
  { title: "bants" },
  { title: "love" },
  { title: "life" },
  { title: "money" },
  { title: "bants" },
  { title: "bants" },
  { title: "bants" },
  { title: "bants" },
];

const episodeCards = [
  { name: "Episode 1", src: ep1 },
  { name: "Episode 2", src: ep2 },
  { name: "Episode 3", src: ep3 },
  { name: "Episode 4", src: ep4 },
  { name: "Episode 5", src: ep5 },
  { name: "Episode 6", src: ep6 },
  { name: "Episode 7", src: ep7 },
  { name: "Episode 8", src: ep8 },
  { name: "Episode 9", src: ep9 },
  { name: "Episode 10", src: ep10 },
  { name: "Episode 11", src: ep11 },
  { name: "Episode 12", src: ep12 },
];

class Listen extends React.Component {
  State = {
    player: false,
  };

  rewind = () => {
    this.setState.player.currentTime -= 1;
  };

  fastForward = () => {
    this.setState.player.currentTime += 1;
  };

 

  render() {
    const {
      Listen,
      listenTop,
      listenLeft,
      Play,
      PlayButton,
      listenRight,
      listenBottom,
      ProgressBar,
    } = classes;
    return (
      <Layout>
        <section className="pt-5 bg-dark text-white">
          <article className="container pt-5">
            <h1 className="pt-5 text-center xx-large">
              Welcome to <span className="text-primary">PressPlay, </span>Dubem
            </h1>
            <Form
              fields={fields}
              onSubmit={(fieldInputs) => console.log(fieldInputs)}
              shouldValidate={false}
              className="w-100"
            />
            <article className="d-flex flex-wrap my-2">
              {episodeButtons.map(({ title }, i) => (
                <button
                  className="btn btn--primary-outline text-white m-2"
                  key={i}
                >
                  {title}
                </button>
              ))}
            </article>
            <h2 className="x-large my-4">Trending Podcasts for the Week</h2>
            <article className="d-flex flex-wrap">
              {episodeCards.map(({ src, name }, i) => (
                <EpisodeCard src={src} key={name} />
              ))}
            </article>
          </article>
        </section>
        <section className={Listen}>
          <div className={listenTop}>
            <div className={listenLeft}>
              <img alt="Episode" src={listenImage} />
              <h3>ROCKET SHIP</h3>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <span className={Play}>
                <h3>PLAY</h3>
                <button
                  className={PlayButton}
                  style={{ height: "40px", width: "40px" }}
                >
                  <i className="fa fa-play"></i>
                </button>
              </span>
            </div>
            <div className={listenRight}>
              <h3>View Other Episodes</h3>
              <span className={classes.Episodes}>
                {listEpisodes.map((listEpisode, i) => {
                  return (
                    <ListEpisode
                      key={i}
                      title={listEpisode.title}
                      time={listEpisode.time}
                    />
                  );
                })}
              </span>
            </div>
          </div>
          <div className={listenBottom}>
            <span>
              <img alt="Episode-Bottom" src={episode} />
              <span>
                <h6>Jesus & Jollof</h6>
                <p>Lhurvie Ajayi & Yvonne Orji</p>
              </span>
            </span>
            <span>
              {iconButtons.map((button, i) => {
                return (
                  <Button key={i} btnType="Play">
                    <i className={button.icon}></i>
                  </Button>
                );
              })}
            </span>
            <progress className={ProgressBar} max="100" value="80">
              <span style={{ width: "80%" }}>Progress: 80%</span>
            </progress>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Listen;
