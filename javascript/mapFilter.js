//Tous les filtres de la carte
var infosFiltres = [
    "child", "cocktail", "eye", "thumbs-up", "umbrella-beach", "swimmer", "futbol", "fish",
    "kiwi-bird", "smile", "camera", "question"
];

//Si on affiche les filtres (appel ajax des reqêtes) true or false
var filtreIcon = true;
var filtreQuestion = true;
var filtreLive = true;

//Création de la map Leaflet
var map = L.map('mapHome').setView([43.3, 5.4], 13);

//Quadrillage de la zone à ne pas franchir
map.setMaxBounds([[42.7, 3.5],[44, 7]]);

//Fond de carte leaflet
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    minZoom: 10,
    id: 'mapbox.streets'
}).addTo(map);


// CLUSTER DES ICONES / TYPE 

// GESTION POINTS BONS PLANS ECT..
var iconLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
    evt.layer.bindPopup(L.Util.template('{image}<p><a href="{lien}" target="_blank">{title}</a><br>{caption}</p>', evt.layer.photo), {
        className: 'leaflet-popup-info',
        minWidth: 400
    });
});

// Gestion des questions
var questionLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
    evt.layer.bindPopup(L.Util.template('{image}<p><a href="{lien}" target="_blank">{title}</a><br>{caption}</p>', evt.layer.photo), {
        className: 'leaflet-popup-info',
        minWidth: 400
    });
});

// GESTION POINTS INSTAGRAM
var photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
    evt.layer.bindPopup(L.Util.template('<img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
        className: 'leaflet-popup-photo',
        minWidth: 400
    });
});


//Gestion des filtres de la MAP
//Gestion du filtre Live
$("#live").on("click", function () {
    if (filtreLive) {
        map.removeLayer(photoLayer);
        photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
            evt.layer.bindPopup(L.Util.template('<img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
                className: 'leaflet-popup-photo',
                minWidth: 400
            });
        });
        filtreLive = false;
        idInsta = [];
    } else {
        photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
            evt.layer.bindPopup(L.Util.template('<img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
                className: 'leaflet-popup-photo',
                minWidth: 400
            });
        });
        idInsta = [];
        filtreLive = true;
        ajaxMap(hashtag);
    }
});

//Gestion des autres filtres
function filtre(filtre_nom) {
    if (infosFiltres.includes(filtre_nom)) {
        var pos = infosFiltres.indexOf(filtre_nom);
        delete infosFiltres[pos];
        console.log(infosFiltres);
    } else {
        infosFiltres.push(filtre_nom);
        console.log(infosFiltres);
    }
    map.removeLayer(questionLayer);
    map.removeLayer(iconLayer);
    questionLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
        evt.layer.bindPopup(L.Util.template('<p><a href="{lien}" target="_blank">{caption}</a></p>', evt.layer.photo), {
            className: 'leaflet-popup-info',
            minWidth: 400
        });
    });
    iconLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
        evt.layer.bindPopup(L.Util.template('<p><a href="{lien}" target="_blank">{caption}</a></p>', evt.layer.photo), {
            className: 'leaflet-popup-info',
            minWidth: 400
        });
    });
    idsInfos = [];
    ajaxInfos();

}
// FIN CLUSTER DES ICONES / TYPE 