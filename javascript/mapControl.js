var lat;
var lng;

/*Exemple
 var customControl = L.Control.extend({
 options: {
 position: 'topright'
 },
 
 onAdd: function(map) {
 var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
 
 container.style.backgroundColor = 'white';
 //container.style.backgroundImage = "url(http://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
 container.style.backgroundSize = "30px 30px";
 container.style.width = '26px';
 container.style.height = '100px';
 
 container.onclick = function() {
 console.log('buttonClicked');
 }
 
 return container;
 }
 });
 
 map.addControl(new customControl());*/


/**
 *Function Question
 */


var questionControl = L.Control.extend({

    options: {

        position: 'topleft'

    },

    onAdd: function (map) {

        var containerQ = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom questionBtn');

        containerQ.style.backgroundColor = 'white';

        containerQ.style.width = '26px';

        containerQ.style.height = '26px';

        containerQ.title = 'question';

        containerQ.style.backgroundImage = "url(./media/mapicons/question.png)";

        containerQ.style.backgroundSize = "26px 26px";

        //var iconeQuestion = L.DomUtil.create('img', 'draggable-marker');

        containerQ.onclick = function () {

            var center = map.getCenter();

            IconQuestion = L.icon({
                iconUrl: 'media/mapicons/question.png', // the url of the img
                iconSize: [40, 40],
                iconAnchor: [20, 40] // the coordinates of the "tip" of the icon ( in this case must be ( icon width/ 2, icon height )
              });

            var markerQ = new L.marker(center, {

                draggable: 'true',

                icon: IconQuestion

            });

            var position = markerQ.getLatLng();

            console.log((position.lng) + '');

            /*document.getElementById('lat').value = position.lat;
             
             document.getElementById('lng').value = position.lng;*/

            markerQ.on('dragend', function (event) {

                /**markerQ.setLatLng(position, {
                 
                 draggable: 'true'
                 
                 })*/

                position = markerQ.getLatLng();

                markerQ.openPopup();

                console.log(document.getElementById('lat'));

                //document.getElementById('lat').value = position.lat;

                document.getElementById('lat').value = position.lat;

                document.getElementById('lng').value = position.lng;

            });

            markerQ.bindPopup('<p>Veuillez placer votre marqueur puis poser votre question.</p>' +
                    '<input type="hidden" name="lat" id="lat" value="">' +
                    '<input type="hidden" name="lng" id="lng" value="">' +
                    '<input class="titre" name="titre" style="width:100%; color:black;" placeholder="Titre">' +
                    '<br><textarea class="description" name="description" placeholder="Description" style="width:100%" rows="5"></textarea>' +
                    '<br><button class="submitQ" onclick="submitQuestion();" >poser votre question</button>')

                    .addTo(map)

                    .openPopup();

            markerQ.on("dragend", function () {

                this.openPopup();

            })

        }

        return containerQ;

    }

});

map.addControl(new questionControl());

/**
 
 *END Function Question
 
 */

//Envoi de la question

var urlAjax = "https://myprovence.code4marseille.fr/info/api";

function submitQuestion() {

    var titre = document.querySelector("input[name='titre']").value;

    var description = document.querySelector("textarea[name='description']").value;

    var lat = document.getElementById('lat').value;

    var lng = document.getElementById('lng').value;

    var icone = "question";

    $formData = new FormData();

    $formData.append('lat', lat);

    $formData.append('long', lng);

    $formData.append('title', titre);

    $formData.append('description', description);

    $formData.append('icone', icone);

    fetch(urlAjax, {

        method: "POST",

        body: $formData

    })

            .then(function (response) {

                console.log(response);

                // SI ON VEUT GERER DU JSON

                // ON VA TRANSFORMER LE RESULTAT EN OBJET JSON

                return response.json();

            })

            .then(function (objetJson) {

                console.log(objetJson);

            });

}

/**
 *END Function Question
 */

/**
 *Function Geolocalisation
 */
var geoloc = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.title = "Geolocalisation";
        container.style.backgroundColor = 'white';
        container.style.backgroundSize = "26px 26px";
        container.style.width = '26px';
        container.style.height = '26px';
        container.style.backgroundImage = "url(./media/mapicons/localization.png)";
        container.onmouseover = function () {
            container.style.backgroundColor = 'tomato';
        }
        container.onmouseout = function () {
            container.style.backgroundColor = 'white';
        }
        container.onclick = function () {
            map.locate({
                setView: true,
                maxZoom: 16
            });
        }

        return container;
    }
});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    var iconGeoloc = L.icon({
        iconUrl: './media/mapicons/localization.png'});

    L.marker(e.latlng, {icon: iconGeoloc}).addTo(map)
            .bindPopup("Vous êtes à " + radius + " métres de ce point!").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
map.addControl(new geoloc());
/**
 *END Function Geolocalisation
 */

/**
 *Function SearchBar Hashtag
 * A finir d'intégrer la barre de HASHTAG sur la carte ?
 */
/*var hashtagControl = L.Control.extend({
 options: {
 position: 'topright'
 },
 
 onAdd: function(map) {
 var containerHashtag = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
 
 containerHashtag.style.backgroundColor = 'white';
 containerHashtag.style.backgroundSize = "30px 30px";
 containerHashtag.style.width = '260px';
 containerHashtag.style.height = '20px';
 
 containerHashtag.onclick = function() {
 alert('buttonClicked');
 }
 
 return containerHashtag;
 }
 });
 
 map.addControl(new hashtagControl()); */
/**
 *END Function SearchBar Hashtag
 */
