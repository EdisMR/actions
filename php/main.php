<?php

function redirectorAlHeader(){
	if( !(isset($_COOKIE["access"])) || !($_COOKIE["access"]=="432289")){
		/* header("Location: /html/login.php"); */
		?>
		
		<script>window.location.pathname="/html/login.php"</script>
		
		<?php
	}
}

function headerHTML(){
?>
	<header class="glass">

		<!-- title -->
		<section class="block">
			<article class="header-title">
				<div>
					<h1><!-- EdisAnthony -->Titulo</h1>
				</div>
				<div>
					<button>
						<!-- Down -->
						&#x25BC;

						<!-- Up -->
						<!-- &#x25B2; -->
					</button>
				</div>
			</article>
		</section>

		<!-- URLs -->
		<section class="block">
			<nav class="header-enlaces">
				<ul>
					<li>
						<a href="/index.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Home"></span>
							</div>
							<div>
								Inicio
							</div>
						</a>
					</li>
					<li>
						<a href="/html/formulario.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--OfficeFormsLogo24"></span>
							</div>
							<div>
								Formulario
							</div>
						</a>
					</li>
					<li>
						<a href="##" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--SamsungGallery"></span>
							</div>
							<div>
								Galería
							</div>
						</a>
					</li>
					<li>
						<a href="/html/carruseles.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--PanoIndicator"></span>
							</div>
							<div>
								Carruseles
							</div>
						</a>
					</li>
					<li>
						<a href="/html/api.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--AzureAPIManagement"></span>
							</div>
							<div>
								API en uso
							</div>
						</a>
					</li>
					<li>
						<a href="/index.php#juegos-html" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Game"></span>
							</div>
							<div>
								Juegos HTML5
							</div>
						</a>
					</li>
					<li>
						<a href="##" rel="noopener noreferrer" id="accesibilityButton">
							<div>
								<span class="ms-Icon ms-Icon--AccessibiltyChecker"></span>
							</div>
							<div>
								Accesibilidad
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</section>


		<!-- Eventos -->
		<section class="block">
			<article class="header-events">
				<div>
					<p>Posicion del mouse:</p>
					<span class="inner-event"></span>
				</div>
				<div>
					<p>Tecla presionada:</p>
					<span class="inner-event"></span>
				</div>
			</article>
		</section>

	</header>
	
	<?php
}


function footerHTML(){
?>
	<footer>
			<ul class="glass">
				<li>
					<a href="https://github.com/EdisAnthony" target="_blank" rel="noopener noreferrer" title="Git">
						<div>
							<span class="ms-Icon ms-Icon--GitGraph"></span>
						</div>
					</a>
				</li>
				<li>
					<a title="email"><!-- EMAIL -->
						<div>
							<span class="ms-Icon ms-Icon--Mail"></span>
						</div>
					</a>
				</li>
				<li>
					<a title="whatsapp"><!-- WHATSAPP -->
						<div>
							<figure>
								<img src="/multimedia/icons/logo-whatsapp.svg" alt="">
							</figure>
						</div>
					</a>
				</li>
				<li>
					<a href="/index.php" rel="noopener noreferrer" title="Website">
						<div>
							<span class="ms-Icon ms-Icon--Website"></span>
						</div>
					</a>
				</li>
			</ul>
	</footer>

	<div id="dino">
		<img src="/multimedia/icons/dino.svg"></svg>
	</div>
	<?php

}

?>