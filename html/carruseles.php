<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony - Carruseles</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">

	<script defer src="../js/carousel.js"></script>
	<link rel="stylesheet" href="../css/carousel/carousel.css">


	<script defer src="../js/main.js"></script>


</head>

<body>
	<?php
		include_once "../php/main.php";
		headerHTML();
	?>
	<div class="loader">
	</div>


	<main>

		<section class="portada">
			<h1>Carruseles</h1>
			<p>
				Es importante destacar que estos carruseles y su funcionamiento fue desarrollado desde cero por mi persona (EdisAnthony).
			</p>
			<p>
				Es posible manipular el carrusel mediante los controles añadidos, o por medio de scroll manual, para lo cual se desliza con el dedo, 
				y en el caso de las computadoras se hace con Shift+Scroll
			</p>
		</section>

		<section class="carousel-block-container">


			<section class="carousel-container">

				<article class="carousel-header">
					<div>
						<h1>Carrusel de imágenes</h1>
					</div>
				</article>

				<article class="carousel-body">
					<section class="carousel-items">


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="copa">
								</figure>
							</div>
						</article>
						<!-- FIN DEL ITEM -->

						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/200" alt="copa">
								</figure>
							</div>
						</article>
						<!-- FIN DEL ITEM -->

						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/800/200" alt="copa">
								</figure>
							</div>
						</article>
						<!-- FIN DEL ITEM -->

						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/700/200" alt="copa">
								</figure>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


					</section>
				</article>

				<article class="carousel-controls">
					<div class="carousel-buttons">
						<button class="carousel-btn-previous"><span
								class="ms-Icon ms-Icon--ChevronLeftMed"></span></button>
						<div class="carousel-Inner-howMany">
							<span class="carousel-innerActual">5</span> <span>/</span>
							<span class="carousel-innerTotal">8</span>
						</div>
						<button class="carousel-btn-pause"><span class="ms-Icon ms-Icon--Pause"></span></button>
						<button class="carousel-btn-play"><span class="ms-Icon ms-Icon--Play"></span></button>
						<button class="carousel-btn-next"><span
								class="ms-Icon ms-Icon--ChevronRightMed"></span></button>
					</div>
				</article>
			</section>
			<!-- FIN DE CAROUSEl -->

		</section>






		<section class="carousel-block-container">

			<section class="carousel-container">

				<article class="carousel-header">
					<div>
						<h1>Carrusel de diversos elementos</h1>
					</div>
				</article>

				<article class="carousel-body">
					<section class="carousel-items">


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="copa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Imagen, título y un párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihi llam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="copa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="copa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Dos imágenes, un título y un párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							
							<div class="carousel-itemPart">
								<h3>Titulo 1 con párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo 2 con párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo 3 con párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="playa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="playa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="playa">
								</figure>
							</div>
							
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<video src="../multimedia/videos/vid.mp4" alt="vid">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Un video, un título y párrafo</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


					</section>
				</article>

				<article class="carousel-controls">
					<div class="carousel-buttons">
						<button class="carousel-btn-previous"><span
								class="ms-Icon ms-Icon--ChevronLeftMed"></span></button>
						<div class="carousel-Inner-howMany">
							<span class="carousel-innerActual">5</span> <span>/</span>
							<span class="carousel-innerTotal">8</span>
						</div>
						<button class="carousel-btn-pause"><span class="ms-Icon ms-Icon--Pause"></span></button>
						<button class="carousel-btn-play"><span class="ms-Icon ms-Icon--Play"></span></button>
						<button class="carousel-btn-next"><span
								class="ms-Icon ms-Icon--ChevronRightMed"></span></button>
					</div>
				</article>
			</section>
			<!-- FIN DE CAROUSEl -->


		</section>






		<section class="carousel-block-container">

			<section class="carousel-container carousel-No-controls">

				<article class="carousel-header">
					<div>
						<h1>Scroll manual, sin controles</h1>
					</div>
				</article>

				<article class="carousel-body">
					<section class="carousel-items">


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="copa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo de item</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<h3>Titulo de item</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="img">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo de item</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="playa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo de item</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<figure>
									<img src="https://picsum.photos/200/300" alt="playa">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3>Titulo de item</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


					</section>
				</article>

				<article class="carousel-controls">
					<div class="carousel-buttons">
						<button class="carousel-btn-previous"><span
								class="ms-Icon ms-Icon--ChevronLeftMed"></span></button>
						<div class="carousel-Inner-howMany">
							<span class="carousel-innerActual">5</span> <span>/</span>
							<span class="carousel-innerTotal">8</span>
						</div>
						<button class="carousel-btn-pause"><span class="ms-Icon ms-Icon--Pause"></span></button>
						<button class="carousel-btn-play"><span class="ms-Icon ms-Icon--Play"></span></button>
						<button class="carousel-btn-next"><span
								class="ms-Icon ms-Icon--ChevronRightMed"></span></button>
					</div>
				</article>
			</section>
			<!-- FIN DE CAROUSEl -->

		</section>



	</main>

	<?php
		footerHTML();
	?>
</body>

</html>