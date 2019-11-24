const sendgrid = require("sendgrid");
const {
  Mail,
  Email,
  Content,
  TrackingSettings,
  ClickTracking,
  Personalization
} = sendgrid.mail;
const { sendGridKey } = require("../config/keys");

// the Mailer class is an extension of helper.Mail
// i.e. it has access to all functionality from helper.Mail
class Mailer extends Mail {
  constructor(header, content) {
    // executes the constructor on every instance of the Mailer class
    super();

    const { subject, recipients } = header;

    // include SendGrid API key
    this.sendGridApi = sendgrid(sendGridKey);

    // getting required info to send the email
    this.from_email = new Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    // execute methods
    // addContent() is from SendGrid
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  // returns formatted email addresses in the recipeints array
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new Email(email);
    });
  }

  // takes the formatted list of recipients from formatAddresses()
  // register it with the actual email
  // required by SendGrid
  addRecipients() {
    // define personalize object
    const personalize = new Personalization();

    // iterate over every recipient in this.recipeints
    // add every recipeints to the personalize object
    this.recipients.forEach(recipient => personalize.addTo(recipient));

    // add the personalize object to Personalization
    this.addPersonalization(personalize);
  }

  // track the users who clicked the links in the email
  // required by SendGrid for click tracking to work
  addClickTracking() {
    const trackingSettings = new TrackingSettings();
    const clickTracking = new ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);

    this.addTrackingSettings(trackingSettings);
  }

  // send the actual email to SendGrid
  async sendEmail() {
    const request = this.sendGridApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      // converts all the email properties to JSON
      body: this.toJSON()
    });

    // send the email to SendGrid
    const response = this.sendGridApi.API(request);

    return response;
  }
}

module.exports = Mailer;
