<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="dtitle"> </title>

	<?php
		include_once "../global/global.php";
		headHTML();
	?>

	<link rel="stylesheet" href="./sass/calculator.css">
	<script defer src="./script/calculator.js"></script>
	<script src="./script/math.min.js"></script>

</head>

<body>
	<?php
	redirector();
	loader();
	headerHTML();
	?>

	<main>

		<section class="blockContainer titleContainer">
			<h3 class="title" data-text="dfirst"></h3>
		</section>

		<section class="blockContainer">

			<div id="calcContainer">
				<form>
					<article class="inputContainer">
						<input type="text" name="operationInput" autocomplete="off" autofocus placeholder="Example: (26+(234*2))/(5-3)" pattern="^[\d\+\-\*\/\(\)\.]{0,}$">
					</article>
					<article class="buttonsContainer">
						<button type="reset" data-text="btnreset"></button>
						<button type="submit" data-text="btnsolve"></button>
					</article>
					<article class="resultContainer">
						<div>
							<span data-text="dresult"></span><span id="resultInner"></span>
						</div>
					</article>

				</form>
				<div style="color: #555;" data-text="dnote">
					
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