<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>XitusDev - String based calculator </title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">
	<script defer src="../js/main.js"></script>

	<link rel="stylesheet" href="/css/calculator/calculator.css">
	<script defer src="/js/calculator.js"></script>

</head>

<body>
	<?php
	include_once "../php/main.php";
	redirector();
	loader();
	headerHTML();
	?>

	<main>

		<section class="blockContainer titleContainer">
			<h3 class="title">String Based Calculator</h3>
		</section>

		<section class="blockContainer">

			<div id="calcContainer">
				<form>
					<article class="inputContainer">
						<input type="text" name="operationInput" autocomplete="off" autofocus>
					</article>
					<article class="buttonsContainer">
						<button type="reset">Reset</button>
						<button type="submit">Solve</button>
					</article>
					<article class="resultContainer">
						<div>
							Result: <span id="resultInner">0</span>
						</div>
					</article>

				</form>

			</div>

		</section>

	</main>


	<?php
	footerHTML();
	settingsModal();
	?>
</body>

</html>