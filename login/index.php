<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>XitusDev - Log in</title>
	<link rel="shortcut icon" href="/global/assets/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="./sass/login.css">


</head>
<?php
if (isset($_COOKIE["access"]) && $_COOKIE["access"] == "432289") {
?>
	<script>
		window.location.pathname = "/"
	</script>
<?php
}
?>

<body>

	<form>

		<span>Password:</span><input type="password" name="inputPass" autocomplete="off" required autofocus>

		<input type="submit" value="Send" id="buttonEnviar">

	</form>


	<script>
		formulario = document.forms[0];
		formulario.addEventListener("submit", function(e) {
			e.preventDefault();
			document.getElementById("buttonEnviar").disabled = true;

			const data = new FormData(formulario);

			fetch('/global/cookieEval.php', {
					method: 'POST',
					body: data
				})
				.then((e) => {
					window.location.reload();
				})
		})


		function w000() {
			try {
				let Y = document.querySelector("body a[href*='000webhost']").parentNode;
				document.body.removeChild(Y);
			} catch (e) {
				/* console.log(e); */
			}
		}
		w000();
	</script>
</body>

</html>