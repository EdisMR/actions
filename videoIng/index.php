<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="etitle"></title>

	<?php
		include_once "../global/global.php";
		headHTML();
	?>

<link rel="stylesheet" href="./sass/videoIng.css">
<script defer src="./script/controls.js"></script>
</head>

<body>
<?php
		redirector();
		loader();
		headerHTML();
	?>

	<main>
		<span class="advice" data-text="eadvice"></span>
		<figure>
			<video src="./assets/Secuencia 02-3 1.mp4" title="video" alt="Video" poster="./assets/post.webp" preload></video>
		</figure>
		<section class="buttonsSection">
			<button disabled id="play">
				<span class="ms-Icon ms-Icon--PlaySolid" title="play video"></span>
			</button>
			<button disabled id="pause">
				<span class="ms-Icon ms-Icon--CirclePauseSolid" title="pause video"></span>
			</button>
			<button disabled id="stop">
				<span class="ms-Icon ms-Icon--StopSolid" title="stop video"></span>
			</button>
		</section>
	</main>
	<?php
		footerHTML();
		settingsModal();
	?>
</body>
</html>