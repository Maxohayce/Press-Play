// Module imports
import PropTypes from "prop-types";

// Style imports
import "./testimonial.css";

/**
 * Testimonial component
 * @param {{avatar: string, name: string, title: string, testimony: string}} props
 * @return {object} - The UI DOM object
 * @example
 *
 * const testimony = {}
 * return <Testimonial testimony={testimony} />
 */
const Testimonial = ({ isOdd, testimony }) => (
  <div
    className={`my-5 text-center d-flex flex-sm ${
      isOdd && "flex-sm-row-reverse"
    } align-items-center testimonial`}
  >
    <div className="img-holder p-4 p-sm-0 position-sm-absolute">
      <img
        className="img-fluid img--testimonial"
        alt="Testimonial"
        src={testimony.avatar}
      />
    </div>
    <div
      className={`testimonial-body bg-white mt-n5 mt-sm-0 testimony-body just-height ${
        isOdd ? "mr-sm-5" : "ml-sm-5"
      }`}
      style={{ zIndex: 1 }}
    >
      <h6>{testimony.name}</h6>
      <h5>{testimony.title}</h5>
      <p className="mt-5 mb-5">{testimony.body}</p>
    </div>
  </div>
);

Testimonial.propTypes = {
  testimony: PropTypes.object,
};

Testimonial.defaultProps = {
  testimony: {},
};

// Testimonial export
export default Testimonial;
