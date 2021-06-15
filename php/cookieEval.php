<?php
$contrasenia="";

$contrasenia=$_POST["inputPass"];
if($contrasenia=="432289"){
	setcookie("access","432289",0,"/");
}
?>