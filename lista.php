<?php
include('conexion.php');

$sql = "SELECT * FROM libro";
$respuesta = $con->query($sql);
$div = "<table class='table table-dark' border='1'>
    <tr>
    <td>Numero</td>
    <td>TITULO</td>
    <td>Autor</td>
    <td>IdEditorial</td>
    <td>Anio</td>
    </tr>";
while($fila = $respuesta->fetch_object() ){
    $div = $div.'<tr>
        <td>'.$fila->id.'</td>
        <td>'.$fila->titulo.'</td>
        <td>'.$fila->autor.'</td>
        <td>'.$fila->ideditorial.'</td>
        <td>'.$fila->anio.'</td>
    </tr>';
}
$div = $div."</table>";
echo $div;
?>