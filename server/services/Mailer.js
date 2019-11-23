const sendgrid = require("sendgrid");
const { Mail, Email, Content, TrackingSettings, ClickTracking } = sendgrid.mail;
const { sendGridKey } = require("../config/keys");

// the Mailer class is an extension of helper.Mail
// i.e. it has access to all functionality from helper.Mail
class Mailer extends Mail {
  constructor(header, content) {
    // executes the constructor on every instance of the Mailer class
    super();

    const { subject, recipients } = header;

    // getting required info to send the email
    this.from_email = new Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    // execute methods
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  // return the email addresses in the recipeints array
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new Email(email);
    });
  }

  // track the users who clicked the links in the email
  // required by SendGrid for click tracking to work
  addClickTracking() {
    const trackingSettings = new TrackingSettings();
    const clickTracking = new ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);

    this.addTrackingSettings(trackingSettings);
  }
}

module.exports = Mailer;
