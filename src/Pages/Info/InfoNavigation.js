import { NavLink } from "react-router-dom";

const articles = [
  {
    title: "What are color models?",
    url: "/info/color-models",
  },
  {
    title: "RGB (Red, Green, Blue)",
    url: "/info/rgb",
  },
  {
    title: "HEX (Hexadecimal)",
    url: "/info/hex",
  },
  {
    title: "HSL (Hue, Saturation, Lightness)",
    url: "/info/hsl",
  },
  {
    title: "CMYK (Cyan, Magenta, Yellow, Black)",
    url: "/info/cmyk",
  },
];

export const InfoNavigation = () => {
  return (
    <div className="articles-sidebar">
      <h2 className="sidebar-title">Explore color models</h2>
      {articles.map(({ url, title }) => {
        return (
          <NavLink to={url}>
            <h3 className="article-title">{title}</h3>
          </NavLink>
        );
      })}
    </div>
  );
};
