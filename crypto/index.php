<?php
include_once "../global/global.php";
firstvisit();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="pagetitle">Edis MR - Crypto</title>
	<?php
	headHTML();
	?>

	<link rel="stylesheet" href="./css/compiled/compiled.css">
	<script defer src="/crypto/script/script.js"></script>

</head>

<body>
	<?php
	loader();
	headerHTML();
	?>

	<main>

	<div class="block">
		<div class="pagetitle" data-text="cr1">
			
		</div>
	</div>

		<div class="formCenter">

			<!-- ONE RECTANGLE -->
			<div class="rectangleContainer">
				<!-- Title -->
				<div class="block">
					<div class="rectangleTitle">
						<span class="titleText">Encode</span>
					</div>
				</div>

				<div class="block">
					<div class="inputContainer">
						<fieldset>
							<legend data-text="cr3">
							</legend>
							<textarea id="encodeInput"></textarea>
						</fieldset>
					</div>
				</div>

				<div class="block">
					<div class="inputContainer">
						<fieldset>
							<legend data-text="cr4">
								
							</legend>
							<div id="encodeOutput"></div>
						</fieldset>
					</div>
				</div>

				<div class="block">
					<button id="copyEncoded" disabled data-text="cr5"></button>
					<button id="resetEncoded" data-text="cr6"></button>
				</div>

			</div>

			<!-- ANOTHER RECTANGLE -->
			<div class="rectangleContainer">
				<!-- Title -->
				<div class="block">
					<div class="rectangleTitle">
						<span class="titleText" data-text="cr7"></span>
					</div>
				</div>

				<div class="block">
					<div class="inputContainer">
						<fieldset>
							<legend data-text="cr3">
							</legend>
							<textarea id="decodeInput"></textarea>
						</fieldset>
					</div>
				</div>

				<div class="block">
					<div class="inputContainer">
						<fieldset>
							<legend data-text="cr4">
							</legend>
							<div id="decodeOutput"></div>
						</fieldset>
					</div>
				</div>

				<div class="block">
					<button id="copyDecoded" disabled data-text="cr5"></button>
					<button id="resetDecoded" data-text="cr6"></button>
				</div>

			</div>
	</main>


	<?php
	footerHTML();
	settingsModal();
	?>
</body>

</html>