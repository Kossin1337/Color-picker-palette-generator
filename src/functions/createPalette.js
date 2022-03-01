export const createPalette = (howMany) => {
  const newPalette = [];
  // HUE: 0 to 360. 0 is red, 120 is green, 240 is blue
  // SATURATION: 0% means a shade of gray and 100% is the full color
  // LIGHTNESS: 0% is black, 100% is white

  /* Range from 30 to 330 */
  const randomHue = Math.floor(Math.random() * 11 + 1) * 30;
  /* Range from 10 to 90 */
  const randomSaturation = Math.floor(Math.random() * 8 + 2) * 10;
  /* Range from 30 to 80 */
  const randomLight = Math.floor(Math.random() * 6 + 2) * 10;

  // console.log(`hsl(${randomHue}, ${randomSaturation}%, ${randomLight}%)`);

  /* 5 values -> -10 -5 0 5 10 ___ 20 / 5 */
  /* 6 values -> -12 -8 -4 0 5 8 12 ___ 24/6 = 4 */
  /* 7 values -> -14 -10 -6 -2 2 6 10 14 ___ 28/7 = 4 */
  const incrementValue = howMany * 2;
  const incrementBy = (incrementValue * 2) / howMany;

  for (let i = -incrementValue; i < incrementValue; i += incrementBy) {
    newPalette.push(
      `hsl(${randomHue + i}, ${randomSaturation + i}%, ${randomLight + i}%)`
    );
  }

  return newPalette;
};
