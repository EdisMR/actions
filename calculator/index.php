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
						<input type="text" name="operationInput" autocomplete="off" autofocus placeholder="Example: (26+(234*2))/(5-3)" pattern="^[\d\+\-\*\/\(\)\.]{0,}$">
					</article>
					<article class="buttonsContainer">
						<button type="reset">Reset</button>
						<button type="submit">Solve</button>
					</article>
					<article class="resultContainer">
						<div>
							Result: <span id="resultInner"></span>
						</div>
					</article>

				</form>
				<div style="color: #555;">
							Note: You can solve Addition, subtraction, multiplication and division.
						</div>
			</div>

		</section>

	</main>


	<?php
	footerHTML();
	settingsModal();
	?>
</body>

</html>