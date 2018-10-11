var lat;
var lng;


jQuery(document).ready(function() {
      //alert('ok');
      /*
       *Initialisation de la map
       */
      var carte = L.map('macarte').setView([43.3, 5.4], 12);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(carte);

      $('.myPosition').on('click', () => {
        carte.locate({
          setView: true,
          maxZoom: 16
        });
      });

      // zoom the map to that bounding box
      map.fitBounds(bounds);

      function onLocationFound(e) {
        var radius = e.accuracy / 2;

        L.marker(e.latlng).addTo(carte)
          .bindPopup("Vous êtes à " + radius + " métres de ce point!").openPopup();

        L.circle(e.latlng, radius).addTo(carte);
      }

      carte.on('locationfound', onLocationFound);

      $(document).ready(function() {
        var markers = [], // an array containing all the markers added to the map
          markersCount = 0; // the number of the added markers


        var question =
          '<form class="formQuestion" action="" method="post">' +
          '<div class="glyph">' +
          '<i class="fa fa-question"></i>' + '</div>' +
          '<div class="choice">' +
          '<input type="text" name="titre" value="">' +
          '</div>' +
          '<div class="textarea">' +
          '<textarea name="description" rows="8" cols="12"></textarea>' +
          '</div>' +
          '</form><button id="sendQuestion" onclick="submitQuestion();">Submit</button>' + '<p>' + '</p>';
        // Dragging and dropping the markers to the map
        var addMarkers = function() {
          // The position of the marker icon
          var posTop = $('.draggable-marker').css('top'),
            posLeft = $('.draggable-marker').css('left');

          $('.draggable-marker').draggable({
            stop: function(e, ui) {
              // returning the icon to the menu
              $('.draggable-marker').css('top', posTop);
              $('.draggable-marker').css('left', posLeft);

              var coordsX = event.clientX - 50, // 50 is the width of the menu
                coordsY = event.clientY + 20, // 20 is the half of markers height
                point = L.point(coordsX, coordsY), // createing a Point object with the given x and y coordinates
                markerCoords = carte.containerPointToLatLng(point), // getting the geographical coordinates of the point

                // Creating a custom icon
                IconQuestion = L.icon({
                  iconUrl: 'images/marker-icon.png', // the url of the img
                  iconSize: [20, 40],
                  iconAnchor: [10, 40] // the coordinates of the "tip" of the icon ( in this case must be ( icon width/ 2, icon height )
                });

              lat = markerCoords.lat;
              lng = markerCoords.lng;


              // Creating a new marker and adding it to the map
              markers[markersCount] = L.marker([markerCoords.lat, markerCoords.lng], {
                draggable: false,
                icon: IconQuestion

              }).bindPopup(question).addTo(carte).openPopup();

              markersCount++;


            }
          });

        }

        //initMap();
        addMarkers();

      });
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
      }
