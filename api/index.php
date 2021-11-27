<?php
	include_once "../global/global.php";
	firstvisit();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="ftitle"></title>

	<?php
		headHTML();
	?>
	
	<link rel="stylesheet" href="./sass/api.css">
	<script defer src="./script/api.js"></script>

</head>

<body>
	<?php
		loader();
		headerHTML();
	?>
	<main>

		<section class="block">

			<section class="solicitar">


				<article class="textContainer">
					<article class="textItem">
						<p class="bigHelp" data-text="fbigintro"></p>
					</article>

					<article class="textItem">
						<p class="btnSendHelper">example: <span>9.936633, -84.107593</span></p>
						<button id="myLocation" data-text="fmylocation"></button>
					</article>
				</article>


				<article class="formContainer">
					<img src="./assets/spinner-angular.svg" width="40px" height="40px" id="afterForm">

					<form>
						<div class="formItem">
							<div class="textInp">
								<p data-text="flatlong"></p>
							</div>
							<div class="inputContainer">
								<input type="text" name="inputL" autocomplete="off" placeholder="You can use Google Maps"
									required pattern="^[\-]{0,1}\d{1,}\.\d{1,},\s[\-]{0,1}\d{1,}\.\d{1,}$">
							</div>
						</div>

						<div class="buttons">
							<div class="btn">
								<button type="reset">
									<span class="ms-Icon ms-Icon--Reset"></span>
								</button>
							</div>
							<div class="btn">
								<button type="submit">
									<span class="ms-Icon ms-Icon--AcceptMedium"></span>
								</button>
							</div>
						</div>

					</form>
				</article>

			</section>

		</section>

		<section class="block">
			<section class="mostrar">

				<article class="itemInfo">

					<div class="cardHeader">
						<div class="titulo">...</div>
						<div class="subtitulo">
							<div>
								Latitude: <span class="lat">...</span>
							</div>
							<div>
								Longitude: <span class="long">...</span>
							</div>
						</div>
					</div>

					<div class="cardBody">
						<div class="feels">Thermal sensation: <span>...</span>°C</div>
						<div class="sunrise">Sunrise: <span>...</span>h</div>
						<div class="sunset">Sunset: <span>...</span>h</div>
						<div class="humidity">Humidity: <span>...</span>%</div>
					</div>

				</article>

				<article class="itemImg">

					<div class="temperatureItem">
						<div class="temp"><span>...</span>°C</div>
						<div class="tempMax">Max: <span>...</span>°C</div>
						<div class="tempMin">Min: <span>...</span>°C</div>
					</div>

					<div class="cardImg">
						<div>
							<img src="" alt="">
						</div>
						<div class="descrip"></div>
					</div>


				</article>

				<article class="mostrarFooter">
					<button id="updateLoc" data-text="fmostrarupdate"></button>
					<button id="copyLoc" data-text="fmostrarcopy"></button>
					<button id="toGmaps" data-text="fmostrarlocation"></button>
					<p class="notaPie" data-text="fmostrardata"></p>
				</article>

			</section>
		</section>

	</main>

	<?php
		footerHTML();
		settingsModal();
	?>
</body>

</html>