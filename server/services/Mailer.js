const sendgrid = require("sendgrid");
const { Mail } = sendgrid.mail;
const { sendGridKey } = require("../config/keys");

// the Mailer class is an extension of helper.Mail
// i.e. it has access to all functionality from helper.Mail
class Mailer extends Mail {
  constructor() {}
}

module.exports = Mailer;
