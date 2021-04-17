<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Evaluador de Cookie</title>
	<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	
<script>
	<?php 
		$variable=$_POST["inputPass"]; 
		$resultado;
		if($variable=="432289"){
			$resultado=true;
		}else{
			$resultado=false;
		}
	
	
	?>
	var valor=<?php echo " '$resultado' "; ?>;
	if(valor){
		document.cookie = "access=432289;path=/";
		window.location.pathname="/index.html";
	}else{
		window.location.pathname="/html/login.html";
	}
</script>

</body>
</html>