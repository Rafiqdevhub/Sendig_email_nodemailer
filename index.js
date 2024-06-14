const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "710cd847736a43",
    pass: "9d593e9169caa0",
  },
});

function sendEmail() {
  const mailOptions = {
    from: {
      name: "Muhammad Rafiq",
      address: "rafkhan9323@gmail.com",
    },
    to: "user@domain.com",
    subject: "Email test",
    text: "Email sent with Node.js using Nodemailer!",
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(`Error: ${err}`);
    }

    return console.log(
      `Email sent successfully. Info: ${JSON.stringify(info)}`
    );
  });
}

sendEmail();
