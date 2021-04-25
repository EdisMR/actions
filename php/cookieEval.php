<?php
	$respuesta="";
	$contrasenia="";


	if(isset($_POST["inputPass"])){
		$contrasenia=$_POST["inputPass"];
		
		?>
		<!DOCTYPE html>
			<html lang="es">
			<head>
				<meta charset="UTF-8">
			</head>
			<body>
		
		<?php
		if($contrasenia=="432289"){
			setcookie("access","432289",0,"/");
			?>
				<script>window.location.pathname="/"</script>
				<?php
				}else{
					?>
					<script>window.location.pathname="/html/login.html"</script>
					<?php
				}?>

			</body>
			</html>


	<?php	
	}else{
		if( isset($_COOKIE["access"]) && $_COOKIE["access"]=="432289"){
			$respuesta="true";
		}else{
			$respuesta="false";
		}
		echo $respuesta;
	}
?>