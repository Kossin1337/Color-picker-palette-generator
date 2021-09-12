import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ArticleRGB = () => {
  const [isActive, setIsActive] = useState("inactive");
  function openTrivia() {
    isActive === "inactive" ? setIsActive("active") : setIsActive("inactive");
  }

  return (
    <div className="article">
      <h2 className="article-headline">RGB (Red, Green, Blue)</h2>
      <div className="article-info">
        <Link to="/about" className="article-routing">
          Kossin | Read time: 2min
        </Link>
      </div>
      <p className="article-text">
        The name of the model comes from the initials of the three additive
        primary colors.
      </p>
      <p className="article-text">
        The basic principle of the RGB color model is additive color mixing.
        It’s the process of mixing together 3 primary colors (Red, Green, Blue),
        in different proportions (from 0 to 255) to produce a variety of colors.
      </p>
      <p className="article-text">
        Each of the three primary colors can be represented in 256 different
        shades with the corresponding value ranging from (0 to 255). That means
        you can form 16 777 216 different colors using 256 shadees of 3 shades
        of the primary colors.
      </p>
      <div className="trivia">
        <div className="trivia-bar" onClick={openTrivia}>
          <h4 className="trivia-heading">Trivia</h4>
          <i className="fas fa-chevron-down trivia-icon"></i>
        </div>
        <div className={`trivia-content  ${isActive}`}>
          <p className="trivia-text">
            Cones are a type of photoreceptor cell in the retina. They give us
            our color vision. Cones are concentrated in the center of our retina
            in an area called the macula and help us see fine details. The
            retina has approximately 120 million rods and 6 million cones There
            are three types of cone cells:
          </p>
          <ul className="trivia-list">
            <li className="trivia-list-item">Red-sensing cones (60 percent)</li>
            <li className="trivia-list-item">
              Green-sensing cones (30 percent)
            </li>
            <li className="trivia-list-item">
              Blue-sensing cones (10 percent)
            </li>
          </ul>
          <a
            href=" https://www.aao.org/eye-health/anatomy/cones"
            className="trivia-source"
            target="_blank"
          >
            See the Source
          </a>
        </div>
      </div>
      <p className="article-text">
        256 different shades of RGB primary color can be represented as a
        combination of two{" "}
        <Link to="/info/hex" className="article-routing">
          Hexadecimal
        </Link>{" "}
        numbers. (0 to 9 and A to F, A representing number 10, F number 15),
        that means that rgb(0, 255, 70) would be represented in{" "}
        <Link to="/info/hex" className="article-routing">
          Hexadecimal
        </Link>{" "}
        as #00FF46
      </p>
      <Link to="/color-customizer">
        <button className="generate-color">Experiment with RGB</button>
      </Link>
    </div>
  );
};
