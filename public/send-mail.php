<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Solo POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// Leer JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit;
}

// Limpiar datos
$nombre = htmlspecialchars(trim($data["nombre"] ?? ""));
$email = htmlspecialchars(trim($data["email"] ?? ""));
$telefono = htmlspecialchars(trim($data["telefono"] ?? ""));
$tipoEvento = htmlspecialchars(trim($data["tipoEvento"] ?? ""));
$cantidad = htmlspecialchars(trim($data["cantidad"] ?? ""));
$descripcion = htmlspecialchars(trim($data["descripcion"] ?? ""));

// Validar obligatorios
if (!$nombre || !$email || !$telefono) {
    echo json_encode(["success" => false, "message" => "Campos incompletos"]);
    exit;
}

// Tu correo real del dominio
$to = "contacto@eventdesign.com.co";

$subject = "Nueva solicitud desde la web";

// Mensaje
$message = "
Nueva solicitud de contacto

Nombre: $nombre
Email: $email
Teléfono: $telefono
Tipo de evento: $tipoEvento
Cantidad de personas: $cantidad

Mensaje:
$descripcion
";

// Headers correctos
$headers = "From: contacto@eventdesign.com.co\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Correo enviado"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al enviar correo"]);
}
?>
