import Xray from 'x-ray';
import cities from './cities/index.json';
import fs from 'fs';
import { lastPath } from './helpers';

const xRay = new Xray();

const scrap = (restaurant, restaurantLink) => {
  xRay(restaurantLink, 'div@itemscope', {
    title: '.title h1@title',
    tags: ['.feature-row ul.tags li.label@title'],
    typeOfFood: 'div#typeOfFood',
    description: 'span[itemprop=description]',
    priceRange: 'span[itemprop=priceRange]',
    streetAddress: 'span[itemprop=streetAddress]',
    postalCode: 'span[itemprop=postalCode]',
    phone: 'span[itemprop=telephone] a@href',
    venueHours: '#venueHours p',
    listingFeatures: ['#listingFeatures ul li'],
    fb: '.add-list a.fb@href',
    gmaps: '.map-holder img@src'
  })
    .write(`happycow/restaurants/${restaurant}.json`);
}

let i = 0;
cities.forEach(city => {
  const restaurantsLinks = require(`./cities/${city}.json`);
  restaurantsLinks.forEach(restaurantLink => {
    i += 1;
    const restaurant = lastPath(restaurantLink);
    setTimeout(() => {console.log(restaurant);scrap(restaurant, restaurantLink)}, 1000 * i);
  });
});
