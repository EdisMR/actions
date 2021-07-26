<?php

function redirector()
{
	if (!(isset($_COOKIE["access"])) || !($_COOKIE["access"] == "432289")) {
		/* header("Location: /html/login.php"); */
?>

		<script>
			window.location.pathname = "/html/login.php"
		</script>

	<?php
	}
}

function loader()
{
	?>
	<div class="loader"></div>
<?php
}

function headerHTML()
{
?>
	<header class="glass">

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
					<li>
						<a href="/index.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Home"></span>
							</div>
							<div>
								Home
							</div>
						</a>
					</li>
					<li>
						<a href="/index.php#tecnologias" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Contact"></span>
							</div>
							<div>
								About me
							</div>
						</a>
					</li>
					<li>
						<a href="/html/formulario.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--OfficeFormsLogo24"></span>
							</div>
							<div>
								Form
							</div>
						</a>
					</li>
					<li>
						<a href="/html/galeria.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--SamsungGallery"></span>
							</div>
							<div>
								Gallery
							</div>
						</a>
					</li>
					<li>
						<a href="/html/carruseles.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--PanoIndicator"></span>
							</div>
							<div>
								Carousel
							</div>
						</a>
					</li>
					<li>
						<a href="/html/api.php" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--AzureAPIManagement"></span>
							</div>
							<div>
								API in use
							</div>
						</a>
					</li>
					<li>
						<a href="/index.php#juegos-html" rel="noopener noreferrer">
							<div>
								<span class="ms-Icon ms-Icon--Game"></span>
							</div>
							<div>
								HTML5 games
							</div>
						</a>
					</li>
					<li>
						<a rel="noopener noreferrer" id="settingsButton">
							<div>
								<span class="ms-Icon ms-Icon--Settings"></span>
							</div>
							<div>
								Settings
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
					<p>Mouse position:</p>
					<span class="inner-event"></span>
				</div>
				<div>
					<p>Key pressed:</p>
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
	<footer>
		<ul class="glass">
			<li>
				<a href="https://github.com/XitusDev" target="_blank" rel="noopener noreferrer" title="Git">
					<div>
						<span class="ms-Icon ms-Icon--GitGraph"></span>
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

	<div id="helpNode">
		<p>Site under<br> construction</p>
	</div>


<?php

}


function settingsModal()
{
?>

<!-- Aqui el HTML -->
<section id="modalSettings" class="d-none"><!-- d-none -->
	<div class="settings-priorization"></div>

	<article class="settingsContainer">

		<section class="block">
			<div class="settingsHeader">
				<span>Settings</span>
			</div>
		</section>


		<section class="block">

			<div class="settingsBody"><!-- Contiene los items de settings -->

				<div class="block">
					<div class="settingsBodyItem"> <!-- cada uno de los tres grupos -->
						<div class="block">
							<div class="stItemtitle"> <!-- titulo del grupo -->
								<span>Colors</span>
							</div>
						</div>


						<div class="block">
							<div class="settingItemContainer"> <!-- Contiene a los cuadros de control -->

								<div class="settingItem"><!-- Cada cuadro de control -->
									<div class="block">
										<div class="settingItemType">Theme</div>
									</div>
									<div class="block">
										<div class="settingItemControl">
											<span>Light</span><span class="settingItemIcon settingItemInactive" id="buttonTheme"></span><span>Dark</span>
										</div>
									</div>
								</div>

							</div>
						</div>


					</div>
				</div>


				<div class="block">
					<div class="settingsBodyItem"> <!-- cada uno de los tres grupos -->
						<div class="block">
							<div class="stItemtitle"> <!-- titulo del grupo -->
								<span>Accesibility</span>
							</div>
						</div>


						<div class="block">
							<div class="settingItemContainer"> <!-- Contiene a los cuadros de control -->

								<div class="settingItem"><!-- Cada cuadro de control -->
									<div class="block">
										<div class="settingItemType">High contrast</div>
									</div>
									<div class="block">
										<div class="settingItemControl">
											<span>Off</span><span class="settingItemIcon" id="buttonHighContrast"></span><span>On</span>
										</div>
									</div>
								</div>
								
								
								<div class="settingItem"><!-- Cada cuadro de control -->
									<div class="block">
										<div class="settingItemType">Big font</div>
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
					<div class="settingsBodyItem"> <!-- cada uno de los tres grupos -->
						<div class="block">
							<div class="stItemtitle"> <!-- titulo del grupo -->
								<span>Language</span>
							</div>
						</div>


						<div class="block">
							<div class="settingItemContainer"> <!-- Contiene a los cuadros de control -->

								<div class="settingItem"><!-- Cada cuadro de control -->
									<div class="block">
										<div class="settingItemType">Bilingual</div>
									</div>
									<div class="block">
										<div class="settingItemControl">
											<span>English</span><span class="settingItemIcon settingItemInactive" id="buttonBilingual"></span><span>Spanish</span>
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
				<button id="settingsClose">Close</button>
			</div>
		</section>


	</article>

</section>

<?php
}

?>