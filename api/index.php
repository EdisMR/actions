<!DOCTYPE html>
<html lang="en">

<head>
	<title>XitusDev - Using an API</title>

	<?php
		include_once "../global/global.php";
		headHTML();
	?>
	
	<link rel="stylesheet" href="./sass/api.css">
	<script defer src="./script/api.js"></script>

</head>

<body>
	<?php
		redirector();
		loader();
		headerHTML();
	?>
	<main>

		<section class="block">

			<section class="solicitar">


				<article class="textContainer">
					<article class="textItem">
						<p class="bigHelp">Write the latitude and longitude to obtain the information</p>
					</article>

					<article class="textItem">
						<p class="btnSendHelper">example: <span>9.936633, -84.107593</span></p>
						<button id="myLocation">Use my location</button>
					</article>
				</article>


				<article class="formContainer">
					<img src="./assets/spinner-angular.svg" width="40px" height="40px" id="afterForm">

					<form>
						<div class="formItem">
							<div class="textInp">
								<p>Latitude and Longitude</p>
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
					<button>Update</button>
					<p class="notaPie">Data provided by OpenWeatherMap</p>
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