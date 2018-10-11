/*
 *Initialisation de la map avec les coordonnées GPS de Marseille
 **/

var carte = L.map('macarte').setView([43.300000, 5.400000], 12);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(carte);

var defaultLayers = carte.createDefaultLayers();
defaultLayers.normal.map.setMax(12);

var map = new H.Map(mapContainer,
  defaultLayers.normal.map,{
  center: {lat:43.300000, lng:5.400000},
});


//Ajout d'un marker et d'une zone d'influence
var marker = L.marker([43.300000, 5.400000]).addTo(carte);
//var influence = L.circle([46.6835956, -0.4137665], 210000).addTo(carte);
var markerPanier = L.marker([43.2982, 5.36811]).addTo(carte);
var markerVieuxPort = L.marker([43.29479, 5.37407]).addTo(carte);
var markerFrioul = L.marker([43.2812, 5.31017]).addTo(carte);
var markerNDG = L.marker([43.28433, 5.37111]).addTo(carte);


//Permet de déplacer le marqueur
carte.on('click', placerMarqueur);

function placerMarqueur(e) {
  marker.setLatLng(e.latlng);
};

//Permet l'ajout de Pop-up
marker.bindPopup(''); // Je ne met pas de texte par défaut
var mapopup = marker.getPopup();
mapopup.setContent('Bienvenue à Marseille Felas !');
marker.openPopup();



//Déplacer le marrqueur
// 1 set le marqueur
var marker = L.marker([46.6835956, -0.4137665], {
  draggable: 'true'
}).bindPopup("").addTo(carte);
// 2# Indique l'evenement
marker.on('dragend', relachement);
//3# function drag and drop
function relachement(e) {
  marker.getPopup().setContent('' + marker.getLatLng());
  marker.openPopup();
}
