const initialState = {
  categories: [
    {
      title: 'gold',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Two-pints-beer-main.jpg/800px-Two-pints-beer-main.jpg',
      id: 1,
      linkUrl: 'beers/gold'
    },
    {
      title: 'amber',
      imageUrl:
        'http://c1.peakpx.com/wallpaper/693/164/906/beer-brew-booze-alcohol-wallpaper-preview.jpg',
      id: 2,
      linkUrl: 'beers/amber'
    },
    {
      title: 'dark lager',
      imageUrl:
        'https://live.staticflickr.com/8021/6967199248_454f1ed48a_b.jpg',
      id: 3,
      linkUrl: 'beers/dark-brown'
    },
    {
      title: 'copper',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/09/13/01/10/beer-1666213_960_720.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'beers/copper'
    },
    {
      title: 'stout',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/09/15/00/17/beer-1670872_960_720.jpg',
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
