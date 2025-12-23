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

// Configuración SMTP Hostinger (SSL, puerto 465)
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: "contacto@eventdesigner.com.co", // correo remitente
    pass: process.env.EMAIL_PASS,          // contraseña del correo
  },
});

// Endpoint para contacto
app.post("/api/contact", async (req, res) => {
  const { nombre, email, telefono, tipoEvento, cantidad, descripcion } = req.body;

  try {
    // Envía el correo
    await transporter.sendMail({
      from: `"Event Design" <contacto@eventdesigner.com.co>`, // remitente
      to: "contacto@eventdesigner.com.co",                   // destinatario
      replyTo: email,                                        // quien responde
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
    });

    res.json({ success: true, message: "Correo enviado correctamente ✅" });

  } catch (err) {
    console.error("Error enviando correo:", err);
    res.status(500).json({ success: false, message: "Error enviando correo ❌" });
  }
});

// Endpoint de prueba rápida
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Event Design" <contacto@eventdesigner.com.co>`,
      to: "contacto@eventdesigner.com.co",
      subject: "Prueba SMTP SSL Hostinger",
      html: "<h1>Esto es una prueba ✅</h1>",
    });
    res.send("Correo enviado correctamente ✅");
  } catch (err) {
    console.error("Error SMTP:", err);
    res.status(500).send("Error enviando correo ❌");
  }
});

// Endpoint raíz
app.get("/", (req, res) => res.send("Backend funcionando ✅"));

// Iniciar servidor
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
