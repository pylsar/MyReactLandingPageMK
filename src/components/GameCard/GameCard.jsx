import React from "react";
import PropTypes from "prop-types";

import "./GameCard.scss";

const GameCard = ({ src, alt, text }) => {
  return (
    <div className="gameCard">
      <div className="gameCard__left">
        <img src={src} alt={alt} />
      </div>
      <div className="gameCard__right">
        <h3>Приставки:</h3>
        <ul>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>Dandy</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>Sega</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>Super Nintendo</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>Play Station</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>PC</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>X box</span>
          </li>
          <li>
            <img
              src="https://static.eldorado.ru/photos/71/715/143/80/new_71514380_l_1557324528.jpeg/resize/380x240/"
              alt=""
            />
            <span>Game Pad</span>
          </li>
        </ul>
        <div className="gameCard__hide">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default GameCard;
