const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  routeName: String,
  items: [
    {
      name: String,
      tagline: String,
      description: String,
      image_url: String,
      abv: Number,
      ibu: Number,
      ebc: Number,
      price: Number,
      food_pairing: [
        {
          type: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model('product', ProductSchema);
