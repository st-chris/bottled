import EBC_DATA from '../pages/beers/ebc.data';

const initialState = {
  ebc_categories: EBC_DATA
};

const ebc = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ebc;
