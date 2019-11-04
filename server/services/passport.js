const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// note: 2 arguments mean defining a new model class
// note: 1 argument means calling a specific model class
// here, we're calling a model class by defining only 1 argument: the name of the class we need
const User = mongoose.model('users');

// tell passport to use GoogleStrategy as the authenticator and how to use it
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			// send the user to this route after the user has given permission
			callbackURL: '/auth/google/callback'
		},
		// this callback is executed after OAuth callback was made
		// profile is sent back as `accessToken`
		(accessToken, refreshToken, profile, done) => {
			// accessToken: allows the app to read/write/delete on the user's behalf
			// refreshToken: refreshes/updates the `accessToken` after it expires
			// done(): function from GoogleStrategy that is called when the authentication is complete

			// mongoose queries are always asynchronous!!!
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// this user already exists
					// 1st argument: tells passport if something went wrong
					// 2nd argument: the User record
					done(null, existingUser);
				} else {
					// this creates a new User instance and saves it (using `.save()`)
					new User({ googleId: profile.id })
						.save()
						.then(newUser => done(null, newUser));
				}
			});
		}
	)
);
