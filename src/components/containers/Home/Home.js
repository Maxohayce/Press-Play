import React from "react";
import Testimonial from "../../presentational/Testimonial/Testimonial";

import Testimonial1 from "../../../assets/images/Testimonial1.png";
import Testimonial2 from "../../../assets/images/Testimonial2.png";
import Layout from "../../presentational/Layout/index";
import Button from "../../presentational/Button/Button";
import Card from "../../presentational/Card/Card";
import Icon from "../../presentational/Fontawesome/Icon";

import Firefox from "../../../assets/images/firefox.png";
import micWithHeadset from "../../../assets/images/mic-with-headset.png";
import laptopImg from "../../../assets/images/laptop-with-podcasts.png";

import classes from "./Home.module.css";
import "./Home.module.css";
import jumboImg from "../../../assets/images/singing-with-headset.png";

import Backdrop from "../../presentational/Layout/Backdrop";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Free Hosting & Distribution",
    body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
  {
    title: "Unlimited Access to Content",
    body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
  {
    title: "Unlimited Access to Content",
    body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  },
];

const icons = [
  { className: "fa fa-th", title: "Headlines" },
  { className: "fa fa-thumbs-up", title: "Politics" },
  { className: "fa fa-heart", title: "Relationships" },
  { className: "fa fa-dollar", title: "Money" },
];

const testimonials = [
  {
    image: Testimonial1,
    name: "Sarah Mong, London",
    title: 'PODCASTER OF "THE BEAUTY TALK" ',
    body:
      "Pressplay has helped me share my voice with the world through my bi-weekly podcast. it’s amazing to find an audience that actually wants to engage with my content! ",
  },
  {
    image: Testimonial2,
    name: "David Mong, Nigeria",
    title: "PODCAST LISTENER",
    body:
      "I’m a huge fan of pressplay because everytime I come on to the platfrom, it’s hard to leave. i get so engrossed by all the amazing podcast content on there!",
  },
];

class Home extends React.Component {
  render() {
    const { jumboText, btnGroup } = classes;

    return (
      <Layout>
        <Backdrop backgroundImage={jumboImg} minHeight="85vh">
          <div className={jumboText}>
            <h1 className="text-white xx-large text-center">
              <span className="text-primary">PressPlay</span> & listen to the
              world!
            </h1>

            <div className={btnGroup}>
              <Link
                to="/register"
                style={{ marginRight: "20px" }}
                className="btn btn--primary"
              >
                Register
              </Link>
              <Link to="/login" className="btn btn--primary-outline">
                Login
              </Link>
            </div>
          </div>
        </Backdrop>
        <section
          className="container-fluid bg-dark"
          style={{
            paddingTop: "94vh",
          }}
        >
          <article className="p-5">
            <h3 className="text-center text-white x-large">
              Why <span className="text-primary"> PressPlay</span>?
            </h3>
          </article>

          <article className="bg-white p-5">
              <div className="img-holder text-center">
                <img src={micWithHeadset} alt="" className="img-fluid" />
              </div>
              <div className="d-flex flex-sm text-center">
                {cards.map(({title, body}, i) => <div key={title+i} className="p-3">
                  <h4 className="text-primary large">{title}</h4>
                  <p>{body}</p>
                </div>)}
              </div>
          </article>

          <article className="p-5">
            <h3 className="text-center text-white x-large">
              Find the most engaging podcast topics on<span className="text-primary"> PressPlay</span>
            </h3>
            <div className="img-holder text-center">
                <img src={laptopImg} className="img-fluid" alt="" />
              </div>
          </article>
        </section>
        {/* <section className={classes.Background}>
          <div className={classes.Text}>
            <h1>
              <span className={classes.Press}>Press play</span> and Listen to
              the World!
            </h1>
            <br />
            <div className={classes.Button}>
              <Button btnType="Home">Create Yours</Button>
              <Button btnType="Orange">Explore</Button>
            </div>
          </div>
        </section>
        <section className={classes.Why}>
          <h4>
            Why <span className={classes.Press}>Press play</span>
          </h4>
          <img alt="banner" src={Banner} />
          <div className={classes.Cards}>
            {cards.map((card, i) => {
              return <Card key={i} title={card.title} body={card.body} />;
            })}
          </div>
          <h4>
            Find the Most Engaging Content on{" "}
            <span className={classes.Press}>PressPlay</span>
          </h4>
          <img alt="Engage" src={Engage} />
          <img alt="Engage-bottom" src={Engage1} /> <br />
          <div className={classes.Icons}>
            {icons.map((icon, i) => {
              return <Icon key={i} className={icon.className} title={icon.title} />;
            })}
          </div>
          <h4>
            Watch how <span className={classes.Press}>PressPlay</span> works
          </h4>
          <img className={classes.aboutImage} src={Firefox} alt="learn" />
          <h4>
            Here's Why you'd love{" "}
            <span className={classes.Press}>PressPlay</span>
          </h4>
          {testimonials.map((testimonial, i) => {
            return (
              <Testimonial
                key={i}
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
                body={testimonial.body}
              />
            );
          })}
        </section> */}
      </Layout>
    );
  }
}

export default Home;
