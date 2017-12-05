<?php include 'inc/head.php' ?>
<body>
      <?php include 'inc/menu.php'; ?>
      <div class="page lines-container">
            <div class="section__inner js-sectionInner">
                  <div class="lines js-linesObject lines--hero">
                        <div class="line-h1 line-h1--hero">
                              <div class="line-v1"></div>
                        </div>
                        <div class="line-v2 line-v2--hero">
                              <div class="line-h2"></div>
                              <div class="content-box lines__content">
                                    <h1>Jonas Teetaert</h1>
                                    <h3>Frontend web developer, based in Belgium</h3>
                              </div>
                              <h2 class="lines__cases-title">Cases</h2>
                              <a class="btn js-link lines__cases-link" href="#" data-link="1">checkout my work</a>
                        </div>
                  </div>

                  <?php include 'inc/cases.php';?>
                  <?php include 'inc/case.php';?>
                  <?php include 'inc/about.php';?>
            </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/plugins/CSSRulePlugin.min.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
</body>
</html>