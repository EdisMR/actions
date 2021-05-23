<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>EdisAnthony - Formulario</title>
	<link rel="shortcut icon" href="../multimedia/img/me.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/global/global.css">
	<link rel="stylesheet" href="../css/form-main/form-main.css">

	<script defer src="../js/form.js"></script>

	<link rel="preload" href="../js/login.js" as="script">
	<script src="../js/login.js"></script>
</head>

<body>
	<?php
		include_once "../php/main.php";
		headerHTML();
	?>
	<div class="loader">
	</div>


	<main>


		<section class="block">

			<article class="block">
				<div class="infoPadding">
					<h2>Muestra de formulario</h2>
				</div>
			</article>
			<article class="block">
				<div class="infoPadding">
					<p>
						El formulario tiene como finalidad, mostrar validaciones realizadas por medio de programacion
						Javascript. Los datos de este
						formulario no serán enviados a ningún servicio ni servidor de datos. Al enviar el formulario
						será redirigido nuevamente a este formulario.
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
									<h3>Datos Personales</h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Un nombre y dos apellidos:&nbsp;</div>

										<!-- class goodInput badInput -->
										<div class="inputC">
											<input type="text" placeholder="Con dos apellidos" name="nombre"
												pattern="^[A-Za-z]{2,20}\W[A-Za-z]{2,20}\W[A-Za-z]{2,20}$" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Fecha de nacimiento:&nbsp;</div>
										<div class="inputC">
											<input type="date" step="1" placeholder="Fecha de nacimiento"
												name="fechaNac" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Su edad calculada:&nbsp;</div>
										<div class="inputC">
											<input type="number" placeholder="Calculada con la fecha de nacimiento"
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
									<h3>Información de contacto</h3>
								</div>
							</div>

							<!-- Inputs -->
							<div class="block">
								<!-- Localizador de los inputs -->
								<div class="inputPadding">

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Número de teléfono:&nbsp;</div>
										<div class="inputC">
											<input type="tel" placeholder="Sólo formato de CR (+506)" name="telefono"
												pattern="^\+506\d{8}$" required autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Correo electrónico 1:&nbsp;</div>
										<div class="inputC">
											<input type="email" placeholder="Correo de contacto 1"
												pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" name="correo1" required
												autocomplete="off">
										</div>
									</div>

									<!-- BEM del nombre con input -->
									<div class="itemInput">
										<div class="descriptionInput">Correo electrónico 2:&nbsp;</div>
										<div class="inputC">
											<input type="email" placeholder="Correo de contacto 2"
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
						<button type="reset">Borrar datos</button>
						<button type="submit">Enviar datos</button>
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