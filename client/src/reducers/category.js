const initialState = {
  categories: [
    {
      title: 'gold',
      imageUrl: '/gold.jpg',
      id: 1,
      linkUrl: 'beers/gold'
    },
    {
      title: 'amber',
      imageUrl: '/amber.jpg',
      id: 2,
      linkUrl: 'beers/amber'
    },
    {
      title: 'dark lager',
      imageUrl: '/dark-lager.jpg',
      id: 3,
      linkUrl: 'beers/dark-brown'
    },
    {
      title: 'copper',
      imageUrl: '/copper.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'beers/copper'
    },
    {
      title: 'stout',
      imageUrl: '/stout.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'beers/black'
    }
  ]
};

const category = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default category;
