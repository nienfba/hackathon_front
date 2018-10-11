<div class='header'>
  <div class="accueil">
    <div class="container">
      <div class="row">
        <header class="col-xs-12 ml-2 mr-2">

          <a class="btn-scroll ct-js-btn-scroll animated" href="#mapHome"><img class="scroll" src="media/icons/scroll.png" ></a>

          <script>
            $(document).ready(function () {
              $(".btn-scroll").on('click', function (event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top
                  }, 800, function () {
                    window.location.hash = hash;
                  });
                }
              });
              setInterval(function () {
                $('.btn-scroll').toggleClass("bounce");
              }, 5000);
            });
          </script>
        </header>
      </div>
    </div>

    <article>
      <!-- Full width -->
          <img class="logo" src="media/logo/code4marseille.png" alt="logo">
          <section id="intro" class="text-center col-xs-12 ml-auto mr-auto">
            <!-- Background animé avec jquery et hashtag -->
            <h1 id="titre" class="animated bounce"> Découvrez en direct les merveilles de la Provence</h1>
            <div id="alternate">
              <h2 id="lieux" class="text-center col-xs-12 ml-auto mr-auto boutonanime "></h2>
            </div>

          </section>

    </div>
  </div>
</div>
</div>




<!--  TOUS LES ANCIENS CODES SONT CI DESSOUS -->

<!-- Ne sert plus dans la nouvelle version
<!href="#"></a><img src="media/logo/c4m.png" alt="" class="logo" -->
         <!--<nav class="">
            <! Navigation Top
            <ul class="hidden">
              <li class=""></li>
              <li class=""></li>
            </ul>
          </nav>
        -->



        <!-- ANCIENNE PHRASE D'ACCROCHE CELLE QUI APPARAIT EST SOUMISE A L'APPROBATION DE MY PROVENCE EVIDEMMENT -->
<!-- Ancienne <p class="">Des villes contemporaines qui abritent des petits villages de pêcheurs et des quartiers
alternatifs.</p> -->
<!--<h3 class="text-center col-xs-12 ml-1 mr-1"> Bienvenue en Provence </h3>-->

           <!-- <div class="container">
            <div class="row"> -->



                     <!-- SUPPRESSION DU BANDEAU POUR NE PAS AVOIR 2 CARTES
                    <div id="bandeau" class="text-center col-xs-12 ml-1 mr-1 animated flipInX">
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
                           </span> -->



                        <!-- SUPPRESSION DES LIENS VERS "BONS PLANS" ET "AUTOUR DE MOI"
                        <a href="bons_plans.php" title=""><button class="btn-medium bouton">Bons plans</button></a>
                        <a href="autour.php" title=""><button class="btn-medium bouton">Autour de moi</button></a>
                      -->



<!-- Bouton menu par stéphane pour cacher et afficher la side bar...
<div id="menu">
    <img width="40" height="40" src="img/menu.png"/>
</div>
<script>
    $("#menu").on("click", function () {
        if ($("#bandeau").is(":visible")) {
            $("#bandeau").hide();
        } else {
            $("#bandeau").show();
        }
      }); -->


