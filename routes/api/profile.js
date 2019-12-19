const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route: GET api/profile
// @desc: Get users profile
// @access: Private
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      'name'
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('street_nr', 'Street is required')
        .not()
        .isEmpty(),
      check('postal_code', 'Postal code is required')
        .not()
        .isEmpty(),
      check('city', 'City is required')
        .not()
        .isEmpty(),
      check('country', 'Country is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date_of_birth, street_nr, postal_code, city, country } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (date_of_birth)
      profileFields.date_of_birth = new Date(date_of_birth).toISOString();

    profileFields.address = {};
    if (street_nr) profileFields.address.street_nr = street_nr;
    if (postal_code) profileFields.address.postal_code = postal_code;
    if (city) profileFields.address.city = city;
    if (country) profileFields.address.country = country;

    try {
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route: DELETE api/profile
// @desc: Delete profile & user
// @access: Private
router.delete('/', auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
