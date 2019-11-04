const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// import private keys
const keys = require('./config/keys');
// require mongoose models to load upon boot
require('./models/User');
// passport import
require('./services/passport');

// connecting MongoDB with mongoose
mongoose.connect(keys.mongoURI);

// creates an express() application
const app = express();

// use cookies to store user's identifying token in the browser
app.use(
	cookieSession({
		// maxAge: how long until the cookie expires
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		// keys: prevents direct modification of the current user's id
		keys: [keys.cookieKey]
	})
);
// tells passport to use cookieSession
app.use(passport.initialize());
app.use(passport.session());

// passport import
require('./routes/authRoutes')(app);

// dyanmic port binding: use PORT from .env or 5000
const PORT = process.env.PORT || 5000;
// server listens to incoming traffic on port 5000
app.listen(PORT);
