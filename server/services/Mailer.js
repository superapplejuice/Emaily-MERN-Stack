const sendgrid = require("sendgrid");
const { Mail, Email, Content } = sendgrid.mail;
const { sendGridKey } = require("../config/keys");

// the Mailer class is an extension of helper.Mail
// i.e. it has access to all functionality from helper.Mail
class Mailer extends Mail {
  constructor(header, content) {
    // executes the constructor on every instance of the Mailer class
    super();

    const { subject, recipients } = header;

    // required by SendGrid
    this.from_email = new Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
  }
}

module.exports = Mailer;
