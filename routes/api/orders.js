const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Order = require('../../models/Order');
const User = require('../../models/User');

// @route: GET api/orders
// @desc: Get users orders
// @access: Private
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });

    if (!orders) {
      return res.status(400).json({ msg: "You haven't made any orders yet" });
    }
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/orders
// @desc     Create order
// @access   Private
router.post('/', auth, async (req, res) => {
  const { items, totalQuantity, totalPrice } = req.body;

  try {
    let order = new Order({
      user: req.user.id,
      items,
      totalPrice,
      totalQuantity
    });

    // Save order to db
    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
