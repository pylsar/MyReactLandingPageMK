import React from "react";
import PropTypes from "prop-types";

import "./SandwitchTitle.scss";

const SandwitchTitle = ({ title }) => {
  return <h2 className="sandwitch-title">{title}</h2>;
};

SandwitchTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SandwitchTitle;
