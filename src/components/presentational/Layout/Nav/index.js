// Module imports
import { NavLink } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";

// Style imports
import "./Nav.css";
import logo from "../../../../assets/images/logo.png";

// Asset imports
import navLinks from "./navLinks.json";

class Nav extends Component {
  state = {
    navXtraClassName: "",
  };

  render = () => (
    <header id="header">
      <article className="container container--header">
        <div className="img-holder img-holder--header">
          <img src={logo} alt="Logo" className="image--navbar-brand" />
          <button
            className="btn btn--primary-outline btn--collapse"
            onClick={() =>
              this.setState((state) => ({
                navXtraClassName: state.navXtraClassName === "" ? "open" : "",
              }))
            }
          >
            Menu
          </button>
        </div>
        <nav className={`nav nav--collapse ${this.state.navXtraClassName}`}>
          <ul className="nav nav--header">
            {(this.props.isAuthed
              ? navLinks.filter(
                  ({ isAuthed }) => isAuthed || isAuthed === undefined
                )
              : navLinks.filter(
                  ({ isAuthed }) => !isAuthed || isAuthed === undefined
                )
            ).map((navItem, i) => (
              <li key={i} className="nav-item nav-item--header">
                <NavLink
                  exact
                  to={navItem.path}
                  className="nav-link nav-link--header"
                  activeClassName="active"
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </header>
  );
}

const mapStateToProps = ({ isAuthed }) => ({ isAuthed });

export default connect(mapStateToProps)(Nav);
