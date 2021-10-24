import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const userMail = "geraldmacias.gm@gmail.com";

router.post("/send-email", (req, res) => {
  const data = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: userMail,
      pass: "amopatinar2019",
    },
  });

  const mailOptions = {
    from: data.email,
    to: userMail,
    subject: `Message from ${data.name}`,
    html: `
    <h3>INFORMATION</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Last Name: ${data.lastName}</li>
    <li>Email: ${data.email}</li>
    <li></li>

    </ul>
    `,
  };
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if (err) res.send(err);

    res.send("send");
    res.send("received");
  });

  smtpTransport.close();
});

export default router;
