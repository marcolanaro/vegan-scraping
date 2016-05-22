import Xray from 'x-ray';
import continents from './continents/index.json';
import fs from 'fs';
import { lastPath } from './helpers';

const xRay = new Xray();
const states = [];
const federations = ['usa', 'canada'];

continents.forEach(continent => {
  const statesLinks = require(`./continents/${continent}.json`);
  statesLinks.forEach(stateLink => {
    const state = lastPath(stateLink);
    if (federations.indexOf(state) === -1) {
      states.push(state);
      xRay(stateLink, '.continent', ['a@href'])
        .write(`happycow/states/${state}.json`);
    }
  });
});

federations.forEach(federation => {
  const statesLinks = require(`./federations/${federation}.json`);
  statesLinks.forEach(stateLink => {
    const state = lastPath(stateLink);
    states.push(state);
    xRay(stateLink, '.continent', ['a@href'])
      .write(`happycow/states/${state}.json`);
  });
});

fs.writeFile('happycow/states/index.json', JSON.stringify(states, null, 4));
