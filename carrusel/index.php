<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="htitle"></title>
	
	<?php
		include_once "../global/global.php";
		headHTML();
	?>

	<script defer src="./script/carousel.js"></script>
	<link rel="stylesheet" href="./sass/carousel.css">

</head>

<body>
	<?php
		redirector();
		loader();
		headerHTML();
	?>


	<main>

		<section class="portada centrador">
			<h1 data-text="hportada"></h1>
			<p data-text="hport1">
			
			</p>
			<p data-text="hportexplanation">
				
			</p>
		</section>

		<section class="carousel-block-container centrador">


			<section class="carousel-container">

				<article class="carousel-header">
					<div>
						<h1 data-text="slider1"></h1>
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






		<section class="carousel-block-container centrador">

			<section class="carousel-container">

				<article class="carousel-header">
					<div>
						<h1 data-text="slider2"></h1>
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
								<h3 data-text="parag1"></h3>
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
								<h3 data-text="parag3"></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							
							<div class="carousel-itemPart">
								<h3 data-text="parag5"></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3 data-text="parag2"></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
							<div class="carousel-itemPart">
								<h3 data-text="parag4"></h3>
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
									<video src="./assets/vid.mp4" alt="vid">
								</figure>
							</div>
							<div class="carousel-itemPart">
								<h3 data-text="parag6"></h3>
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






		<section class="carousel-block-container centrador">

			<section class="carousel-container carousel-No-controls">

				<article class="carousel-header">
					<div>
						<h1 data-text="slider3"></h1>
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
								<h3 data-text="parag7"></h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat fugit quod
									necessitatibus sint laboriosam cumque unde praesentium ipsam ullam.</p>
							</div>
						</article>
						<!-- FIN DEL ITEM -->


						<!-- ITEM -->
						<article class="carousel-item">
							<div class="carousel-itemPart">
								<h3 data-text="parag7"></h3>
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
								<h3 data-text="parag7"></h3>
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
								<h3 data-text="parag7"></h3>
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
								<h3 data-text="parag7"></h3>
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
		settingsModal();
	?>
</body>

</html>