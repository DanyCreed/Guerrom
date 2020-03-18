<?php
    $destino= "dtoledop93@gmail.com";
    $nombre = $_POST["name"];
    $telefono = $_POST["phone"];
    $correo = $_POST["email"];
    $mensaje = $_POST["message"];
    $contenido = "Nombre: " . $nombre . "\nTeléfono: " . $telefono . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
    mail($destino,"Contacto", $contenido);
    header("Location:index.html");
?>