import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de correo Hostinger
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

// Endpoint contacto
app.post("/api/contact", (req, res) => {
  const { nombre, email, telefono, tipoEvento, cantidad, descripcion } = req.body;

  // Responder al frontend de inmediato
  res.json({ success: true, message: "Solicitud recibida correctamente ✅" });

  // Enviar correo en segundo plano
  transporter.sendMail({
    from: `"Event Design" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: "Nueva solicitud de cotización",
    html: `
      <h2>Solicitud de Cotización</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Tipo de Evento:</strong> ${tipoEvento}</p>
      <p><strong>Cantidad de personas:</strong> ${cantidad}</p>
      <p><strong>Descripción:</strong> ${descripcion}</p>
    `
  })
  .then(() => console.log("Correo enviado ✅"))
  .catch(err => console.error("Error enviando correo:", err));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
