import React from "react";
import PropTypes from "prop-types";

import "./AboutCard.scss";

const AboutCard = ({ title, descr, img, alt }) => {
  return (
    <div>
      <div className="aboutCard">
        <img src={img} alt={alt} />
        <div className="aboutCard__content">
          <h2>{title}</h2>
          <p>{descr}</p>
        </div>
        <span className="aboutCard__line-one" />
        <span className="aboutCard__line-two" />
        <span className="aboutCard__line-three" />
        <span className="aboutCard__line-four" />
      </div> 
    </div>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default AboutCard;
