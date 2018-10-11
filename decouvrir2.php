<!DOCTYPE html>
<html lang="fr">

<?php include_once "html/inc/head.php"; ?>


<body class="decouvrir">

  <!----------------------------------- DEBUT  HEADER   --------------------------------------->
    <header class="decouvrir">
        <div class="logo"> <a href="index.php"><img src="media/CODE4MARSEILLE_WHITE.png" alt="" class="logo" /></a></div>
        <!-- <nav class="">
            
            <ul class="">
                <li class=""></li>

            </ul>
        </nav> -->
    </header>
  <!-----------------------------------  FIN  HEADER   ---------------------------------------->



  <!-----------------------------------  DEBUT  MAIN   ---------------------------------------->
    <main>
      
      <div class="container-fluid">
        <div class="row colonneg">

          <!-- Debut Colonne de gauche -->
            <div class="col-lg-6 ">

              <!-- Affichage d'une publication (Photos + commentaires) -->
              <img  class="img-fluid col-lg-12" src="img/panier.jpg" alt="">
              <h1 class="col-lg-12">BALADE DANS LE PANIER</h1>
              <p class="col-lg-12">idéal pour la famille</p> <!-- pictogrammes -->
              <p class="col-lg-12">#marseille #panier</p>    <!---- Hachtag ---->
              <p class="col-lg-12">
                On est dimanche matin et il vous manque le petit bouquet d'aromates
                pour terminer votrebonne daube provençale dont tout le monde raffole?!
                Lemarché de la place Richelme vous attendavec tout les produits du
                terroir, aromates, olives, l'huile d'olive, les tomates séchées,
                les fruits et légumes, les poissons, les bons petits fromages de
                chèvre, le miel, la tapenade ou le caviar d'aubergine pour l'apéro...
              </p>
              <div class="imgport">
                <img  class="img-fluid col-lg-8" src="img/port.jpg" alt="">
              </div>
              <p class="col-lg-12">
                Sentez-moi ces parfums ! Et à deux pas de là,
                Place des prêcheurs, vous pourrez même acheter un joli bouquet
                de fleurs pour décorer votre table dominicale
              </p>

              <!-- Réseaux sociaux -->
              <section class="col-lg-12">
                <h3>Partagez avec vos amis</h3>
                <span class="footer-social">eee</span>
                <span class="fa-facebook"></span>
                <span class="fa-twitter"></span>
                <span class="fa-pinterest"></span>
              </section>
            </div>
          <!-- Fin Colonne de gauche -->

          <!-- Debut Colonne de Droite -->
            <div class="col-lg-6 colonneg">

              <div class="col-lg-12">
                <?php include_once "html/inc/meteo.php"; ?>
              </div>

              <!-- <p>
                <img class="img-fluid col-lg-12" src="img/stats.jpg" alt="">
              </p> -->

              <!-- Vignettes des meilleurs publications -->
              <div class="container-fluid">
                
                <div class="row ">
                  <div class="col-lg-12">
                    <h5>Meilleures Publications</h5>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-lg-12">
                    <?php include_once "html/inc/social.php"; ?>
                  </div>
                </div>
                  <!-- <div class="col-lg-3 colonnrdimg1"></div>
                  <div class="col-lg-3 colonnrdimg2"></div>
                  <div class="col-lg-3 colonnrdimg3"></div>
                  <div class="col-lg-3 colonnrdimg4"></div>
                  <div class="col-lg-3 colonnrdimg5"></div>
                  <div class="col-lg-3 colonnrdimg6"></div>
                  <div class="col-lg-3 colonnrdimg7"></div>
                  <div class="col-lg-3 colonnrdimg8"></div>
                  <div class="col-lg-3 colonnrdimg9"></div> -->
                  
                
              </div>
              <p class="col-lg-12">
                Si vous souhaitez avoir une de vos images sur le site, 
                inscrivez-vous sur Instagrame si ce n'est pas déjà 
                fait et publiez une photo en mettant les hastags 
                suivants :<strong> #marseille #panier</strong>
              </p>
          
            </div>
          <!-- Fin Colonne de Droite -->

        </div>
      </div>
    </main>
  <!-----------------------------------  FIN  MAIN   ---------------------------------------->
</body>
<?php include_once "html/inc/footer.php"; ?>

</html>
