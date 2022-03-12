import React from "react";
import { Link } from "react-router-dom";

export const ArticleColorModels = () => {
  return (
    <div className="article">
      <h2 className="article-headline">What exacly is a Color Model?</h2>
      <div className="article-info">
        <Link to="/about" className="article-routing">
          Kossin | Read time: 1min
        </Link>
      </div>
      <p className="article.text">
        {`A color model is an abstract mathematical model describing the way
        colors can be represented as tuples of numbers, typically as three or
        four values or color components. When this model is associated with a
        precise description of how the components are to be interpreted (viewing
        conditions, etc.), the resulting set of colors is called "color space."
        This section describes ways in which human color vision can be modeled.`}
      </p>
    </div>
  );
};
