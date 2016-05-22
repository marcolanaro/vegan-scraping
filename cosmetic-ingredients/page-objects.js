import Xray from 'x-ray';
const xRay = new Xray();

export const collection = '1abcdefghijklmnopqrstuvwxyz'.split('');

export const xRayDefinition = (letter) => (
  xRay(
    `http://www.paulaschoice.com/cosmetic-ingredient-dictionary/${letter}?count=100`,
    '.wl-ingredientlist table tbody tr',
    [{
      name: 'h2.name a',
      a: 'h2.name a@href',
      rate: '.col-rating',
      description: '.description',
      readMore: '.description a.read-more@href',
      categories: ['.categories a']
    }]
  )
  .paginate('.pagecount a@href')
  .limit(2)
);
