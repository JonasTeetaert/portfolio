<?php include 'inc/head.php' ?>
<body>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Styleguide</h1>
				<p>made by Jonas Teetaert</p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Colors</h1>
				<style type="text/css">
				.colorblock {
					width: 50px;
					height: 50px;
				}

				.black {
					background-color: #000000;
				}

				.yellow {
					background-color: #FFBC27;
				}
				</style>
				<div class="colorblock black"></div>
				<p>color-primary: #000000</p>
				<div class="colorblock yellow"></div>
				<p>color-secondary: #FFBC27</p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Headers</h1>
				<h1>H1. This is a h1 title</h1>
				<h2>H2. This is a h2 title</h2>
				<h3>H3. This is a h3 title</h3>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Paragraph en links</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin. <a href="#">Link</a> Cras congue mattis ante, maximus vehicula urna posuere id. Curabitur eleifend aliquet porttitor. Etiam pretium risus in dictum malesuada. Donec et mollis orci, a sollicitudin leo. Praesent eget erat purus.</p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Buttons</h1>
				<p><a class="btn" href="#">about</a></p>
				<p><a class="btn btn--firstletter" href="#">Jonas Teetaert</a></p>
				<p><a class="btn btn--shadow" href="#">Jonas Teetaert</a></p>
				<div class="">
					<input class="toggle" id="about" type="checkbox">
					<label class="toggle--label btn" for="about" data-on="close" data-off="about"></label>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Icon</h1>
				<p><a class="btn btn--shadow" href="#"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.28 101.28"><defs><style>.a{fill:#ffbc27;}</style></defs><title>portfolio_icon</title><polygon class="a" points="67.52 67.52 67.52 101.28 0 101.28 0 0 33.76 0 33.76 67.52 67.52 67.52"/><polygon points="101.28 0 101.28 101.28 67.52 101.28 67.52 33.76 33.76 33.76 33.76 0 101.28 0"/></svg>Jonas Teetaert</a></p>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Panel</h1>
				<div class="panel--parent">
					<a href="#" class="panel" style="background-image: url(assets/images/sample.jpg)">
						<div class="panel__overlay">
							<h3>Panel Title</h3>
							<p class="btn">view case</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="section__inner">
			<div class="content-box">
				<h1>Grid</h1>
				<div class="grid">
					<div class="content-box grid__long">
						<div class="panel--parent">
							<a href="#" class="panel" style="background-image: url(assets/images/sample.jpg)">
								<div class="panel__overlay">
									<h3>Panel Title</h3>
									<p class="btn">view case</p>
								</div>
							</a>
						</div>
					</div>
					<div class="grid__outer-box">
						<div class="content-box">
							<div class="panel--parent">
								<a href="#" class="panel" style="background-image: url(assets/images/sample.jpg)">
									<div class="panel__overlay">
										<h3>Panel Title</h3>
										<p class="btn">view case</p>
									</div>
								</a>
							</div>
						</div>
						<div class="grid__inner-box">
							<div class="content-box">
								<div class="panel--parent">
									<a href="#" class="panel" style="background-image: url(assets/images/sample.jpg)">
										<div class="panel__overlay">
											<h3>Panel Title</h3>
											<p class="btn">view case</p>
										</div>
									</a>
								</div>
							</div>
							<div class="content-box">
								<div class="panel--parent">
									<a href="#" class="panel" style="background-image: url(assets/images/sample.jpg)">
										<div class="panel__overlay">
											<h3>Panel Title</h3>
											<p class="btn">view case</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid">
					<div class="grid__outer-box">
						<div class="content-box"><div class="panel"></div></div>
						<div class="grid__inner-box">
							<div class="content-box"><div class="panel"></div></div>
							<div class="content-box"><div class="panel"></div></div>
						</div>
					</div>
					<div class="content-box grid__long"><div class="panel"></div></div>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="content-box">
			<div class="case-nav">
				<ul class="list list--inline">
					<li><a href="#" class="btn js-prev">previous</a></li>
					<li><a href="#" class="btn js-next">next</a></li>
				</ul>
			</div>
			<ul class="list case-list jsCaseList">
				<li class="case-list__item">
					<h2>Title 1</h2>
					<div class="case-img">
						<img src="assets/images/sample.jpg" alt="sample">
						<p><a href="#">www.sample.com</a></p>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.</p>
				</li>
				<li class="case-list__item">
					<h2>Title 2</h2>
					<div class="case-img">
						<img src="assets/images/sample.jpg" alt="sample">
						<p><a href="#">www.sample.com</a></p>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.</p>
				</li>
				<li class="case-list__item">
					<h2>Title 3</h2>
					<div class="case-img">
						<img src="assets/images/sample.jpg" alt="sample">
						<p><a href="#">www.sample.com</a></p>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.</p>
				</li>
			</ul>
			<a class="btn case__link-cases js-link" data-link="3" href="#">view all cases</a>
		</div>
	</section>

	<section class="section about">
		<div class="section__inner">
			<div class="content-box about__box">
				<h1>About layout</h1>
				<img class="about__img"src="assets/images/profile.jpg">
				<p class="about__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.<br><br>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare,<br><br>

					non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mattis tellus iaculis viverra. Nunc auctor dolor orci, a interdum purus facilisis id. Etiam dolor nulla, dignissim et nunc sit amet, tristique bibendum dui. Nunc ultricies tellus et est ornare, non viverra felis commodo. Vivamus pharetra ultricies sollicitudin.</p>
					<div class="about__contact">
						<h4>Contact</h4>
						<p>
							<a href="mailto:jteetaert@hotmail.com">jteetaert@hotmail.com</a><br>
							+32 476 91 51 04<br>
							<a href="https://www.instagram.com/chezteetie/" target="_blank">Instagram</a><br>
							<a href="#">Linkedln</a><br>
						</p>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="section__inner">
				<div class="content-box">
					<div class="grid">
						<div class="content-box grid__long">
							<div class="panel--parent">
								<a href="#" class="panel js-link" data-link="2" data-target="0" style="background-image: url(assets/images/garden-gourmet.jpg)">
									<div class="panel__overlay">
										<h3>Garden Gourmet</h3>
										<p class="btn">view case</p>
									</div>
								</a>
							</div>
						</div>
						<div class="grid__outer-box">
							<div class="content-box">
								<div class="panel--parent">
									<a href="#" class="panel js-link" data-link="2" data-target="1" style="background-image: url(assets/images/microsoft-sessies.jpg)">
										<div class="panel__overlay">
											<h3>Microsoft Sessies voor business</h3>
											<p class="btn">view case</p>
										</div>
									</a>
								</div>
							</div>
							<div class="grid__inner-box">
								<div class="content-box">
									<div class="panel--parent">
										<a href="#" class="panel js-link" data-link="2" data-target="2" style="background-image: url(assets/images/windows-uitblinkers.jpg)">
											<div class="panel__overlay">
												<h3>Windows Uitblinkers</h3>
												<p class="btn">view case</p>
											</div>
										</a>
									</div>
								</div>
								<div class="content-box">
									<div class="panel--parent">
										<a href="#" class="panel js-link" data-link="2" data-target="3" style="background-image: url(assets/images/microsoft-surfacebook.jpg)">
											<div class="panel__overlay">
												<h3>Microsoft Surface Book</h3>
												<p class="btn">view case</p>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="grid">
						<div class="grid__outer-box">
							<div class="content-box">
								<div class="panel--parent">
									<a href="#" class="panel js-link" data-link="2" data-target="4" style="background-image: url(assets/images/maggi.jpg)">
										<div class="panel__overlay">
											<h3>Maggi</h3>
											<p class="btn">view case</p>
										</div>
									</a>
								</div>
							</div>
							<div class="grid__inner-box">
								<div class="content-box"><div class="panel"></div></div>
								<div class="content-box"><div class="panel"></div></div>
							</div>
						</div>
						<div class="content-box grid__long"><div class="panel"></div></div>
					</div>
				</div>
			</div>
		</section>

		<script type="text/javascript" src="js/main.js"></script>
	</body>
	</html>