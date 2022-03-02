

<!DOCTYPE html>
<html lang="en">

<head>
	<title>Edis MR</title>
	<meta name="description" content="I'm Edis MR, welcome to my personal portfolio">

	<?php
	headHTML();
	?>

	<link rel="stylesheet" href="./index/sass/index.css">
	<script defer src="index/script/index.js"></script>
	<link rel="prefetch" href="/gallery/lang/eng.json">
	<link rel="prefetch" href="/gallery/lang/spa.json">

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
						Edis MR
						<!-- Lorem Ipsum -->
					</h1>
					<p data-text="bwebdev">

						<!-- sit amet consectetur -->
					</p>
				</div>
				<figure>
					<img src="index/assets/portada-x1.webp" alt="portada" title="Portada" width="auto" height="auto">
				</figure>
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
						<div class="tecno-item-tec">HTML</div>
						<div class="tecno-item-progress"><progress value="100" min="0" max="100"></progress></div>
						<div class="tecno-item-value">100%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">CSS</div>
						<div class="tecno-item-progress"><progress value="100" min="0" max="100"></progress></div>
						<div class="tecno-item-value">100%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Javascript</div>
						<div class="tecno-item-progress"><progress value="95" min="0" max="100"></progress></div>
						<div class="tecno-item-value">95%</div>
					</div>

				<div class="tecno-item">
						<div class="tecno-item-tec">Typescript</div>
						<div class="tecno-item-progress"><progress value="80" min="0" max="100"></progress></div>
						<div class="tecno-item-value">80%</div>
					</div>

					<div class="tecno-item">
						<div class="tecno-item-tec">Javascript REGEX</div>
						<div class="tecno-item-progress"><progress value="70" min="0" max="100"></progress></div>
						<div class="tecno-item-value">70%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Responsive Web Design</div>
						<div class="tecno-item-progress"><progress value="100" min="0" max="100"></progress></div>
						<div class="tecno-item-value">100%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">SASS</div>
						<div class="tecno-item-progress"><progress value="80" min="0" max="90"></progress></div>
						<div class="tecno-item-value">80%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Bootstrap</div>
						<div class="tecno-item-progress"><progress value="60" min="0" max="100"></progress></div>
						<div class="tecno-item-value">60%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Wordpress</div>
						<div class="tecno-item-progress"><progress value="30" min="0" max="100"></progress></div>
						<div class="tecno-item-value">30%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Web Accesibility</div>
						<div class="tecno-item-progress"><progress value="25" min="0" max="100"></progress></div>
						<div class="tecno-item-value">25%</div>
					</div>
					
					<div class="tecno-item">
						<div class="tecno-item-tec">PHP</div>
						<div class="tecno-item-progress"><progress value="20" min="0" max="100"></progress></div>
						<div class="tecno-item-value">25%</div>
					</div>
					
				<div class="tecno-item">
						<div class="tecno-item-tec">Angular Framework</div>
						<div class="tecno-item-progress"><progress value="25" min="0" max="100"></progress></div>
						<div class="tecno-item-value">25%</div>
					</div>

				</div>
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
							<h4><a href="/gallery/" rel="noopener noreferrer" data-text="agallery"></a><span class="ms-Icon ms-Icon--OpenInNewTab"></span></h4>
						</div>
						<!-- <div class="card-content">
							<ul>
								<li data-text="bgalelist1"></li>
								<li data-text="bgalelist2"></li>
								<li data-text="bgalelist3"></li>
								<li data-text="bgalelist4"></li>
							</ul>
						</div> -->
					</section>

					<section class="card" data-accesibilityborder="true">
						<div class="card-header">
							<h4><a href="/gallery/index.php#juegos-html" rel="noopener noreferrer" data-text="bcarouseltitle"></a><span class="ms-Icon ms-Icon--OpenInNewTab"></span></h4>
						</div>
<!-- 						<div class="card-content">
							<ul>
								<li data-text="bcarouselitem1"></li>
								<li data-text="bcarouselitem2"></li>
								<li data-text="bcarouselitem3"></li>
								<li data-text="bcarouselitem4"></li>
							</ul>
						</div> -->
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