import { createHEX } from "./createHEX";

/* function for creating a random Palette */
export const createPalette = (howMany = 5) => {
  const newPalette = [];
  for (let i = 0; i < howMany; i++) {
    newPalette.push(createHEX());
  }
  return newPalette;
};
