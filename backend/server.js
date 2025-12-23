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

// Configuración SMTP Hostinger SSL (puerto 465)
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "contacto@eventdesigner.com.co",
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint contacto
app.post("/api/contact", (req, res) => {
  const { nombre, email, telefono, tipoEvento, cantidad, descripcion } = req.body;

  // RESPONDE AL FRONTEND INMEDIATAMENTE
  res.json({ success: true, message: "Solicitud recibida. Gracias!" });

  // Envía el correo en segundo plano
  transporter.sendMail({
    from: `"Event Design" <contacto@eventdesigner.com.co>`,
    to: "contacto@eventdesigner.com.co",
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
    `,
  }).then(() => console.log("Correo enviado ✅"))
    .catch(err => console.error("Error enviando correo:", err));
});

// Endpoint de prueba rápida
app.get("/test-email", (req, res) => {
  transporter.sendMail({
    from: `"Event Design" <contacto@eventdesigner.com.co>`,
    to: "contacto@eventdesigner.com.co",
    subject: "Prueba SMTP Hostinger",
    html: "<h1>Esto es una prueba ✅</h1>",
  }).then(() => res.send("Correo enviado correctamente ✅"))
    .catch(err => {
      console.error("Error SMTP:", err);
      res.status(500).send("Error enviando correo ❌");
    });
});

app.get("/", (req, res) => res.send("Backend funcionando ✅"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
