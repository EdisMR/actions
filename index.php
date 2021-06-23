<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>XitusDev</title>
	<link rel="shortcut icon" href="multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/global/global.css">
	<link rel="stylesheet" href="css/site-index/indexMainTag.css">

	<script defer src="js/main.js"></script>

</head>

<body>

	<?php
	include_once "php/main.php";
	redirector();
	headerHTML();
	?>

	<div class="loader">
	</div>

	<main>

		<!-- PORTADA -->
		<section class="block">
			<article class="index-portada">
				<div class="tituloPortada">
					<h1>
						XitusDev
						<!-- Lorem Ipsum -->
					</h1>
					<p>
						Programador web
						<!-- sit amet consectetur -->
					</p>
				</div>
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
								<li>Tratamiento de tipos de datos ingresados para evitar entradas inválidas</li>
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
								<li>Galería de imágenes que muestra los proyectos realizados</li>
								<li>La galería tiene dos modos diferentes, el modo de imágenes en una grilla y el modo de vista amplia</li>
								<li>Al tocar una imagen, se mostrará en modo amplio con su descripción correspondiente</li>
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
							<h4><a href="html/api.php" rel="noopener noreferrer">API en uso</a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li>Solicitar datos mediante una API del tiempo meteorológico</li>
								<li>Estilo se adapta al viewport para mostrar la información de forma cómoda</li>
								<li>Programación Javascript con uso del API de promesas, API Fetch y manejo de errores de la petición http</li>
							</ul>
						</div>
					</section>
				</div>
			</article>
		</section>

		<!-- Seccion de tecnologias que uso -->
		<section class="block">
			<article class="block">
				<div>
					<h2 id="tecnologias">Acerca de mí</h2>
				</div>
			</article>
			<article class="block tecnologias-bio-container">
				<div class="bio">
					<p>
						Mi nombre es Edis Mercado (XitusDev), de San José, Costa Rica. Soy desarrollador web 
						enfocado en el desarrollo de interfaces para el cliente final. 
						Tengo más de 5 años de experiencia codificando, inicié programando en C++ en la 
						Universidad Nacional de Costa Rica, donde tomé experiencia en el uso de las 
						matemáticas para la programación, la lógica de programación y el desarrollo de 
						estrategias para resolver los problemas planteados.
						Ingresé al Instituto Nacional de Aprendizaje, donde estudié Photoshop, Access, 
						Microsoft Office, y donde inició mi pasión por el desarrollo web, ya que ingresé a un 
						programa de Desarrollo Web.
						Después de cursar las bases del desarrollo web, continué formandome para el 
						desarrollo frontend, y aprendiendo a utilizar herramientas como SASS, GIT, AJAX, 
						PHP, entre otras. Los conocimientos que he adquirido se reflejan en el grupo de 
						iconos contiguo a este párrafo. Puedes contactarme o ver más detalles en los links 
						que aparecen abajo en el centro.
					</p>
				</div>
				<div id="tecnologias-items-container">

					<div class="tecno-item">
						<!-- HTML -->
						<figure>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<title>HTML5 Logo</title>
								<polygon fill="#E44D26" points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512 			" />
								<polygon fill="#F16529" points="256,480.523 376.03,447.246 404.27,130.894 256,130.894 			" />
								<polygon fill="#EBEBEB" points="256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627" />
								<polygon fill="#EBEBEB" points="256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399" />
								<path d="M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z" />
								<path d="M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z" />
								<path d="M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z" />
								<path d="M348.72,0h23.084v46.222h32.453v22.822H348.72V0z" />
								<polygon fill="#FFFFFF" points="255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.162,268.217" />
								<polygon fill="#FFFFFF" points="255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 365.385,221.716 365.531,221.716 366.442,211.509 368.511,188.488 369.597,176.305" />
							</svg>
						</figure>
					</div>

					<div class="tecno-item">
						<!-- CSS -->
						<figure>
							<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="102.3716mm" height="144.49777mm" viewBox="0 0 362.73401 511.99998" id="svg3476" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="CSS3.svg">
								<g inkscape:label="Calque 1" inkscape:groupmode="layer" id="layer1" transform="translate(-193.633,-276.3622)">
									<g id="g3013" transform="translate(119,276.3622)">
										<polygon id="polygon2989" points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 " style="fill:#264de4" />
										<polygon id="polygon2991" points="376.03,447.246 404.27,130.894 256,130.894 256,480.523 " style="fill:#2965f1" />
										<polygon id="polygon2993" points="150.31,268.217 154.38,313.627 256,313.627 256,268.217 " style="fill:#ebebeb" />
										<polygon id="polygon2995" points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 " style="fill:#ebebeb" />
										<polygon id="polygon2997" points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 " style="fill:#ebebeb" />
										<path id="path2999" d="m 160,0 55,0 0,23 -32,0 0,23 32,0 0,23 -55,0 z" inkscape:connector-curvature="0" />
										<path id="path3001" d="m 226,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z" inkscape:connector-curvature="0" />
										<path id="path3003" d="m 292,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z" inkscape:connector-curvature="0" />
										<polygon id="polygon3005" points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 " style="fill:#ffffff" />
									</g>
								</g>
							</svg>

						</figure>
					</div>

					<div class="tecno-item">
						<!-- JS -->
						<figure>
							<img src="multimedia/icons/js.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Git -->
						<figure>
							<img src="multimedia/icons/git.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Github -->
						<figure>
							<img src="multimedia/icons/GitHub.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Responsive Web Design -->
						<figure>
							<img src="multimedia/icons/rwd.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Bootstrap -->
						<figure>
							<img src="multimedia/icons/bootstrap-logo.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- PHP -->
						<figure>
							<img src="multimedia/icons/php.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- SEO -->
						<figure>
							<img src="multimedia/icons/seo.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Accesibilidad Web -->
						<figure>
							<img src="multimedia/icons/w3c.webp" alt="">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Animaciones CSS y JS -->
						<div class="tecno-texto">
							<span>Animaciones CSS y JS</span>
						</div>
					</div>

					<div class="tecno-item">
						<!-- REGEX -->
						<div class="tecno-texto">
							<span>REGEX (Expresiones Regulares)</span>
						</div>
					</div>

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
								<img src="multimedia/img/conecta4.webp" alt="Juego Conecta 4" title="formulario">
							</figure>
						</div>
					</section>
					<section class="card">
						<div>
							<h4><a href="##" rel="noopener noreferrer">Conejo Aleatorio</a></h4>
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
								<img src="multimedia/img/tictactoe.webp" alt="Juego Tic tac toe, o Gato" title="carruseles">
							</figure>
						</div>
					</section>
					<section class="card">
						<div>
							<h4><a href="##" rel="noopener noreferrer">Memoria</a></h4>
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