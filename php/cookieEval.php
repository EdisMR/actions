<?php

$respuesta="";
$contrasenia="";

if(isset($_POST["inputPass"])){

	$contrasenia=$_POST["inputPass"];
	if($contrasenia=="432289"){
		setcookie("access","432289",0,"/");
	}
}

else{
	if( isset($_COOKIE["access"]) && $_COOKIE["access"]=="432289"){
		$respuesta=JSON_encode(array(true));
	}else{
		$respuesta=JSON_encode(array(false));
	}
	echo $respuesta;
}



?>