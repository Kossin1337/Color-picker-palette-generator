import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export function Navigation({ favColors }) {
  function showFavorites() {
    console.log(favColors);
  }

  return (
    <nav className="navigation">
      <div className="navigation-content">
        <h1 className="navigation-logo">Color picker</h1>
        <ul className="navigation-menu">
          <li className="navigation-item">
            <NavLink to="/color-palette">Custom Palette</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/color-generator">Random color</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/color-customizer">Customize</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/info">Blog</NavLink>
          </li>
        </ul>
      </div>

      <NavLink to="/favorite">
        <button className="favorite-colors">
          {/* <p className="number-of-fav-colors">{favColors}</p> */}
          <i className="far fa-heart" onClick={showFavorites}></i>
        </button>
      </NavLink>
    </nav>
  );
}
