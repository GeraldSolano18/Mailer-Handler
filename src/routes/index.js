import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/send-email", (req, res) => {
  const data = req.body;
  const smtpTransport = nodemailer.createTransport({
    service: "",
  });
  console.log(req.body);
  res.send("received");
});

export default router;
