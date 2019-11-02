const passport = require('passport');

module.exports = app => {
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
};

/*
express server route handler explanation:

app.get('/', (req, res) => res.send({hi: 'there'}));
.get === watch for incoming requests using this method
'/' === watch for requests trying to access the uri/url
req === an object that represents the incoming request
res === an object that represents the outgoing response
res.send({hi: 'there'}) === JSON sent back as a response to whoever made the request
*/
