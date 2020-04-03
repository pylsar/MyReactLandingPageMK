import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">Описание</a>
          </li>
          <li>
            <a href="#">В Играх</a>
          </li>
          <li>
            <a href="#">В Кино</a>
          </li>
          <li>
            <a href="#">Футер</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
