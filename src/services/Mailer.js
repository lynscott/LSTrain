const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('..config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, email }, content) {
    super();

    this.from_email = new helper.Email('no-reply@LsFitness.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = new helper.Email(email);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEch(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
}

module.exports = Mailer;
