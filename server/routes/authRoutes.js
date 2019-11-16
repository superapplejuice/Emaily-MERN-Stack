const passport = require("passport");

module.exports = app => {
  // adding passport as the second argument to the route handler instead of an arrow function
  // sends user into the Google OAuth flow whenever the user enters this route
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // scope specifies what kind of information we want from the user
      scope: ["profile", "email"]
    })
  );

  // route handler for Google OAuth callback
  // uses the `code` returned from the authentication url to turn it into a profile
  // profile is sent back as `accessToken`
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    // redirect the user to the specified URL on auth
    (req, res) => res.redirect("/dashboard")
  );

  // send user into Facebook OAuth flow at this route
  app.get("/auth/facebook", passport.authenticate("facebook"));

  // route handler for Facebook OAuth callback
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    // redirect the user to the specified URL on auth
    (req, res) => res.redirect("/dashboard")
  );

  // logging out users
  app.get("/api/logout", (req, res) => {
    // logs out the current user
    // destroys the Id within the current user's cookie
    // user has no identifying token
    req.logout();
    // redirect user to landing page on logout
    res.redirect("/");
  });

  // gets access to the user who has completed OAuth flow and is logged in
  // adds user model instance to `req.user`
  // i.e. this returns the current user's id to this route
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
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
