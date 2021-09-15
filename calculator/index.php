<!DOCTYPE html>
<html lang="en">

<head>
	<title>XitusDev - String based calculator </title>

	<?php
		include_once "../global/global.php";
		headHTML();
	?>

	<link rel="stylesheet" href="./sass/calculator.css">
	<script defer src="./script/calculator.js"></script>

</head>

<body>
	<?php
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