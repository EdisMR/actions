<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ingresar</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">

	<link rel="stylesheet" href="../css/login/login.css">


</head>
<?php
if( isset($_COOKIE["access"]) && $_COOKIE["access"]=="432289"){
	?>
		<script>window.location.pathname="/index.php"</script>
	<?php
}
?>
<body>
	<div class="loader">
	</div>

	<form>

		<span>Contraseña:</span><input type="password" name="inputPass" autocomplete="off" required autofocus>

		<input type="submit" value="Enviar" id="buttonEnviar">

	</form>


	<script>

		formulario = document.forms[0];
		formulario.addEventListener("submit", function(e) {
			e.preventDefault();
			document.getElementById("buttonEnviar").disabled=true;

			const data = new FormData(formulario);

			fetch('../php/cookieEval.php', {
				method: 'POST',
				body: data
			})
			.then((e) => {
				window.location.reload();
			})
		})
	</script>
</body>

</html>