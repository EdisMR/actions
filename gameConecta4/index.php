<?php
		include_once "../global/global.php";
		firstvisit();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Edis MR - Connect 4</title>
	<?php
		headHTML();
	?>
	<link rel="stylesheet" href="./sass/gameConecta4.css">
	<script defer src="script/game-conecta4.js"></script>
</head>

<body>
	<?php
		loader();
		headerHTML();
	?>
	<main>

		<section class="definirJugadores">
			<form>
				<div>
					<span>Player 1 (yellow): </span><input type="text" name="user1" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$" required>
				</div>
				<div>
					<span>Player 2 (red): </span><input type="text" name="user2" minlength="1" maxlength="30" autocomplete="off" pattern="^([\w]{1,20}[\s]{0,1}){1,3}$" required>
				</div>
				<div class="resetearInputs">
					<button type="reset" aria-label="Reset"><span class="ms-Icon ms-Icon--Reset"></span></button>
					<button type="submit" aria-label="Submit"><span class="ms-Icon ms-Icon--AcceptMedium"></span></button>
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
			<div><span></span>'s shift</div>
		</section>

		<section class="buttonReset d-none">
			<div>
				<button aria-label="Restart game">Restart game</button>
			</div>
		</section>


	</main>
	<?php
		footerHTML();
		settingsModal();
	?>
</body>
</html>