<!-- Mise en forme pour que le site soit 100% responsive -->
<!DOCTYPE html>
<html lang="fr">
<!-- Pour faire appel a une autre page en php -->
<?php include_once "html/inc/head.php"; ?>

<body class="accueil">
  <div class="container">
    <div class="row">
      <header class="col-xs-12 ml-1">
        <a href="#"></a><img src="media/c4m.png" alt="" class="logo" /></a>
        <nav class="">
          <!-- Navigation Top -->
          <ul class="hidden">
            <li class=""></li>
            <li class=""></li>
          </ul>
        </nav>
      </header>
    </div>
  </div>

  <article>
    <!-- Full width -->
    <div class="container">
      <div class="row">
        <section id="intro" class="text-center col-xs-12 ml-1 mr-1">
          <!-- Background animé avec jquery et hashtag -->
          <h1 id="titre" class="animated bounce"> Découvrez en direct les merveilles du département.</h1>
          <div id="alternate">
            <h2 id="lieux" class="text-center col-xs-12 ml-1 mr-1 boutonanime from-middle"></h2>
          </div>
          <!-- ANCIENNE PHRASE D'ACCROCHE CELLE QUI APPARAIT EST SOUMISE A L'APPROBATION DE MY PROVENCE EVIDEMMENT -->
                    <!-- Ancienne <p class="">Des villes contemporaines qui abritent des petits villages de pêcheurs et des quartiers
                    alternatifs.</p> -->
                    <h3 class="text-center col-xs-12 ml-1 mr-1"> Bienvenue en Provence </h3>
                  </section>
                </div>
              </div>

              <div class="container">
                <div class="row">

                 <!--SUPPRESSION DU BANDEAU POUR NE PAS AVOIR 2 CARTES

                  <section id="bandeau" class="col-xs-12">

                   Bas de page avec boutons visible sur page home avec fond transparent
                    <span class="dropdown">
                      <button class="btn-medium bouton" data-toggle="dropdown">Ville
                        <div class="dropdown-menu">
                          <div class="dropdown-item">Marseille</div>
                          <div class="dropdown-item">Plan de Cuques</div>
                          <div class="dropdown-item">Allauch</div>
                          <div class="dropdown-item">Aix en Provence</div>
                        </div>
                      </button>
                    </span>
                    <span class="dropdown">
                      <button class="btn-medium bouton" data-toggle="dropdown">Activité
                        <div class="dropdown-menu">
                          <div class="dropdown-item">Faire du sport</div>
                          <div class="dropdown-item">Bon plan en famille</div>
                          <div class="dropdown-item">Aller au restaurant</div>
                          <div class="dropdown-item">Un peu de culture</div>
                        </div>
                      </button>
                    </span>
                    <a href="bons_plans.php" title=""><button class="btn-medium bouton">Bons plans</button></a>
                    <a href="autour.php" title=""><button class="btn-medium bouton">Autour de moi</button></a>
                  </section> -->

                  <!-- Affichage des hashtags et du fond depuis le fichier accueil.json -->
                  <script>
                    $(document).ready(function () {
                      $.fn.delay = function (time, callback) {
                        jQuery.fx.step.delay = function () {};
                        return this.animate({
                          delay: 1
                        }, time, callback);
                      }

                      $.getJSON('html/inc/accueil.json', function (data) {
                        $.each(data, function (index, d) {
                          $('#lieux').delay(5000, function () {

                            $('#lieux').html(d.hashtag);
                            $('article').css('background-image', 'url(' + d
                              .image + ')');

                            var alternate = anime({
                              targets: '#alternate .el',
                              translateX: -950,
                              direction: 'alternate'
                            });

                          });
                        });
                      });

                    });
                  </script>

                </div>
              </div>
            </article>

            <div class="container">
              <div class="row">
                <section id="infos" class="col-xs-12 mx-auto">
                  <!-- Bas de page avec liens icons -->

                  <h1 >Vous pouvez dès à présent publier vos photos avec Instagram</h1>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mx-auto">
                      <img src=" media/icons/placeholder_a.png" alt="" height="128" vspace="10" /><br /><strong>Choisissez votre lieu</strong>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mx-auto ">
                      <img src="media/icons/hashtag_a.png" alt="" height="128" vspace="10" /><br /><strong>Regardez les hastags du bon plan</strong>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mx-auto ">
                      <img src="media/icons/photo-camera_a.png" alt="" height="128" vspace="10" /><br /><strong>Publiez votre photo</strong>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <section id="social">
                    <!-- Block du flux instagram -->
                    <?php include_once "html/inc/social.php"; ?>
                  </section>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <section id="footer">
                    <?php include_once "html/inc/footer.php"; ?>
                  </section>
                </div>
              </div>
            </div>

          </body>
          </html>
