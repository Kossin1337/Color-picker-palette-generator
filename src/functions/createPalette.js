import { createHEX } from "./createHEX";

export const createPalette = (howMany = 5) => {
  const newPalette = [];
  for (let i = 0; i < howMany; i++) {
    newPalette.push(createHEX());
  }
  return newPalette;
};
