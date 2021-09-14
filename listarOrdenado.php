<?php
include('conexion.php');

$opcion = $_GET['opcion'];


$sql = "SELECT * FROM libro ORDER BY $opcion";

$respuesta = $con->query($sql);
$div = "<table class='table table-dark' border='1'>
    <tr>
    <td>Numero</td>
    <td><a href='#' onclick='ordernar(`titulo`)'>TITULO </a></td>
    <td><a href='#' onclick='ordernar(`autor`)'>Autor </a></td>
    <td>Autor</td>
    <td>IdEditorial</td>
    <td>Anio</td>";
$i=0;
while($fila = $respuesta->fetch_object() ){
    $div = $div.'<tr>
        <td><input type="text" id="id'.$i.'" value="'.$fila->id.'"></td>
        <td><input type="text" id="titulo'.$i.'" value="'.$fila->titulo.'"></td>
        <td><input type="text" id="autor'.$i.'" value="'.$fila->autor.'"></td>
        <td><input type="text" id="ideditorial'.$i.'" value="'.$fila->ideditorial.'"></td>
        <td><input type="text" id="anio'.$i.'" value="'.$fila->anio.'"></td>
    </tr>';
    $i = $i +1;
}
$div = $div."</table><input type='hidden' id='cantEditar' value='".$i."'><button class='btn btn-warning' onclick='actualizar()'>Actualizar</button>";


echo $div;
echo $opcion;

?>