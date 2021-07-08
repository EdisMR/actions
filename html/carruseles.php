<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>XitusDev - Carousel</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">

	<script defer src="../js/carousel.js"></script>
	<link rel="stylesheet" href="../css/carousel/carousel.css">


	<script defer src="../js/main.js"></script>


</head>

<body>
	<?php
		include_once "../php/main.php";
		redirector();
		loader();
		headerHTML();
	?>


	<main>

		<section class="portada">
			<h1>Carousel</h1>
			<p>
			It is important to note that these carousels and their operation was developed completely by myself (XitusDev).
			</p>
			<p>
				It is possible to manipulate the carousel by using the added controls, or using the manual scroll: in a cellphone, slide with your finger, 
				and in the case of a computer, manual scrolling is done with Shift key + Scroll
			</p>
		</section>

		<section class="carousel-block-container">


			<section class="carousel-container">

				<article class="carousel-header">
					<div>
						<h1>Image slideshow</h1>
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
						<h1>Elements Carousel</h1>
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
								<h3>Imagen and two paragraphs</h3>
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
								<h3>Two images, one title and one paragraph</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							
							<div class="carousel-itemPart">
								<h3>Title one with a paragraph</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3>Title two with a paragraph</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3>Title three with a paragraph</h3>
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
								<h3>A video, one título and a paragraph</h3>
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
						<h1>Manual scroll, without controls</h1>
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
								<h3>Item title</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<h3>Item title</h3>
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
								<h3>Item title</h3>
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
								<h3>Item title</h3>
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
								<h3>Item title</h3>
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