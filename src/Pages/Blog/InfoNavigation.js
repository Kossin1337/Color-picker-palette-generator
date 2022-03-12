import React from "react";
import { NavLink } from "react-router-dom";
import "./InfoNavigation.scss";

const articles = [
  {
    title: "What are color models?",
    url: "/blog/color-models",
  },
  {
    title: "RGB (Red, Green, Blue)",
    url: "/blog/rgb",
  },
  {
    title: "HEX (Hexadecimal)",
    url: "/blog/hex",
  },
  {
    title: "HSL (Hue, Saturation, Lightness)",
    url: "/blog/hsl",
  },
  {
    title: "CMYK (Cyan, Magenta, Yellow, Black)",
    url: "/blog/cmyk",
  },
];

export const InfoNavigation = () => {
  return (
    <div className="articles-sidebar">
      <h2 className="sidebar-title">Explore color models</h2>
      {articles.map(({ url, title }, index) => {
        return (
          <NavLink to={url} key={index}>
            <h3 className="article-title">{title}</h3>
          </NavLink>
        );
      })}
    </div>
  );
};
