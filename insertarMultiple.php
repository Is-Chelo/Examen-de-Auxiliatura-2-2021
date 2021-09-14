<?php
    include('conexion.php');
    $data = json_decode(file_get_contents("php://input"));

    $titulos = $data->titulos;
    $autores = $data->autores;
    $editoriales = $data->editoriales;
    $anios = $data->anios;
   
    $cant = $data->cant;
    $respuesta;
    for ($i=0; $i <$cant ; $i++) { 
        $sql = "INSERT INTO `libro` (`titulo`, `autor`, `ideditorial`, `anio`) VALUES ('$titulos[$i]', '$autores[$i]', '$editoriales[$i]', '$anios[$i]');";
        $respuesta = $con->query($sql);
    }
    echo $respuesta?"insertado":"error";
?>