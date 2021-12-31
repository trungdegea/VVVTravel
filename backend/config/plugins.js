const { google } = require("googleapis");

module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      service: "mailjet",
      host: env("SMTP_HOST", "smtpserver.sendinblue.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: env("SMTP_USERNAME", "account@sendinblue.com"),
        pass: env("SMTP_PASSWORD", "YourPassword"),
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env("ADMIN_EMAIL", "hello@example.com"),
      defaultReplyTo: env("ADMIN_EMAIL", "hello@example.com"),
    },
  },
});
