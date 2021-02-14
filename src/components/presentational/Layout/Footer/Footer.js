// Asset imports
import logo from "../../../../assets/images/logo.png";
import footerLinks from "../../../../assets/data/footerLinks.json";
import socialLinks from "../../../../assets/data/socialLinks";
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
  <footer className="bg-white mt-5">
    <div className="container d-flex flex-md p-3 flex-wrap">
      <div className="img-holder my-3 text-center w-sm-100 column-lg-4 text-lg-left">
        <img src={logo} alt="logo" />
      </div>
      {footerLinks.map(({ name, links }, i) => (
        <div key={name} className="my-2 column-md-3 column-lg-4">
          <h4 className="text-capitalize">{name}</h4>
          <ul className="ul--custom">
            {links.map(({ name, to }, i) => (
              <li key={name} className="text-capitalize mb-1">
                <Link to={to}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="bg-dark">
      <div className="container d-flex flex-sm text-white justify-content-between py-3 text-center text-sm-left">
        <p>&copy; Press Play. All rights reserved.</p>

        <div className="d-flex justify-content-center mt-3 mt-sm-0">
          {socialLinks.map(({ name, Icon }) => (
            <p key={name} className="text-white m-3">
              <Icon />
            </p>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
