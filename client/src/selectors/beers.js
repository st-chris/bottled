import { createSelector } from 'reselect';

const selectBeers = state => state.beers;

export const selectBeerItems = createSelector(
  [selectBeers],
  beers => beers.products
);

export const selectBeersForPreview = createSelector(
  [selectBeerItems],
  beerItems =>
    beerItems ? Object.keys(beerItems).map(key => beerItems[key]) : []
);

export const selectCategoryBeer = categoryUrlParam =>
  createSelector(
    [selectBeerItems],
    beerItems => (beerItems ? beerItems[categoryUrlParam] : null)
  );

export const selectIsBeerLoaded = createSelector(
  [selectBeers],
  beers => beers.loading
);
