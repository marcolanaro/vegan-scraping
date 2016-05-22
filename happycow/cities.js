import Xray from 'x-ray';
import states from './states/index.json';
import fs from 'fs';
import { lastPath } from './helpers';

const xRay = new Xray();
const cities = [];

const scrap = (state, cityLink, city) => {
  xRay(cityLink, '.listings .business-listing', ['h3 a@href'])
    .paginate('.paging a.next@href')
    .write(`happycow/cities/${state}-${city}.json`);
}

let i = 0;
states.forEach(state => {
  const citiesLinks = require(`./states/${state}.json`);
  citiesLinks.forEach(cityLink => {
    i += 1;
    const city = lastPath(cityLink);
    cities.push(`${state}-${city}`);
    setTimeout(() => {scrap(state, cityLink, city)}, 50 * i);
  });
});

fs.writeFile('happycow/cities/index.json', JSON.stringify(cities, null, 4));
