
<!DOCTYPE html>
<html lang="fr">

  <head>
    <?php include_once "../html/inc/head.php"; ?>

    <!--Inclusion de la bibliothèque Leaflet et sa feuille de style.-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>

    <!-- Une feuille de style éventuel -->
    <link rel="stylesheet" href="style.css">

    <title>Leaflet OSM</title>
  </head>

  <body>
    <!-- Le conteneur de notre carte (avec une contrainte CSS pour la taille -->
    <div id="macarte" style="width:545px; height:490px"></div>
    <h3>LISTE DES INFOS</h3>
    <div class="dropdown align-middle">

     <button class="btn btn-primary dropdown-toggle text-center" type="button" data-toggle="dropdown">Filtre
       <span class="caret"></span></button>

     <ul class="dropdown-menu">

     </ul>
   </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js"></script>
    <script type="text/javascript" src="dataMap.js"></script>
    <script>/**
      *ref= https://zestedesavoir.com/tutoriels/1365/des-cartes-sur-votre-site/#3-rajoutons-de-linformations
      * Itenerary : https://www.youtube.com/watch?v=Y5PtPYyrbYY
                    https://developers.google.com/maps/documentation/directions/intro
                    https://forums.xamarin.com/discussion/89222/google-maps-trace-route-itinerary-direction-api
                    https://msdn.microsoft.com/en-us/library/aa907681.aspx
                    https://developer.mapquest.com/documentation/leaflet-plugins/maps/
                    https://developer.mapquest.com/documentation/mapquest-js/v1.3/
                    https://developer.mapquest.com/documentation/directions-api/
                    https://stackshare.io/stackups/google-maps-vs-leaflet-vs-mapbox
      */</script>
    <script type="text/javascript" src="mainLeaflet.js"></script>

  </body>
  <?php include_once "../html/inc/footer.php"; ?>

</html>
