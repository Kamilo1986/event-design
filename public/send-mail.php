<?php
// Permitir solicitudes desde tu web
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Solo aceptar POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
echo json_encode(["success" => false, "message" => "Método no permitido"]);
exit;
}

// Leer datos JSON enviados desde React
$data = json_decode(file_get_contents("php://input"), true);

// Validar campos obligatorios
if (
empty($data["nombre"]) ||
empty($data["email"]) ||
empty($data["telefono"])
) {
echo json_encode(["success" => false, "message" => "Campos incompletos"]);
exit;
}

// 👉 IMPORTANTE: cambia por tu correo real de Hostinger
$to = "contacto@eventdesign.com.co";

// Asunto
$subject = "Nueva solicitud desde la web";

// Contenido del mensaje
$message = "
📩 Nueva solicitud de contacto

Nombre: {$data['nombre']}
Email: {$data['email']}
Teléfono: {$data['telefono']}
Tipo de evento: {$data['tipoEvento']}
Cantidad de personas: {$data['cantidad']}

Mensaje:
{$data['descripcion']}
";

// Cabeceras correctas para Hostinger
$headers = "From: Web Event Design <contacto@eventdesign.com.co>\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

// Enviar correo
if (mail($to, $subject, $message, $headers)) {
echo json_encode(["success" => true, "message" => "Correo enviado"]);
} else {
echo json_encode(["success" => false, "message" => "Error al enviar"]);
}
?>
