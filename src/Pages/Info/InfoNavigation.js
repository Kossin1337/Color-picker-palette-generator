import { NavLink } from "react-router-dom";

export const InfoNavigation = () => {
  return (
    <div className="articles-sidebar">
      <h2 className="sidebar-title">Explore color models</h2>
      <NavLink to="/info/rgb">
        <h3 className="article-title">RGB (Red, Green, Blue)</h3>
      </NavLink>
      <NavLink to="/info/hex">
        <h3 className="article-title">HEX (Hexadecimal)</h3>
      </NavLink>
      <NavLink to="/info/hsl">
        <h3 className="article-title">HSL (Hue, Saturation, Lightness)</h3>
      </NavLink>
    </div>
  );
};