const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

const App = express();

App.use(express.static(path.join(__dirname, "../public")));
// App.use(express.static('public'))
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

// ejecutar el bobyParser para poder enviar en formato json desde un Formulario en en sitio web asi aqui
App.use(bodyParser.urlencoded({ extended: true }));

App.use(cors());

const versionOne = (routeName) => `/api/v1/${routeName}`;

App.get("/", async (req, res, next) => {
  console.log("Email main");
  res.json("Thesis Project Portal de Ofertas de Trabajo - Envio Correos");
});

App.get(versionOne("subscribirse"), async (req, res, next) => {
  console.log("Email subscribirse");
  const gmailDestinatario = req.query.email;
  const subject = req.query.subject;
  const text = req.query.text;

  try {
    const fromGmail = process.env.FROM_GMAIL;
    const password = process.env.PASSWORD_GMAIL;
    console.log("Email subscribirse");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromGmail,
        pass: password,
      },
    });

    let mailOptions = {
      from: process.env.FROM_GMAIL,
      to: gmailDestinatario,
      subject: subject,
      text: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.json((mailOptions = mailOptions));
  } catch (error) {
    console.log("catch error: " + error);
  }
});

module.exports = App;
