<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>XitusDev</title>

	<?php
	include_once "global/global.php";
	firstvisit();
	headHTML();
	?>

	<link rel="stylesheet" href="./index/sass/index.css">
	<script defer src="index/script/index.js"></script>

</head>

<body>

	<?php
	loader();
	headerHTML();
	?>


	<main>

		<!-- PORTADA -->
		<section class="block centrador" style="margin-top: 0px;">
			<article class="index-portada">
				<div class="tituloPortada">
					<h1>
						XitusDev
						<!-- Lorem Ipsum -->
					</h1>
					<p data-text="bwebdev">

						<!-- sit amet consectetur -->
					</p>
				</div>
				<figure>
					<img src="index/assets/portada-6-1.webp" alt="" title="Portada">
				</figure>
			</article>
		</section>


		<!-- GRID1 -->
		<section class="block centrador">
			<article class="block">
				<div>
					<h2 id="index-paginas" data-text="bpages"></h2>
				</div>
			</article>
			<article class="block">
				<div class="main-index-grid col2y1">
					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/formulario/" rel="noopener noreferrer" data-text="bform"></a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li data-text="bformlist1"></li>
								<li data-text="bformlist2"></li>
								<li data-text="bformlist3"></li>
								<li data-text="bformlist4"></li>
							</ul>
						</div>
					</section>
					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/galeria/" rel="noopener noreferrer" data-text="agallery"></a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li data-text="bgalelist1"></li>
								<li data-text="bgalelist2"></li>
								<li data-text="bgalelist3"></li>
								<li data-text="bgalelist4"></li>
							</ul>
						</div>
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/api/" rel="noopener noreferrer" data-text="aapi"></a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li data-text="aapili1"></li>
								<li data-text="aapili2"></li>
								<li data-text="aapili3"></li>
							</ul>
						</div>
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/index.php#juegos-html" rel="noopener noreferrer" data-text="bcarouseltitle"></a></h4>
						</div>
						<div class="card-content">
							<ul>
								<li data-text="bcarouselitem1"></li>
								<li data-text="bcarouselitem2"></li>
								<li data-text="bcarouselitem3"></li>
								<li data-text="bcarouselitem4"></li>
							</ul>
						</div>
					</section>

				</div>
			</article>
		</section>

		<!-- Seccion de tecnologias que uso -->
		<section class="block centrador">
			<article class="block">
				<div>
					<h2 id="tecnologias" data-text="aabout"></h2>
				</div>
			</article>
			<article class="block tecnologias-bio-container">
				<div class="bio" data-accesibilityborder="true">
					<p data-text="baboutlongtext">
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
							<img src="index/assets/icons/js.webp" alt="javascript">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Git -->
						<figure>
							<img src="index/assets/icons/git.webp" alt="git">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Github -->
						<figure>
							<img src="index/assets/icons/GitHub.webp" alt="github">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- JS -->
						<figure>
							<img src="index/assets/icons/sass.webp" alt="sass">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Responsive Web Design -->
						<figure>
							<img src="index/assets/icons/rwd1.webp" alt="responsive web design">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Bootstrap -->
						<figure>
							<img src="index/assets/icons/bootstrap-logo.webp" alt="Bootstrap">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- PHP -->
						<figure>
							<img src="index/assets/icons/php.webp" alt="PHP">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- PHP -->
						<figure>
							<img src="index/assets/icons/wordpress1.svg" alt="Wordpress">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- SEO -->
						<figure>
							<img src="index/assets/icons/seo.webp" alt="SEO">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Accesibilidad Web -->
						<figure>
							<img src="index/assets/icons/w3c.webp" alt="Web Accesibility">
						</figure>
					</div>

					<div class="tecno-item">
						<!-- Animaciones CSS y JS -->
						<div class="tecno-texto">
							<span data-text="btecnostatic"></span>
						</div>
					</div>

					<div class="tecno-item">
						<!-- REGEX -->
						<div class="tecno-texto">
							<span data-text="btecnoregex"></span>
						</div>
					</div>

				</div>
			</article>
		</section>

		<!-- GRID2 -->
		<section class="block centrador">

			<article class="block">
				<div>
					<h2 id="juegos-html" data-text="aprojects"></h2>
				</div>
			</article>

			<article class="block">
				<div class="main-index-grid col4y2">

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/gameConecta4/" rel="noopener noreferrer" data-text="bgamesconnect"></a></h4>
						</div>
						<div class="card-content">
							<figure>
								<img src="index/assets/conecta4.webp" alt="Connect four game" title="Connect 4">
							</figure>
						</div>
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/gameTictactoe/" rel="noopener noreferrer" data-text="bgamestic"></a></h4>
						</div>
						<div class="card-content">
							<figure>
								<img src="index/assets/tictactoe.webp" alt="Tic tac toe" title="tic tac toe">
							</figure>
						</div>
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/calculator/" rel="noopener noreferrer" data-text="bgamescalc"></a></h4>
						</div>
						<div class="card-content">
							<figure>
								<img src="index/assets//calculadora.webp" alt="random rabbit" title="Calculator">
							</figure>
						</div>
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/videoIng/" rel="noopener noreferrer" data-text="bgamesvideo"></a></h4>
						</div>
						<div class="card-content">
							<figure>
								<img src="index/assets/broccoli.webp" alt="Broccoli Video">
							</figure>
						</div>
					</section>
				</div>
			</article>
		</section>

		<!-- <section class="moreinfowebsite">
			<a href="about/" data-text="moreinfosite"></a>
		</section> -->
	</main>

	<?php
	footerHTML();
	settingsModal();
	?>
</body>

</html>