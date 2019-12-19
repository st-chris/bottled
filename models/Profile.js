const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date_of_birth: { type: Date },
  address: {
    street_nr: { type: String, required: true },
    postal_code: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
