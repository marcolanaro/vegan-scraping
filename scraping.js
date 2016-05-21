import { collection, xRayDefinition } from './page-objects';

collection.forEach((letter) => {
  xRayDefinition(letter)
    .write(`temp/${letter}.json`)
});
