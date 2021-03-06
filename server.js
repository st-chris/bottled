const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

// Seed products into db
// const seedProducts = require('./seeds/products.js');
// seedProducts();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/payment', require('./routes/api/payment'));
app.use('/api/orders', require('./routes/api/orders'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Get serviceWorker file
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
