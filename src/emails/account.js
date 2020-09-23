const sgMail = require('@sendgrid/mail');
// process.env.SENDGRID_API_KEY;
sgMail.setApiKey(
  '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'
);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'leek4writ@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'leek4writ@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
