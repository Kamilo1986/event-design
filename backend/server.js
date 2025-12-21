import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a MySQL
const connectToDB = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    console.log("Conexión a MySQL establecida ✅");
    return db;
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
    throw error;
  }
};

const db = await connectToDB();
// Configuración de correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { nombre, email, telefono, tipoEvento, cantidad, descripcion } = req.body;

  try {
    // 1️⃣ Guardar en BD
    await db.execute(
      `INSERT INTO contactos 
       (nombre, email, telefono, tipo_evento, cantidad_personas, descripcion)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, email, telefono, tipoEvento, cantidad, descripcion]
    );

    // 2️⃣ RESPONDER INMEDIATO AL FRONTEND ✅
    res.json({
      success: true,
      message: "Solicitud recibida correctamente",
    });

    // 3️⃣ Enviar correo EN SEGUNDO PLANO
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
      `,
    }).catch(err => console.error("Error enviando correo:", err));

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud",
    });
  }
});

app.get("/", (req, res) => res.send("Backend funcionando ✅"));

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
