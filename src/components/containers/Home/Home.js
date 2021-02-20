import React from "react";
import Testimonial from "../../presentational/Testimonial/Testimonial";

import Layout from "../../presentational/Layout/index";
import Button from "../../presentational/Button/Button";
import Card from "../../presentational/Card/Card";
import Icon from "../../presentational/Fontawesome/Icon";

import podcasting from "../../../assets/images/podcasting.png";
import micWithHeadset from "../../../assets/images/mic-with-headset.png";
import laptopImg from "../../../assets/images/laptop-with-podcasts.png";

import classes from "./Home.module.css";
import "./Home.module.css";
import jumboImg from "../../../assets/images/singing-with-headset.png";

import Backdrop from "../../presentational/Layout/Backdrop";
import { Link } from "react-router-dom";
import genres from "../../../assets/data/genres";
import testimonials from "../../../assets/data/testimonials";
import Footer from "../../presentational/Layout/Footer/Footer";

import angle141 from "../../../assets/images/angle141.png"

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
            {/*             
        render() { 
            return (
                <Layout>
                    <section className={classes.Background}>
                        <div className={classes.Text}>
                            <h1><span className={classes.Press}>Press play</span> and Listen to the World!</h1><br/>
                            <div className={classes.Button}>
                                <Button btnType="Dark" >Create Yours</Button>
                                <Button btnType="Orange">Explore</Button>
                            </div>
                        </div>
                    </section>
                    <section className={classes.Why}>
                        <h4>Why <span className={classes.Press}>Press play</span></h4>
                        <img alt="banner" src={Banner} /> */}

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
              {cards.map(({ title, body }, i) => (
                <div key={title + i} className="p-3">
                  <h4 className="text-primary large">{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </article>
          {/* <h4>Find the Most Engaging Content on <span className={classes.Press}>PressPlay</span></h4>
                        <img alt="Engage" src={Engage} />
                        <img alt="Engage-bottom" src={Engage1} /> <br/>
                        <div className={classes.Icons}>
                            {icons.map((icon, i) => {
                                return < Icon key={i} class={icon.className} title={icon.title} />
                            })}
                        </div>
                        <h4>Watch how <span className={classes.Press}>PressPlay</span> works</h4>
                        <img className={classes.aboutImage} src={Firefox} alt="learn"/>
                        <h4>Here's Why you'd love <span className={classes.Press}>PressPlay</span></h4>
                        {testimonials.map((testimonial, i) => {
                            return <Testimonial key={i} image={testimonial.image} name={testimonial.name} title={testimonial.title} body={testimonial.body}/>
                        })}
                        <div className={classes.getStarted}>
                            <Button btnType="Orange" />
                        </div>
                    </section> */}

          <article className="p-5">
            <h3 className="text-center text-white x-large">
              Find the most engaging podcast topics on
              <span className="text-primary"> PressPlay</span>
            </h3>
            <div className="img-holder text-center">
              <img src={laptopImg} className="img-fluid" alt="" />
            </div>

            <div className="d-flex flex-sm justify-content-center text-center my-5">
              {genres.map(({ icon, name }, i) => (
                <div key={name} className="mx-3 mb-2">
                  <div className="img-holder">
                    <img
                      src={icon}
                      alt={`${name}-genre`}
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-white text-capitalize">{name}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3 className="text-center text-white x-large">
              Watch how
              <span className="text-primary"> PressPlay</span> works
            </h3>

            <div className="img-holder text-center">
              <img src={podcasting} alt="Podcasting" className="img-fluid" />
            </div>
          </article>

          <article className="p-4 container">
            <h3 className="text-center text-white x-large mb-4">
              Here's why you'd love
              <span className="text-primary"> PressPlay</span>
            </h3>

            {testimonials.map((testimony, i) => (
              <Testimonial key={i} isOdd={i % 2 === 1} testimony={testimony} />
            ))}
          </article>

          <article
            className="position-relative"
            style={{ minHeight: "400px" }}
          >
            <Backdrop backgroundImage={angle141} minHeight="400px">
              <div className="d-flex align-items-center">
                <p>
                  <Link to="/register" className="btn btn--primary">
                    Get Started
                  </Link>
                </p>
              </div>
            </Backdrop>
          </article>
          <Footer />
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

export default Home
