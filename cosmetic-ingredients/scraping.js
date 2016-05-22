import { collection, xRayDefinition } from './page-objects';

collection.forEach((letter) => {
  xRayDefinition(letter)
    .write(`cosmetic-ingredients/temp/${letter}.json`)
});
