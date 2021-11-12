<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>XitusDev - Log in</title>
	<link rel="shortcut icon" href="/global/assets/me.ico" type="image/x-icon">

	<link rel="stylesheet" href="/global/css/compiled/global.css">
	<link rel="stylesheet" href="./sass/login.css">

	<script defer src="./script/login.js"></script>

</head>
<?php
if (isset($_COOKIE["access"]) && $_COOKIE["access"] == "432289") {
?>
	<script>
		window.location.pathname = "/"
	</script>
<?php
}


include_once "../global/global.php";

?>

<body>

<header></header>
<main>


	<form>

		<span>Password:</span><input type="password" name="inputPass" autocomplete="off" required autofocus>

		<input type="submit" value="Send" id="buttonEnviar">

	</form>
	</main>
	<?php
	footerHTML();
	?>

</body>

</html>