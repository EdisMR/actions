<?php

function redirector()
{
	if (!(isset($_COOKIE["access"])) || !($_COOKIE["access"] == "432289")) {
		/* header("Location: /html/login.php"); */
?>

		<script>
			window.location.pathname = "/login/"
		</script>

	<?php
	}
}

function loader()
{
	?>
	<style>
		.loader{
			background-color: rgb(31 41 46 / 80%);
			color: #eee;
			display: grid;
			place-items: center;
			position: fixed;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 120;
			font-size: 100px;
		}

		.ball-grid-beat div{
			background-color: #eee;
		}
	</style>
	<div class="loader">
		<div class="ball-grid-beat">

			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
<?php
}

function headerHTML()
{
?>
	<header class="glass" data-accesibilityborder="true">

		<!-- title -->
		<section class="block">
			<article class="header-title">
				<div>
					<h1>XitusDev
						<!-- Titulo -->
					</h1>
				</div>
				<div>
					<button>
					</button>
				</div>
			</article>
		</section>

		<!-- URLs -->
		<section class="block">
			<nav class="header-enlaces">
				<ul>
					<li data-accesibilityborder="true">
						<a href="/" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Home"></span>
							</div>
							<div>
								<span data-text="astart" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<li data-accesibilityborder="true">
						<a href="/index.php#tecnologias" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Contact"></span>
							</div>
							<div>
								<span data-text="aabout" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<li data-accesibilityborder="true">
						<a href="/formulario/" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--OfficeFormsLogo24"></span>
							</div>
							<div>
								<span data-text="aform" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<li data-accesibilityborder="true">
						<a href="/galeria/" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--SamsungGallery"></span>
							</div>
							<div>
								<span data-text="agallery" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<!-- <li data-accesibilityborder="true">
						<a href="/carrusel/" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--PanoIndicator"></span>
							</div>
							<div>
								<span data-text="acarousel" class="menuItemText"></span>
							</div>
						</a>
					</li> -->
					<li data-accesibilityborder="true">
						<a href="/api/" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--AzureAPIManagement"></span>
							</div>
							<div>
								<span data-text="aapi" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<li data-accesibilityborder="true">
						<a href="/index.php#juegos-html" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Game"></span>
							</div>
							<div>
								<span data-text="aprojects" class="menuItemText"></span>
							</div>
						</a>
					</li>
					<li data-accesibilityborder="true">
						<a rel="noopener noreferrer" id="settingsButton">
							<div>
								<button class="ms-Icon ms-Icon--Settings"></button>
							</div>
							<div>
								<span data-text="asettings" class="menuItemText"></span>
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
					<p data-text="amousep"></p>
					<span class="inner-event"></span>
				</div>
				<div>
					<p data-text="akeyp"></p>
					<span class="inner-event"></span>
				</div>
			</article>
		</section>

	</header>

<?php
}


function footerHTML()
{
?>
	<footer data-accesibilityborder="true">
		<ul class="glass">
			<li>
				<a href="https://github.com/XitusDev" target="_blank" rel="noopener noreferrer" title="Git">
					<div>
						<span class="ms-Icon ms-Icon--GitGraph"></span>
					</div>
				</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/edisanthony" target="_blank" rel="noopener noreferrer" title="LinkedIn">
					<div>
						<figure>
							<img src="/global/assets/linkedin.webp" alt="LinkedIn logo" style="filter: invert(0.07);transform: scale(.85);">
						</figure>
					</div>
				</a>
			</li>
			<li>
				<a title="email">
					<!-- EMAIL -->
					<div>
						<span class="ms-Icon ms-Icon--Mail"></span>
					</div>
				</a>
			</li>
			<li>
				<a title="whatsapp">
					<!-- WHATSAPP -->
					<div>
						<figure>
							<img src="/global/assets/logo-whatsapp.svg" alt="">
						</figure>
					</div>
				</a>
			</li>
			<li>
				<a href="/" rel="noopener noreferrer" title="Website">
					<div>
						<span class="ms-Icon ms-Icon--Website"></span>
					</div>
				</a>
			</li>
		</ul>
	</footer>

	<div id="dino">
		<img src="/global/assets/dino.svg"></svg>
	</div>

	<div id="helpNode">
		<p data-text="aunderconst"></p>
	</div>


<?php

}


