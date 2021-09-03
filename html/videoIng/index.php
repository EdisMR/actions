<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<link rel="shortcut icon" href="/multimedia/img/me.ico" type="image/x-icon">
	<title>XitusDev - Broccoli Video</title>
	<script defer src="controls.js"></script>
	<link rel="stylesheet" href="css/videoIng.css">

	<script defer src="../../js/main.js"></script>
	<link rel="stylesheet" href="../../css/global/global.css">

</head>

<body>
<?php
		include_once "../../php/main.php";
		redirector();
		loader();
		headerHTML();
	?>

	<main>
		<span class="advice">Advice: this page was a practice, isn't related with a real business and corresponding rights are for original creators of photos, music and images used in the video</span>
		<figure>
			<video src="../../multimedia/videos/Secuencia 02-3 1.mp4" title="video" alt="Video" poster="../../multimedia/img/post.webp" preload></video>
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