<!DOCTYPE html>
<html lang="fr">
<?php include_once "html/inc/head.php"; ?>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">


<body class="">
  <!-- HEADER-------------------------------------------------------------------------------->
  <header class="">
    <img src="media/c4m.png" alt="" class="logo" />
    <nav class=""><!-- Navigation -->
      <ul class="hidden">
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
      </ul>
    </nav>
  </header>
  <!-- FIN DU HEADER------------------------------------------------------------------------>
  <!-- DEBUT DE SECTION--------------------------------------------------------------------->
  <section>
    <!-- Trois boutons---------------------------------------------------------------------->
    <!-- BOUTON 1=MENU DEROULANT ----------------------------------------------------------->
    <div class="container">
      <div class="row  mb-3 mt-3">
       <span class="dropdown dropdown-menu-left d-flex align-items-start">
        <button class="btn-medium border-0 mr-3" data-toggle="dropdown">Choisissez une ville
          <div class="dropdown-menu" style= "border-0;">
            <div class="dropdown-item">Marseille</div>
            <div class="dropdown-item">Arles</div>
            <div class="dropdown-item">Cassis</div>
            <div class="dropdown-item">LaCiotat</div>
            <div class="dropdown-item">Aix en Provence</div>
          </div>
        </button>
      </span>
      <!-- BOUTON 2=MENU DEROULANT --------------------------------------------------------->
      <span class="dropdown">
        <button class="btn-medium mr-3" data-toggle="dropdown">Espace naturel
          <div class="dropdown-menu">
            <div class="dropdown-item">Le Panier </div>
            <div class="dropdown-item">Les Calanques</div>
            <div class="dropdown-item">Le Vieux port </div>
            <div class="dropdown-item">La Bonne Mère</div>
          </div>
        </button>
      </span>
      <!-- BOUTON 3=VALIDATION -------------------------------------------------->
      <button type="submit" class="btn-medium  sub px-4">Valider</button>
    </div>
  </div>
</section>
<!-- FIN DE SECTION----------------------------------------------->
<!-- PAGE DIVISEE EN DEUX : GAUCHE PHOTOS/DROITE CARTE------------>
<div class="photocard" style="border-right:0px !important">
  <div class="row">
    <div class= "col-6">
      <!-- ------PARTIE GAUCHE -->
      <div class="row">
        <div class="col-6">
          <!-- CARD NUMERO 1 -->
          <div class="card mt-5 mb-4">
            <div class="card-img-top" style="height:220px; width:320px; background: url('media/panier.jpg'); background-size: cover; background-position: center;" > </div>
            <div class="card-body" style="height:160px; overflow: hidden;">
              <a href="decouvrir.php" style="text-decoration: none;"><h5 class="text-danger font-weight-bold">Ballade dans le panier</h5></a>
              <p><i class="fas fa-walking align-items mr-2 "> </i><strong>idéal pour une famille</strong><br><img src="media/yingyang.png" class="mr-2">2 à 4 heures | <img src="media/cible.png" class="mr-2" >1km<br><strong style="color:rgb(18, 25, 145);">#Marseille #les Calanques</strong ></p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <!-- ------CARD NUMERO 2 -->
          <div class="card mt-5 mb-4">
            <div class="card-img-top" style="height:220px;width:320px; background: url('media/calanques.jpg'); background-size: cover; background-position: center;" > </div>
            <div class="card-body" style="height:160px; overflow: hidden;">
              <h5 class="text-danger font-weight-bold">Les Calanques</h5><p><img src="media/trees-1.png" class="mr-2"><strong>Randonnées</strong><br><img src="media/yingyang.png" class="mr-2">2 à 4 heures | <img src="media/cible.png" class="mr-2">800m<br><strong style="color:rgb(18, 25, 145);">
              #Marseille #panier</strong></p>
            </div>
          </div>
        </div>
        <div class="col-6">
         <!-- ------CARD NUMERO 3 -->
         <div class="card mb-4">
          <div class="card-img-top" style="height:220px; width: 320px; background: url('media/vieuxport.jpg'); background-size: cover; background-position: center;" ></div>
          <div class="card-body" style="height:160px; overflow: hidden;">
            <h5 class="text-danger font-weight-bold">Le vieux-port</h5>
            <p class= "mr-2"><i class="fas fa-walking align-items mr-2"></i><strong>ideal pour une famille</strong><br><img src="media/cible.png" class="mr-2">1 à 2heures <br>
              <strong style="color:rgb(18, 25, 145);">#vieuxport</strong></p>
            </div>
          </div>
        </div>
        <div class="col-6">
         <!-- ------CARD NUMERO 4 -->
         <div class="card " >
          <div class="card-img-top" style="height:220px; width:320px;background: url('media/bonnemere.jpg'); background-size: cover; background-position: center;"></div>
          <div class="card-body" style="height:160px; overflow: hidden;">
            <h5 class="text-danger font-weight-bold mr-2">Visite de la bonne mère</h5>
            <p><i class="fas fa-walking align-items mr-2"></i><strong>ideal pour une famille</strong><br>
              <img src="media/cible.png" class="mr-2">30 minutes<br><strong style="color:rgb(18, 25, 145);">#notredamedelagarde</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------PARTIE DROITE -->
    <div class= "carte col-6 map mx-0">
      <div class="">
        <img src="media/maps.png">
        <!-- Carte -->
        <?php include_once "html/inc/bons-plans-carte.php"; ?>
      </div>
    </div>
  </div>
</div>
<!------FIN DU CONTAINER---------------------->
</body>
<!-- FIN DU BODY -->
<!-- FOOTER -->
<?php include_once "html/inc/footer.php"; ?>
<!-- FIN DU FOOTER -->
</html>