function settingsModal()
{
?>

	<!-- Aqui el HTML -->
	<section id="modalSettings" class="d-none">
		<!-- d-none -->
		<div class="settings-priorization"></div>

		<article class="settingsContainer" data-accesibilityborder="true">

			<section class="block">
				<div class="settingsHeader">
					<span data-text="asettings"></span>
				</div>
			</section>


			<section class="block">

				<div class="settingsBody">
					<!-- Contiene los items de settings -->


					<div class="block">
						<div class="settingsBodyItem">
							<!-- cada uno de los tres grupos -->
							<div class="block">
								<div class="stItemtitle">
									<!-- titulo del grupo -->
									<span data-text="aaccesibility"></span>
								</div>
							</div>


							<div class="block">
								<div class="settingItemContainer">
									<!-- Contiene a los cuadros de control -->

									<div class="settingItem">
										<!-- Cada cuadro de control -->
										<div class="block">
											<div class="settingItemType" data-text="ahighcontrast"></div>
										</div>
										<div class="block">
											<div class="settingItemControl">
												<span>Off</span><span class="settingItemIcon settingItemInactive" id="buttonHighContrast"></span><span>On</span>
											</div>
										</div>
									</div>


									<div class="settingItem">
										<!-- Cada cuadro de control -->
										<div class="block">
											<div class="settingItemType" data-text="abigfont"></div>
										</div>
										<div class="block">
											<div class="settingItemControl">
												<span>Off</span><span class="settingItemIcon settingItemInactive" id="buttonBigFont"></span><span>On</span>
											</div>
										</div>
									</div>

								</div>
							</div>


						</div>
					</div>


					<div class="block">
						<div class="settingsBodyItem">
							<!-- cada uno de los tres grupos -->
							<div class="block">
								<div class="stItemtitle">
									<!-- titulo del grupo -->
									<span data-text="alang"></span>
								</div>
							</div>


							<div class="block">
								<div class="settingItemContainer">
									<!-- Contiene a los cuadros de control -->

									<div class="settingItem">
										<!-- Cada cuadro de control -->
										<div class="block">
											<div class="settingItemType" data-text="abilingual"></div>
										</div>
										<div class="block">
											<div class="settingItemControl">
												<span data-text="asetenglish"></span><span class="settingItemIcon settingItemInactive" id="buttonBilingual"></span><span data-text="asetspanish"></span>
											</div>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>

				</div>

			</section>


			<section class="block">
				<div class="settingsFooter">
					<button id="settingsClose" data-text="aclosebtn"></button>
				</div>
			</section>


		</article>

	</section>

<?php
}

?>


<?php

function headHTML(){
	firstvisit()
?>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-7L6RHQNWLQ"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-7L6RHQNWLQ');
	</script>

	<link rel="preload" href="/global/css/extras/loaders.min.css" as="style">
	<link rel="stylesheet" href="/global/css/extras/loaders.min.css">

	<meta http-equiv="Cache-Control" content="max-age=43200">
	<link rel="shortcut icon" href="/global/assets/me.ico" type="image/x-icon">
	<script src="/global/script/gsap-3.8.0.min.js"></script>
	<script src="/global/script/alertify.min.js"></script>
	<script defer src="/global/script/main.js"></script>
	<link rel="stylesheet" href="/global/css/compiled/global.css">
<?php
}

?>



<?php

$nombreCookie = "firstvisit";
function firstvisit(){
	global $nombreCookie;
	if (!isset($_COOKIE[$nombreCookie])) {
		$tiempoExpiracion = time() + 60 * 60 * 24 * 180;
		setcookie($nombreCookie, true, $tiempoExpiracion, '/');
		header("location:/first-visit");
	}
}

?>