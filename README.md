# bottled.

A simple webshop for Brewdog's beers (info from [Punk API](https://punkapi.com/)), with the ability to register as a user. Adding the beers to a cart/crate and paying through Stripe.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), see their website for more info.

## Getting started

This project uses concurrently to combine an express backend and react frontend server.
In the main folder you'll have to create a .env file with the following information:
MONGO_URI=**INSERT MONGODB INFO**
JWT_SECRET=**INSERT SECRET FOR JSONWEBTOKEN**
STRIPE_SECRET_KEY=**INSERT STRIPE SECRET KEY**

To seed the beers into your db, uncomment the seedproducts lines in server.js. After this, comment out these lines again to avoid this from happening everytime you start the server.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode, both front/backend.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Built with

Frontend:
"axios": "^0.19.0",
"moment": "^2.24.0",
"node-sass": "^4.12.0",
"react": "^16.9.0",
"react-dom": "^16.9.0",
"react-moment": "^0.9.2",
"react-redux": "^7.1.1",
"react-router-dom": "^5.0.1",
"react-scripts": "3.1.1",
"react-stripe-checkout": "^2.6.3",
"redux": "^4.0.4",
"redux-devtools-extension": "^2.13.8",
"redux-persist": "^6.0.0",
"redux-saga": "^1.1.1",
"reselect": "^4.0.0"

Backend:
"bcryptjs": "^2.4.3",
"config": "^3.2.2",
"dotenv": "^8.1.0",
"express": "^4.17.1",
"express-validator": "^6.2.0",
"jsonwebtoken": "^8.5.1",
"mongoose": "^5.6.13",
"stripe": "^7.9.1"
