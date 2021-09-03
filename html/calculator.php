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
				<article class="resultsContainer">
					<input type="text" name="operationInput" autocomplete="off" autofocus>
					<button type="submit"><span>=</span></button>
				</article>
				<article class="showResult"><div>Result: <span id="resultInner">0</span></div></article>
				<article class="buttonsContainer">
					<div class="gridCalc">
						<div class="twoCol" id="controlAC">AC</div>
						<div id="controlParenthesis1">(</div>
						<div id="controlParenthesis2">)</div>
						<div id="control7">7</div>
						<div id="control8">8</div>
						<div id="control9">9</div>
						<div id="controlDivide">/</div>
						<div id="control4">4</div>
						<div id="control5">5</div>
						<div id="control6">6</div>
						<div id="controlMultiplica">*</div>
						<div id="control1">1</div>
						<div id="control2">2</div>
						<div id="control3">3</div>
						<div id="controlResta">-</div>
						<div id="control0">0</div>
						<div id="control00">00</div>
						<div id="controlDot">.</div>
						<div id="controlPlus">+</div>
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