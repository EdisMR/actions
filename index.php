<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony</title>
	<link rel="shortcut icon" href="multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/global/global.css">
	<link rel="stylesheet" href="css/site-index/indexMainTag.css">
	
	<link rel="preload" href="js/login.js" as="script">
	<script src="js/login.js"></script>
</head>

<body>

	<?php
		include_once "php/main.php";
		headerHTML();
	?>

	<div class="loader">
	</div>
	
	<main>

		<!-- PORTADA -->
		<section class="block">
			<article class="index-portada">
				<figure>
					<img src="https://picsum.photos/seed/picsum/300/300" alt="" title="Portada">
				</figure>
			</article>
		</section>


		<!-- GRID1 -->
		<section class="block">
			<article class="block">
				<div>
					<h2 id="index-paginas">Paginas en este sitio</h2>
				</div>
			</article>
			<article class="block">
				<div class="main-index-grid col2y1">
					<section class="card">
						<div class="card-header">
							<h4><a href="html/formulario.php" rel="noopener noreferrer">Formulario</a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li>Validar formulario mediante API de formularios de Javascript</li>
								<li>Animaciones de ayuda en caso de ingresar información inválida</li>
								<li>Formulario haciendo uso de etiquetas HTML5 y etiquetas semánticas</li>
							</ul>
						</div>
					</section>
					<section class="card">
						<div class="card-header">
							<h4><a href="##" rel="noopener noreferrer">Galería</a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li>Galería de imágenes, con dos modos diferentes</li>
								<li>Mostrar imagen seleccionada en modo ampliado</li>
								<li>Animaciones estáticas y dinámicas mediante CSS y JS</li>
							</ul>
						</div>
					</section>
					<section class="card">
						<div class="card-header">
							<h4><a href="html/carruseles.php" rel="noopener noreferrer">Carrusel/Presentacion</a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li>Carrusel de imágenes, similar a las transiciones de las presentaciones</li>
								<li>Varios tipos de carruseles independientes entre sí</li>
								<li>Transiciones amigables con el usuario</li>
								<li>Controles de carrusel que no afectan a los controles de otros carruseles</li>
							</ul>
						</div>
					</section>
					<section class="card">
						<div class="card-header">
							<h4><a href="html/api.html" rel="noopener noreferrer">API en uso</a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li>Solicitar datos mediante una API del tiempo meteorológico</li>
								<li>Estilo se adapta al viewport para mostrar la información de forma cómoda</li>
								<li>Funcionamiento mediante programación Javascript con uso de promesas, API Fetch y CSS con SASS</li>
							</ul>
						</div>
					</section>
				</div>
			</article>
		</section>
		
		
		
		<!-- GRID2 -->
		<section class="block">
			<article class="block">
				<div>
					<h2 id="juegos-html">Juegos HTML5</h2>
				</div>
			</article>
			<article class="block">
				<div class="main-index-grid col4y2">
					<section class="card">
						<div>
							<h4><a href="html/conecta4.php" rel="noopener noreferrer">Conecta 4</a></h4>
						</div>
						<div>
							<figure>
								<img src="https://picsum.photos/seed/picsum/300/300" alt="" title="formulario">
							</figure>
						</div>
					</section>
					<section class="card">
						<div>
							<h4><a href="##" rel="noopener noreferrer">Conejo aleatorio</a></h4>
						</div>
						<div>
							<figure>
								<img src="https://picsum.photos/seed/picsum/300/300" alt="" title="galeria">
							</figure>
						</div>
					</section>
					<section class="card">
						<div>
							<h4><a href="html/tictactoe.php" rel="noopener noreferrer">Tic tac toe</a></h4>
						</div>
						<div>
							<figure>
								<img src="multimedia/img/tictactoe.webp" alt="" title="carruseles">
							</figure>
						</div>
					</section>
					<section class="card">
						<div>
							<h4><a href="##" rel="noopener noreferrer">Trileros</a></h4>
						</div>
						<div>
							<figure>
								<img src="https://picsum.photos/seed/picsum/300/300" alt="" title="API en uso">
							</figure>
						</div>
					</section>
				</div>
			</article>
		</section>
	</main>

	<?php
		footerHTML();
	?>
</body>

</html>