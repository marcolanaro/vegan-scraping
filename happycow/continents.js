import Xray from 'x-ray';
import continents from './continents/index.json';

const xRay = new Xray();

continents.forEach(continent => {
  let scope;
  if (continent === 'africa') {
    scope = '.continent';
  } else {
    scope = '.full-tables';
  }
  xRay(`http://www.happycow.net/${continent}/`, scope, ['a@href'])
    .write(`happycow/continents/${continent}.json`);
});
