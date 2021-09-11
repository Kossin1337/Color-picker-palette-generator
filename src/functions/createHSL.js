export const createHSL = () => {
  const randomHue = Math.floor(Math.random() * 360);
  const randomSaturation = Math.floor(Math.random() * 100);
  const randomLight = Math.floor(Math.random() * 100);
  return [`hsl(${randomHue}, ${randomSaturation}%, ${randomLight}%)`];
};
