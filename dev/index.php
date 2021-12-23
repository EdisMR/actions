
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Edis MR - Development page</title>
	<?php
		include_once "../global/global.php";
		headHTML();
	?>
	<link rel="stylesheet" href="sass/dev.css">
	<script defer src="script/navigator.js"></script>

</head>
<body>
	<?php
		loader();
		headerHTML();
	?>


	<main>

	<div class="block">
		<div id="userInfo">
		</div>
	</div>

	</main>



<?php
	footerHTML();
	settingsModal();
?>
</body>
</html>