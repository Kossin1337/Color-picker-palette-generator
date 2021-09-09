export const createRGB = () => {
  let rgbColorValue = "rgb(";
  const rgbArray = [];
  for (let i = 0; i < 3; i++) {
    const randomRgbValue = Math.floor(Math.random() * 255);
    rgbArray.push(randomRgbValue);
    if (i !== 2) {
      rgbColorValue += `${randomRgbValue},`;
    } else {
      rgbColorValue += `${randomRgbValue})`;
    }
  }

  return [rgbColorValue, rgbArray];
};

export const createHEX = () => {
  let hexColorValue = "#";
  const hexArray = [];
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
    let randomHexValue = hexRef[Math.floor(Math.random() * 16)];
    hexColorValue += randomHexValue;
    hexArray.push(randomHexValue);
  }

  return [hexColorValue, hexArray];
};

export const createHSL = () => {
  let hslColor = "";
  console.log(hslColor);

  return hslColor;
};
