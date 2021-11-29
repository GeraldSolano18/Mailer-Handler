import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const userMail = "geraldmacias.gm@gmail.com";

router.post("/send-email", async (req, res) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    host: "Gmail",
    service: "Gmail",
    port: 465,
    auth: {
      user: "geraldmacias.gm@gmail.com",
      pass: "amopatinar2021",
    },
  });

  const mailOptions = {
    from: data.email,
    to: userMail,
    subject: `Message from ${data.name}`,
    text: "HOla este es el proyecto de SI ",
    html: `
    <h3>INFORMACION GENERAL</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Last Name: ${data.lastName}</li>
    <li>Email: ${data.email}</li>
    </ul>
    `,
  };

  smtpTransport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("El mensaje ha sido enviado correctamente a la cuenta de gmail: " + info.response);
      res.status(200)
    }
  });
  smtpTransport.close();
});

export default router;
