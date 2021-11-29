<?php
	include_once "../global/global.php";
	firstvisit();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title data-text="ctitle"></title>
	
	<?php
		headHTML();
	?>
	

	<link rel="stylesheet" href="./sass/form.css">
	<script defer src="./script/form.js"></script>

</head>

<body>
	<?php
		loader();
		headerHTML();
	?>

	<main>


		<section class="block">

			<article class="block">
				<div class="infoPadding">
					<h2 data-text="csample"></h2>
				</div>
			</article>
			<article class="block">
				<div class="infoPadding">
					<p data-text="cpurpose">
					
					</p>
				</div>
			</article>

		</section>



		<section class="block">
			<form class="block" action="./form.php" method="post">
				<!--  -->
				<article class="block">

					<!-- localizador de los inputgroup -->
					<section class="inputGroupContainer">

						<!-- BEM de los cards que contienen los input -->
						<article class="cardInputGroup card">

							<!-- header de este card input -->
							<div class="block">
								<!-- BEM del header card input -->
								<div class="formHeaderCard inputPadding">
									<h3 data-text="cpersonalinfo"></h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="cformnames"></div>

										<!-- class goodInput badInput -->
										<div class="inputC">
											<input type="text" placeholder="Write two last names" name="nombre"
												pattern="^[A-Za-z]{2,20}\W[A-Za-z]{2,20}\W[A-Za-z]{2,20}$" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="cbirth"></div>
										<div class="inputC">
											<input type="date" step="1" placeholder="Your Birthday"
												name="fechaNac" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="cformcalc"></div>
										<div class="inputC">
											<input type="number" placeholder="It is calculated with your birthday"
												name="edad" disabled autocomplete="off">
										</div>
									</div>

									<!-- Fin de inputPadding -->
								</div>

								<!-- bloque de inputs -->
							</div>

							<!-- Fin del BEM de los cards que contienen los input -->
						</article>

						<!-- ******* Otro card inputs ******* -->

						<!-- BEM de los cards que contienen los input -->
						<article class="cardInputGroup card">

							<!-- header de este card input -->
							<div class="block">
								<!-- BEM del header card input -->
								<div class="formHeaderCard inputPadding">
									<h3 data-text="ccontact"></h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="ctelephone"></div>
										<div class="inputC">
											<input type="tel" placeholder="Only CR format (+50612345678)" name="telefono"
												pattern="^\+506\d{8}$" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="cemail1"></div>
										<div class="inputC">
											<input type="email" placeholder="Email 1"
												pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" name="correo1" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput" data-text="cemail2"></div>
										<div class="inputC">
											<input type="email" placeholder="Email 2"
												pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" name="correo2" required
												autocomplete="off">
										</div>
									</div>

									<!-- Fin de inputPadding -->
								</div>

								<!-- bloque de inputs -->
							</div>

							<!-- Fin del BEM de los cards que contienen los input -->
						</article>



						<!-- Fin de article.inputGroupContainer -->
					</section>

					<!--  -->
				</article>


				<article class="block">
					<div class="buttonContainer">
						<button type="reset" aria-label="reset form">
							<!-- Reset -->
							<span data-text="cbtnreset"></span><span class="ms-Icon ms-Icon--Reset"></span>
						</button>

						<button type="submit" aria-label="submit form">
							<!-- Send -->
							<span data-text="cbtnsend"></span><span class="ms-Icon ms-Icon--AcceptMedium"></span>
						</button>

					</div>
				</article>
			</form>
		</section>





	</main>

	<?php
		footerHTML();
		settingsModal();
	?>
</body>

</html>