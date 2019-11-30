const { model } = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/template/surveyTemplate");

// reference the Survey model
const Survey = model("surveys");

module.exports = app => {
  // direct users here after clicking on a link in a survey
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // req.body contains the properties of the incoming request
    // easier to define the data to receive from FE in the BE first
    const { surveyTitle, subjectLine, emailBody, recipientList } = req.body;

    // creating a new instance of the Survey model
    const survey = new Survey({
      surveyTitle,
      subjectLine,
      emailBody,
      // creating/referencing the recipients subdocument collection
      // 01: take the list of email addresses
      // 02: split the emails into an array
      // 03: return an object for every email that contains the actual email
      recipientList: recipientList.split(",").map(email => ({ email })),
      // req.user refers to the currently logged in user
      // assign the current user's Id to _user
      _user: req.user.id,
      // assume the Survey is sent following the creation of the Survey itself
      dateSent: Date.now()
    });

    // use the Mailer class to send an email
    // creating a new instance of the Mailer class
    // pass the new survey instance into the class and surveyTemplate
    const mailer = new Mailer(survey, surveyTemplate(survey));

    // error catching in case any of these steps break
    try {
      // send the actual email
      await mailer.sendEmail();

      // save the survey to DB after the emails are successfully sent
      await survey.save();

      // -1 credits from user for creating a survey
      req.user.credits -= 1;

      // save and overwrite the current user's model with the updated one
      const User = await req.user.save();

      // respond to the request with the updated user
      res.send(User);
    } catch (err) {
      // send the actual error message
      res.status(422).send(err);
    }
  });
};
