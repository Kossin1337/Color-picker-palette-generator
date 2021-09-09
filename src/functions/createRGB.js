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
