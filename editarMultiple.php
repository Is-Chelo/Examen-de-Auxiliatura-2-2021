<?php
  include('conexion.php');
  $data = json_decode(file_get_contents("php://input"));

  $titulos = $data->titulos;
  $autores = $data->autores;
  $editoriales = $data->editoriales;
  $anios = $data->anios;
  $id = $data->id;
  $cant = $data->cant;

  $respuesta;
  for ($i=0; $i <$cant ; $i++) { 
      $sql = "UPDATE `libro` SET `titulo` = '$titulos[$i]', `autor` = '$titulos[$i]' , `ideditorial` = '$editoriales[$i]' , `anio` = '$anios[$i]' WHERE id = $id[$i];";
      $respuesta = $con->query($sql);
  }
  echo $respuesta?"actualizado":"error";
  
?>

<!-- UPDATE `libro` SET `titulo` = 'In qui est aut minuswww' WHERE `libro`.`id` = 29; -->