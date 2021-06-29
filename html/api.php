<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony - Uso de API</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">

	<script defer src="../js/api.js"></script>
	<script defer src="../js/main.js"></script>


	<link rel="stylesheet" href="../css/global/global.css">
	<link rel="stylesheet" href="../css/api-main/api.css">

</head>

<body>
	<?php
		include_once "../php/main.php";
		redirector();
		headerHTML();
	?>
	<div class="loader">
	</div>

	<main>

		<section class="block">

			<section class="solicitar">


				<article class="textContainer">
					<article class="textItem">
						<p class="bigHelp">Ingrese los datos de la localización para obtener la información</p>
					</article>

					<article class="textItem">
						<p class="btnSendHelper">ejemplo: <span>9.936633, -84.107593</span></p>
					</article>
				</article>


				<article class="formContainer">
					<img src="../multimedia/img/spinner-angular.svg" width="40px" height="40px" id="afterForm">

					<form>
						<div class="formItem">
							<div class="textInp">
								<p>Latitud y longitud </p>
							</div>
							<div class="inputContainer">
								<input type="text" name="inputL" autocomplete="off" placeholder="Ir a Google Maps"
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
								Latitud: <span class="lat">...</span>
							</div>
							<div>
								Longitud: <span class="long">...</span>
							</div>
						</div>
					</div>

					<div class="cardBody">
						<div class="feels">Sensacion termica: <span>...</span>°C</div>
						<div class="sunrise">Amanecer: <span>...</span>h</div>
						<div class="sunset">Atardecer: <span>...</span>h</div>
						<div class="humidity">Humedad: <span>...</span>%</div>
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
					<button>Actualizar</button>
					<p class="notaPie">Datos proporcionados por OpenWeatherMap</p>
				</article>

			</section>
		</section>

	</main>

	<?php
		footerHTML();
	?>
</body>

</html>