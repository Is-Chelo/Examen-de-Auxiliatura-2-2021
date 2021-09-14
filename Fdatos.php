<?php
include('conexion.php');


$sql = "SELECT * FROM editorial";
$respuesta = $con->query($sql);
$editoriales = '';
while($fila = $respuesta->fetch_object()){
    $editoriales = $editoriales.'<option value="'.$fila->id.'">'.$fila->editorial.'</option>';
}
$cantidad = $_GET['cantidad'];
$div = '';


for ($i=0; $i < $cantidad; $i++) {
    
    $div= $div.'<input type="text" id="titulo'.$i.'" class="form-control titulo" placeholder="Titulo del Libro">
    <input type="text" id="autor'.$i.'" class="form-control autor" placeholder="Autor">
    <select name="" id="editorial'.$i.'" class="form-control editorial" placeholder="Editorial">'.$editoriales.'</select>
    <input type="number" id="anio'.$i.'" class="form-control anio" placeholder="Intro Año"><br>
    ';
}

$div = $div.'<input type="hidden" value="'.$cantidad.'" id="cantidad"> <button  class="btn btn-primary d-block"   id="btnIntroducit" onclick="introducirDatos()">Guardar</button>';
echo $div;
?>