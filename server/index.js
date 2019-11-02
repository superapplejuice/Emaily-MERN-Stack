const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// creates an express() application
const app = express();

// tell passport to use GoogleStrategy as the authenticator and how to use it
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			// send the user to this route after the user has given permission
			callbackURL: '/auth/google/callback'
		},
		// profile is sent back as `accessToken`
		accessToken => {
			console.log(accessToken);
		}
	)
);

// adding passport as the second argument to the route handler instead of an arrow function
// sends user into the OAuth flow whenever the user enters this route
app.get(
	'/auth/google',
	passport.authenticate('google', {
		// scope specifies what kind of information we want from the user
		scope: ['profile', 'email']
	})
);

// route handler for OAuth callback
// uses the `code` returned from the authentication url to turn it into a profile
// profile is sent back as `accessToken` (console.log callback in `passport.use`)
app.get('/auth/google/callback', passport.authenticate('google'));

// dyanmic port binding: use PORT from .env or 5000
const PORT = process.env.PORT || 5000;
// server listens to incoming traffic on port 5000
app.listen(PORT);

/*
express server route handler explanation:

app.get('/', (req, res) => res.send({hi: 'there'}));
.get === watch for incoming requests using this method
'/' === watch for requests trying to access the uri/url
req === an object that represents the incoming request
res === an object that represents the outgoing response
res.send({hi: 'there'}) === JSON sent back as a response to whoever made the request
*/
