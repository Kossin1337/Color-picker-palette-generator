export const createRGB = () => {
  let rgbColorValue = "rgb(";
  for (let i = 0; i < 3; i++) {
    const randomRgbValue = Math.floor(Math.random() * 255);
    if (i !== 2) {
      rgbColorValue += `${randomRgbValue},`;
    } else {
      rgbColorValue += `${randomRgbValue})`;
    }
  }

  return rgbColorValue;
};

export const createHEX = () => {
  let hexColorValue = "";
  const hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  for (let i = 0; i < 6; i++) {
    hexColorValue += hexRef[Math.floor(Math.random() * 16)];
  }

  return `#${hexColorValue}`;
};

export const createHSL = () => {
  let hslColor = "";

  return hslColor;
};
