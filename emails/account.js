const sgMail = require('@sendgrid/mail');
// process.env.SENDGRID_API_KEY;
sgMail.setApiKey(
  'SG.DONTSTEALTHIS'
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
