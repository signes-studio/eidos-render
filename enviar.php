<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Correo donde recibirás las solicitudes
    $destinatario = "info@eidosrender.es";
    $asunto = "Nuevo Presupuesto Eidos Render de: " . $_POST['empresa'];

    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $empresa = $_POST['empresa'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    // Cuerpo del mensaje
    $contenido = "Has recibido una nueva solicitud de presupuesto:\n\n";
    $contenido .= "Nombre: " . $nombre . "\n";
    $contenido .= "Empresa: " . $empresa . "\n";
    $contenido .= "Email: " . $email . "\n";
    $contenido .= "Teléfono: " . $telefono . "\n\n";
    $contenido .= "Detalles del proyecto:\n" . $mensaje . "\n";

    // Cabeceras del correo
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Gestión del archivo adjunto (si el usuario subió planos)
    if(isset($_FILES['archivo']) && $_FILES['archivo']['error'] == 0) {
        $archivo_tmp = $_FILES['archivo']['tmp_name'];
        $archivo_nombre = $_FILES['archivo']['name'];
        
        // Generar un límite simple para adjuntos básicos mediante PHP nativo
        // (Nota: para archivos muy pesados o gestión avanzada de adjuntos en PHP, se recomienda PHPMailer)
        $separador = md5(time());
        
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"".$separador."\"\r\n";
        
        $cuerpo_mensaje = "--".$separador."\r\n";
        $cuerpo_mensaje .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $cuerpo_mensaje .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $cuerpo_mensaje .= $contenido."\r\n";
        
        $contenido_archivo = chunk_split(base64_encode(file_get_contents($archivo_tmp)));
        
        $cuerpo_mensaje .= "--".$separador."\r\n";
        $cuerpo_mensaje .= "Content-Type: application/octet-stream; name=\"".$archivo_nombre."\"\r\n";
        $cuerpo_mensaje .= "Content-Transfer-Encoding: base64\r\n";
        $cuerpo_mensaje .= "Content-Disposition: attachment; filename=\"".$archivo_nombre."\"\r\n\r\n";
        $cuerpo_mensaje .= $contenido_archivo."\r\n";
        $cuerpo_mensaje .= "--".$separador."--";
        
        $envio = mail($destinatario, $asunto, $cuerpo_mensaje, $headers);
    } else {
        // Envío sin archivos adjuntos
        $envio = mail($destinatario, $asunto, $contenido, $headers);
    }

    if ($envio) {
        echo "<script>alert('Solicitud enviada correctamente. Te responderemos pronto.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar el formulario. Por favor, escríbenos directamente a info@eidosrender.es'); window.history.back();</script>";
    }
}
?>