const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");

// reference the Survey model
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    // req.body contains the properties of the incoming request
    // easier to define the data to receive from FE in the BE first
    const { title, subject, body, recipients } = req.body;

    // creating a new instance of the Survey model
    const survey = new Survey({
      title,
      subject,
      body,
      // creating/referencing the recipients subdocument collection
      // 01: take the list of email addresses
      // 02: split the emails into an array
      // 03: return an object for every email that contains the actual email
      recipients: recipients.split(",").map(email => ({ email })),
      // req.user refers to the currently logged in user
      // assign the current user's Id to _user
      _user: req.user.id,
      // assume the Survey is sent following the creation of the Survey itself
      dateSent: Date.now()
    });
  });
};
