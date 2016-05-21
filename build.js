import { collection } from './page-objects';
import fs from 'fs';

const clean = (text) => {
  return text.replace(/\t/g, '').replace(/\r\n/g, '').trim();
};

const ingredientsCollection = collection.map((letter) => {
  const someIngredients = require(`./temp/${letter}.json`);

  return someIngredients.map((current) => ({
    name: clean(current.name),
    description: clean(current.description),
    categories: current.categories,
    rate: current.rate,
    a: current.a,
  }));
});

const ingredients = ingredientsCollection.reduce((prev, curr) => {
  return [ ...prev, ...curr ];
}, []);

fs.writeFile('./build/results.json', JSON.stringify(ingredients, null, 4));
