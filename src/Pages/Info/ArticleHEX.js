import { Link } from "react-router-dom";

export const ArticleHEX = () => {
  return (
    <div className="article">
      <h2 className="article-headline">HEX (Hexadecimal)</h2>
      <p>
        Hex color codes are one type of HTML color code that you’ll often hear
        referred to as hexadecimal color or hex. You can look at hexadecimal
        numbers as a human-friendly representation of binary code. ex color
        codes start with a pound sign or hashtag (#) and are followed by six
        letters and/or numbers
      </p>
      <p>
        Understanding of RGB color model will help you understand HEX color
        model. If you understand the RGB color system, you should know what
        color is presented like this: RGB(255, 0 0)
      </p>
      <p>
        In Hexadecimal the first two letters/numbers refer to red, the next two
        refer to green, and the last two refer to blue (#RRGGBB). The color
        values are defined in values between 00 and FF (instead of from 0 to 255
        in RGB).
      </p>
    </div>
  );
};
