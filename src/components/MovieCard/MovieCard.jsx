import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.scss";

const MovieCard = ({ year, budget, cash, src, alt }) => {
  return (
    <div className="movieCard">
      <div className="movieCard__bg">
        <img src={src} alt={alt} />
      </div>
      <div className="movieCard__hide">
        <h3>Краткие данные</h3>
        <p>
          Дата Выхода: <time>{year}</time>
        </p>
        <p>Бюджет: {budget}</p>
        <p>Сборы: {cash}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  year: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  cash: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default MovieCard;
