import Xray from 'x-ray';
import continents from './continents/index.json';

const xRay = new Xray();
const federations = ['usa', 'canada'];

federations.forEach(federation => {
  let scope;
  xRay(`http://www.happycow.net/north_america/${federation}/`, '.continent', ['a@href'])
    .write(`happycow/federations/${federation}.json`);
});
