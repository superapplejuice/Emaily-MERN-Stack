const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// note: 2 arguments mean defining a new model class
// note: 1 argument means calling a specific model class
// here, we're calling a model class by defining only 1 argument: the name of the class we need
const User = mongoose.model("users");

// `user` is derived from the passport.use() callback (i.e. from existing/new user handling)
// `done` is called together with the `user` argument (from Google)
// `cb` is from Facebook
passport.serializeUser((user, done) => {
  // user.id references `_id` from MongoDB
  done(null, user.id);
  // console.log('from serializeUser():', user.id);
});

// `cb` is from facebook
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, done) => {
  // pass in the Id we want to find
  // changes a user.id back into a user
  User.findById(id).then(user => {
    done(null, user);
  });
  // console.log('from deserializeUser():', id);
});

// `cb` is from facebook
passport.deserializeUser((id, cb) => {
  cb(null, id);
});

// tell passport to use GoogleStrategy as the authenticator and how to use it
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // send the user to this route after the user has given permission
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    // this callback is executed after OAuth callback was made
    // profile is sent back as `accessToken`
    async (accessToken, refreshToken, profile, done) => {
      // accessToken: allows the app to read/write/delete on the user's behalf
      // refreshToken: refreshes/updates the `accessToken` after it expires
      // done(): function from GoogleStrategy that is called when the authentication is complete

      // mongoose queries are always asynchronous!!!
      const existingUser = await User.findOne({ googleId: profile.id });

      // check for user record in DB
      if (existingUser) {
        // this user already exists
        // 1st argument: tells passport if something went wrong
        // 2nd argument: the User record
        return done(null, existingUser);
      }

      // this creates a new User instance and saves it (using `.save()`)
      const newUser = await new User({ googleId: profile.id }).save();
      done(null, newUser);
    }
  )
);

// tell passport to use FacebookStrategy as the authenticator and how to use it
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppID,
      clientSecret: keys.facebookAppSecret,
      // send the user to this route after the user has given permission
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    // execute this callback after OAuth callback
    async (accessToken, refreshToken, profile, cb) => {
      const existingUser = await User.findOne({ facebookId: profile.id });

      // check for user record in DB
      if (existingUser) {
        // user already exists
        return cb(null, existingUser);
      }

      // user does not exist, create new User instance
      const newUser = await new User({ facebookId: profile.id }).save();
      cb(null, newUser);
    }
  )
);
