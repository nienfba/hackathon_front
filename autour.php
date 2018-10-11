<!DOCTYPE html>
<html lang="fr">
<?php include_once "html/inc/head.php"; ?>
<body class="autour">
<header class="">
    <a href="index.php"><img src="media/c4m.png" alt="" class="logo" /></a>
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
<article class=""><!-- Full width -->

    <section class="container">
        <div class="row">
            <div class="col-12">
<form>
  <div class="form-group row">
      <div class="col-sm-4">
        <select class="form-control" id="ville" placeholder="ville">
          <option value="">choisissez une ville</option>
          <option>marseille</option>
          <option>aix</option>
          <option>aubagne</option>
          <option>cassis</option>
        </select>
      </div>
      <div class="col-sm-4">
        <select class="form-control" id="activite" placeholder="activité">
          <option value="">choisissez une activité</option>
          <option>Espace Naturel</option>
          <option>Mer</option>
          <option>Montagne</option>
          <option>Urbain</option>
        </select>
      </div>
      <div class="col-sm-4">
        <button type="submit" class="btn btn-primary mb-2">Valider</button>
      </div>
  </div>
</form>
            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <div class="col-sm-6">
                <div class="listeInfo row">
                <!-- ICI ON VA CREER UNE BALISE li PAR INFO RECUPERE -->
                </div>
            </div>
            <div class="col-sm-6">
                <div id="map">
                </div>

                <!-- leafletjs: etape1 -->
                <script>
var map = L.map('map').setView([43.3, 5.4], 10);
this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );
            this.tileLayer.addTo(map);

            </script>

            <!-- leafletjs: geolocalisation -->
            <script>
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e)
{
    var radius = e.accuracy / 2;

    L.marker(e.latlng, { draggable: true }).addTo(map)
        .bindPopup("Vous êtes à " + radius + "m de ce point ?").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

            </script>
<script>
var appelAjax = function(urlApiAjax, callbackJson)
{
    // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
    fetch(urlApiAjax)
    .then(function(data){
        // DEBUG
        console.log(data);
        // ON VEUT RECEVOIR UN OBJET JAVASCRIPT
        return data.json();
    })
    .then(callbackJson)
}

// URL API AJAX
var urlApiAjax = 'https://myprovence.code4marseille.fr/api/instas?itemsPerPage=24';
var ajouterImage = function(objetJS)
{
    console.log(objetJS);
    // CA Y'EST J'AI UN OBJET JS AVEC TOUTES INFOS PLANQUEES DEDANS...
    // IL FAUT ALLER RECUPERER LES INFOS QUI NOUS INTERESSENT
    var tableauInfo = objetJS["hydra:member"];
    // objet.propriete OU objet["propriete"]
    // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
    for(var index=0; index < tableauInfo.length; index++) {
        var infoCourante = tableauInfo[index];
        console.log(infoCourante);
        var link = infoCourante.link;
        var caption = infoCourante.caption;
        var thumbnail = infoCourante.thumbnail;
        var lowResolution = infoCourante.lowResolution;
        var standardResolution = infoCourante.standardResolution;
        if (link) {
            var baliseUl = document.querySelector(".listeInfo");
            // DOM Document Object Model
            // AJOUTER UNE BALISE li
            var codeHtmlLi =      '<div class="col-sm-4">'
                                    + '<a href="' + link + '">'
                                        + '<img class="img-fluid" src="' + thumbnail + '">'
                                    + '</a>'
                                    + '</div>'
                                    + '<div class="col-sm-8">'
                                    + '<div> <a href="https://www.google.fr/maps/dir/' + "43.3,5.4" + "/" +  "43.35,5.45" + "/" +'" > Comment y aller '
                                    + '</a>'
                                    + '</div>'
                                       + '<span>' + caption + '</span>'
                                    + '</div>';

            // AJOUTER NOTRE CODE POUR LA BALISE li DANS LA BALISE ul
            baliseUl.innerHTML += codeHtmlLi;
        }
    }

}


appelAjax(urlApiAjax, ajouterImage);

</script>

            </div>
        </div>
    </section>
    <section>
        <!-- Bas de page contenu à définir -->
    </section>
</article>
<aside class=""></aside><!-- Block flottant à droite -->
<?php include_once "html/inc/footer.php"; ?>
</body>
</html>
