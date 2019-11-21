const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
// express does not automatically parse POST requests
// the bodyParser middleware parses POST requests as req.body
const bodyParser = require("body-parser");

// import private keys
const keys = require("./config/keys");
// require mongoose models to load upon boot
require("./models/User");
require("./models/Survey");
// passport import
require("./services/passport");

// connecting MongoDB with mongoose
mongoose.connect(keys.mongoURI, {
  // remove deprecation warnings
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// creates an express() application
const app = express();

// use the bodyParser middleware to automatically parse POST requests
app.use(bodyParser.json());
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

// passport routes import
require("./routes/authRoutes")(app);
// billing routes import
require("./routes/billingRoutes")(app);
// survey routes import
require("./routes/surveyRoutes")(app);

// send routes to index.html if route does not exist in server/build
// run only in production
if (process.env.NODE_ENV === "production") {
  const path = require("path");

  // serve production assets e.g. main.js if route exists
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // serve index.html if route is not recognized
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// dyanmic port binding: use PORT from .env or 5000
const PORT = process.env.PORT || 5000;
// server listens to incoming traffic on port 5000
app.listen(PORT);
