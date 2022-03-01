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

  return [hexColorValue];
};
