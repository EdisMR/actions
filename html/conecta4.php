<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony - Conecta4</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">
	<link rel="stylesheet" href="../css/game-conecta4/game-conecta4.css">
	
	<script defer src="../js/main.js"></script>

	<script defer src="../js/game-conecta4.js"></script>
</head>

<body>
	<?php
		include_once "../php/main.php";
		headerHTML();
	?>
	<div class="loader">
	</div>
	<main>

		<section class="definirJugadores">
			<form>
				<div>
					<span>Jugador 1 (amarillo): </span><input type="text" name="user1" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$" required>
				</div>
				<div>
					<span>Jugador 2 (rojo): </span><input type="text" name="user2" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$" required>
				</div>
				<div class="resetearInputs">
					<button type="reset"><span class="ms-Icon ms-Icon--Reset"></span></button>
					<button type="submit"><span class="ms-Icon ms-Icon--AcceptMedium"></span></button>
				</div>
			</form>
		</section>

		
		<section class="game-container d-none">
			
			<section class="player-inner">
			</section>
			
			<section class="reset-container">
			</section>

			<section class="grid-container">

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>




				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>


				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>



				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>



				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>



				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>

				<div>
					<span class="ms-Icon" data-occupied="false"></span>
				</div>


			</section>
		
		</section>

		<section class="innerTurnUser d-none">
			<div>Turno de <span></span></div>
		</section>

		<section class="buttonReset d-none">
			<div>
				<button>Reiniciar juego</button>
			</div>
		</section>


	</main>
	<?php
		footerHTML();
	?>
</body>
</html>