// Asset imports
import logo from "../../../../assets/images/logo.png";
import footerLinks from "../../../../assets/data/footerLinks.json";
import socialLinks from "../../../../assets/data/socialLinks.json";
import { Link } from "react-router-dom";

/**
 * Footer component
 * @component
 * @return {object}
 *
 * @example
 * return <Footer />
 */
const Footer = () => (
  <footer className="bg-white">
    <div className="d-flex flex-sm">
      <div className="img-holder">
        <img src={logo} alt="logo" />
      </div>
      {footerLinks.map(({ name, links }, i) => (
        <div key={name}>
          <h4>{name}</h4>
          {links.map(({ name, to }, i) => (
            <Link key={name} to={to}>
              {name}
            </Link>
          ))}
        </div>
      ))}
    </div>
    <div className="bg-dark d-flex">
      <div className="container d-flex">
        <p>&copy; Press Play. All rights reserved.</p>

        <div className="d-flex">
          {socialLinks.map(({ name }) => (
            <p>{name}</p>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
