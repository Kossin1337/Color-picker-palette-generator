import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.scss";

export function Navigation({ favColors }) {
  const [menuActive, setMenuActive] = useState(false);

  function showFavorites() {
    console.log(favColors);
  }

  return (
    <nav className="navigation">
      <div className="navigation-content">
        <div className="content-wrapper">
          <Link to="/">
            <h1 className="navigation-logo">Color picker</h1>
          </Link>
          <i
            className="fas fa-bars mobile-menu"
            onClick={() => setMenuActive((prevMenuState) => !prevMenuState)}
          ></i>
        </div>
        <ul className={`navigation-menu ${menuActive}`}>
          <li className="navigation-item" onClick={() => setMenuActive(false)}>
            <NavLink exact to="/">
              Custom Palette
            </NavLink>
          </li>
          <li className="navigation-item" onClick={() => setMenuActive(false)}>
            <NavLink to="/color-generator">Random color</NavLink>
          </li>
          <li className="navigation-item" onClick={() => setMenuActive(false)}>
            <NavLink to="/color-customizer">Customize</NavLink>
          </li>
          <li className="navigation-item" onClick={() => setMenuActive(false)}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <NavLink to="/favorite" onClick={() => setMenuActive(false)}>
            <button className="favorite-colors">
              <i className="far fa-heart" onClick={showFavorites}></i>
            </button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
