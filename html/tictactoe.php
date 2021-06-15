<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">
	<link rel="stylesheet" href="../css/game-tictactoe/game-tictactoe.css">
	
	<script defer src="../js/main.js"></script>

	<script defer src="../js/game-tictactoe.js"></script>
</head>

<body>
	<?php
		include_once "../php/main.php";
		headerHTML();
	?>
	<div class="loader">
	</div>
	<main>

		<!-- NOMBRES PARA LOS JUGADORES -->
		<section class="nombres">
			<form>
				<div class="inputsName">
					<span>X -> </span><input type="text" name="user1" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$">
				</div>
				<div>VS</div>
				<div class="inputsName">
					<span>O -> </span><input type="text" name="user2" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$">
				</div>
				<div class="btnSubmit">
					<button type="submit">Iniciar</button>
				</div>
			</form>
		</section>


		<!-- CONTENEDOR DEL JUEGO -->
		<section id="juego" class="d-None">
			
			<section class="turno">
				Turno de <span>User1</span>
			</section>

			<div id="grid">
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
				
				<div data-occupied="false">
					<span class="ms-Icon"></span>
				</div>
			</div>
			
		</section>

		<!-- PARA MOSTRAR GANADOR -->
		<div class="resetGame d-None">
			<button>Reiniciar juego</button>
		</div>
		<section id="mostrarGanador" class="d-None">

			<div class="ventanaGanador">
				<p>EL GANADOR ES</p>
				<p class="ganadorInner">Alguien</p>
			</div>

			
		</section>
	</main>
	<?php
		footerHTML();
	?>
</body>
</html>