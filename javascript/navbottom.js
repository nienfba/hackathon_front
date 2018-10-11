/**
 *Function Question
 */
var questionControl = L.Control.extend({
  options: {
    position: 'topleft'
  },
  onAdd: function(map) {
    var containerQ = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    containerQ.style.backgroundColor = 'white';
    containerQ.style.width = '26px';
    containerQ.style.height = '26px';
    containerQ.title = 'question';
    containerQ.style.backgroundImage = "url(../media/mapicons/question.png)";
    containerQ.style.backgroundSize = "26px 26px";

    containerQ.onclick = function() {
      var center = map.getCenter();
      var markerQ = new L.marker(center, {
          draggable: 'true',
          iconUrl: '../media/mapicons/question.png'
        })
        .addTo(map)
        .bindPopup('<input class="titre" style="width:100%; color:black;"><br><textarea class="description" style="width:100%" rows="5"></textarea><br><button id="submitQ" onclick(submitQuestion();)>poser votre question</button>')
        .openPopup();
      markerQ.on("dragend", function() {
        this.openPopup();
      })
    }
    $('#submitQ').on("click", () => {
      markerQ.dragging.disable();
    });

    return containerQ;
  }
});
map.addControl(new questionControl());

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

  onAdd: function(map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    container.title = "Geolocalisation";
    container.style.backgroundColor = 'white';
    container.style.backgroundSize = "30px 30px";
    container.style.width = '26px';
    container.style.height = '26px';
    container.onmouseover = function() {
      container.style.backgroundColor = 'tomato';
    }
    container.onmouseout = function() {
      container.style.backgroundColor = 'white';
    }
    container.onclick = function() {
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

  L.marker(e.latlng).addTo(map)
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
 */
var hashtagControl = L.Control.extend({
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

map.addControl(new hashtagControl());
/**
 *END Function SearchBar Hashtag
 */

var urlAjax = "https://myprovence.code4marseille.fr/info/api";

function submitQuestion() {
  var titre = document.querySelector("input[name='titre']").value;
  var description = document.querySelector("textarea[name='description']").value;
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
    .then(function(response) {
      console.log(response);
      // SI ON VEUT GERER DU JSON
      // ON VA TRANSFORMER LE RESULTAT EN OBJET JSON
      return response.json();
    })
    .then(function(objetJson) {
      console.log(objetJson);
    });
  var question = [{
    lat: lat,
    lng: lng,
    url: "media/mapicons/question.png",
    caption: description,
    thumbnail: "media/mapicons/question.png",
    icon: question,
    lien: lien.replace('/api/infos/', 'https://myprovence.code4marseille.fr/info-public/')
  }];
  questionLayer.add(question).addTo(map);
}
