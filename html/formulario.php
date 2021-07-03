<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>XitusDev - Form</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">
	<link rel="stylesheet" href="../css/form-main/form-main.css">

	<script defer src="../js/form.js"></script>

	<script defer src="../js/main.js"></script>

</head>

<body>
	<?php
		include_once "../php/main.php";
		redirector();
		headerHTML();
	?>
	<div class="loader">
	</div>


	<main>


		<section class="block">

			<article class="block">
				<div class="infoPadding">
					<h2>Sample form</h2>
				</div>
			</article>
			<article class="block">
				<div class="infoPadding">
					<p>
					The purpose of the form is to show validations made using Javascript programming. The data in this form will not be sent to any service or data server. By submitting the form you will be redirected back to this form.
					</p>
				</div>
			</article>

		</section>



		<section class="block">
			<form class="block" action="../php/form.php" method="post">
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
									<h3>Personal information</h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">One name and two last names:&nbsp;</div>

										<!-- class goodInput badInput -->
										<div class="inputC">
											<input type="text" placeholder="Write two last names" name="nombre"
												pattern="^[A-Za-z]{2,20}\W[A-Za-z]{2,20}\W[A-Za-z]{2,20}$" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Birthday:&nbsp;</div>
										<div class="inputC">
											<input type="date" step="1" placeholder="Your Birthday"
												name="fechaNac" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Your calculated age:&nbsp;</div>
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
									<h3>Contact information</h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Telephone number:&nbsp;</div>
										<div class="inputC">
											<input type="tel" placeholder="Only CR format (+50612345678)" name="telefono"
												pattern="^\+506\d{8}$" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Email 1:&nbsp;</div>
										<div class="inputC">
											<input type="email" placeholder="Email 1"
												pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" name="correo1" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Email 2:&nbsp;</div>
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
						<button type="reset">
							<!-- Reset -->
							<span class="ms-Icon ms-Icon--Reset"></span>
						</button>

						<button type="submit">
							<!-- Send -->
							<span class="ms-Icon ms-Icon--AcceptMedium"></span>
						</button>

					</div>
				</article>
			</form>
		</section>





	</main>

	<?php
		footerHTML();
	?>
</body>

</html>