<!DOCTYPE html>
<html lang="en">

<head>
	<title>XitusDev - Tic Tac Toe</title>
	<?php
		include_once "../global/global.php";
		headHTML();
	?>

	<link rel="stylesheet" href="./sass/gameTictactoe.css">
	<script defer src="script/game-tictactoe.js"></script>
</head>

<body>
	<?php
		redirector();
		loader();
		headerHTML();
	?>

	
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
					<button type="submit">Start</button>
				</div>
			</form>
		</section>


		<!-- CONTENEDOR DEL JUEGO -->
		<section id="juego" class="d-None">
			
			<section class="turno">
				<span>User1</span>'s shift
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
			<button>Restart game</button>
		</div>
		<section id="mostrarGanador" class="d-None">

			<div class="ventanaGanador">
				<p>The winner is</p>
				<p class="ganadorInner">Alguien</p>
			</div>

			
		</section>
	</main>
	<?php
		footerHTML();
		settingsModal();
	?>
</body>
</html>