const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
			console.log('access token:', accessToken);
			// refreshToken: refreshes/updates the `accessToken` after it expires
			console.log('refresh token:', refreshToken);
			// the user's profile information
			console.log('profile:', profile);
		}
	)
);
