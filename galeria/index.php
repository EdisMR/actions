
<!DOCTYPE html>
<html lang="en">
<head>
	<title>XitusDev - Gallery</title>
	<?php
		include_once "../global/global.php";
		headHTML();
	?>
	<link rel="stylesheet" href="./sass/galeria.css">
	<script defer src="./script/carousel-portafolio.js"></script>

</head>
<body>
	<?php
		redirector();
		loader();
		headerHTML();
	?>


	<main>
		

	<section class="portada-proyectos">
		<h1>Projects Gallery</h1>
	</section>

	<section class="carousel-container">
		
		<article class="carousel-header">
			<div><h1>ASIPROFE</h1></div>
			<div>The ASIPROFE association is made up of women from La Legua, in Aserrí, who prepare various products based on the coffee that they and their community harvest. This website was made with php, html, sass, and vanilla javascript</div>
		</article>
		
		<article class="carousel-body">
			<section class="carousel-items">


				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (4).webp" alt="copa">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Title and page cover</h3>
						<p>In the page cover is the logo and a representative product of ASIPROFE.</p>
						<p>The menu in the top is only in the left (in mobile and pc screen), and a share menu in the right</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->


				

				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (5).webp" alt="copa">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Location and the footer</h3>
						<p>
							A Google Maps iframe to show the location of ASIPROFE, and, in the footer you can contact ASIPROFE by clicking a link
						</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->



				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (2).webp" alt="copa">
						</figure>
					</div>
				</article>
				<!-- FIN DEL ITEM -->


				

				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (3).webp" alt="copa">
						</figure>
					</div>
				</article>
				<!-- FIN DEL ITEM -->

				

				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (6).webp" alt="copa">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Gallery</h3>
						<p>The gallery shows some photos about ASIPROFE, and, when you click on an image, the image will be shown in a fullscreen mode with a description of the image.</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->

				

				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/asiprofe (1).webp" alt="copa">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Slideshow</h3>
						<p>This slideshow pretends to show a description of the image. This is a fullscreen view, but, if you finish the fullscreen mode you'll be in the slideshow mode.</p>
						<p>A button in the bottom helps you to return to the gallery mode</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->





			</section>
		</article>
		
		<article class="carousel-controls">
			<div class="carousel-buttons">
				<button class="carousel-btn-previous"><span class="ms-Icon ms-Icon--ChevronLeftMed"></span></button>
				<div class="carousel-Inner-howMany">
					<span class="carousel-innerActual">5</span> <span>/</span>
					<span class="carousel-innerTotal">8</span>
				</div>
				<button class="carousel-btn-pause"><span class="ms-Icon ms-Icon--Pause"></span></button>
				<button class="carousel-btn-play"><span class="ms-Icon ms-Icon--Play"></span></button>
				<button class="carousel-btn-next"><span class="ms-Icon ms-Icon--ChevronRightMed"></span></button>
			</div>
		</article>
	</section>
	<!-- FIN DE CAROUSEl -->



	<section class="carousel-container">
		
		<article class="carousel-header">
			<div><h1>Mascarillas Pura Vida</h1></div>
			<div>
				<p>This entrepreneurship had created during the covid 19 pandemic, and it was looking for sell custom masks for clients of all ages.</p>
				<p>The project was a one page website to show the masks and mark the benefits and charachteristics of the Pura Vida Mask</p>
			</div>
		</article>
		
		<article class="carousel-body">
			<section class="carousel-items">


				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/mascarillas (1).webp" alt="header">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Header</h3>
						<p>In the header there are a slideshow to present photos about a person using the Pura Vida mask. The slideshow is automatic but you can use the controls to see the last or the next image</p>
						<p>
							You can see the benefits of the masks in the bottom, and the variety of charachteristics that Pura Vida masks offer
						</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->



				<!-- ITEM -->
				<article class="carousel-item">
					<div class="carousel-itemPart">
						<figure>
							<img src="./assets/mascarillas (2).webp" alt="copa">
						</figure>
					</div>
					<div class="carousel-itemPart">
						<h3>Details, and a responsive site</h3>
						<p>As you see, you have recommendations to wash your Pura Vida Mask, and a way to prevent difficulties using the mask, for example because a soap odor in your mask</p>
						<p>The website is responsive, and the menu in the right is ever in the right.</p>
					</div>
				</article>
				<!-- FIN DEL ITEM -->




			</section>
		</article>
		
		<article class="carousel-controls">
			<div class="carousel-buttons">
				<button class="carousel-btn-previous"><span class="ms-Icon ms-Icon--ChevronLeftMed"></span></button>
				<div class="carousel-Inner-howMany">
					<span class="carousel-innerActual">5</span> <span>/</span>
					<span class="carousel-innerTotal">8</span>
				</div>
				<button class="carousel-btn-pause"><span class="ms-Icon ms-Icon--Pause"></span></button>
				<button class="carousel-btn-play"><span class="ms-Icon ms-Icon--Play"></span></button>
				<button class="carousel-btn-next"><span class="ms-Icon ms-Icon--ChevronRightMed"></span></button>
			</div>
		</article>
	</section>
	<!-- FIN DE CAROUSEl -->





	</main>



	<?php
		footerHTML();
		settingsModal();
	?>
</body>
</html>