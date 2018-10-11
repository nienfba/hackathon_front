var myMarkerFeatures = [];
var $selectFeature = null;
var $fl = null; // $(".featureList");
var fltop = 40;


var getIcon = function(feature) {
  res = {
    'fas': true,
    'fa-2x': true
  };

  if (feature.icon) res["fa-" + feature.icon] = true;
  return res;
}

var markerMouseOver = function(event) {
  if ($selectFeature) {
    $selectFeature.removeClass("selected");
  }
  var featureId = this.feature.id;
  var featureSelector = '.feature[data-id="' + featureId + '"]';
  $selectFeature = $(featureSelector);
  if ($selectFeature.length > 0) {
    $selectFeature.addClass("selected");
    var selPos = $selectFeature.position();

    // animation relative sur la position scrolltop
    $fl.stop().animate({
      scrollTop: '+=' + (selPos.top - fltop) + 'px'
    });
  }
};

var myUpdateMap = function(app) {
  console.log("myUpdateMap");
  bounds = app.map.getBounds();
  //console.log(bounds);
  //console.log(myMarkerFeatures);
  app.nbFeatureVisible = 0;
  app.myMarkerFeatures.forEach((feature) => {
    var flatlong = feature.leafletObject.getLatLng();
    if (!bounds.contains(flatlong)) {
      feature.isOut = true;
      // console.log('OUT');
      // console.log(feature.name);
    } else {
      feature.isOut = false;
      app.nbFeatureVisible++;
      feature.indice = app.nbFeatureVisible;
    }
  });
}

var myApp = new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    map: null,
    tileLayer: null,
    myMarkerFeatures: [],
    markerSelect: null,
    layers: tabFeatures,
    nbFeatureVisible: 0,
  },
  mounted() {
    this.initMap();
    this.initLayers();
    myUpdateMap(this);
  },
  computed: {
    nbVisible: function() {
      return this.nbFeatureVisible;

      if (this.myMarkerFeatures != null)
        return this.myMarkerFeatures.length;
      else
        return 0;
    },
  },
  methods: {

    featureMouseOver(event) {
      // this est VueJS...
      // console.log(event.target);
      if (event.target != this.markerSelect) {
        var curId = event.target.getAttribute("data-id");
        this.myMarkerFeatures.forEach((feature) => {
          if (feature.id == curId) {
            // console.log(feature);
            if (this.markerSelect != null) {
              L.DomUtil.removeClass(this.markerSelect._icon, 'selected');
            }
            this.markerSelect = feature.leafletObject;
            L.DomUtil.addClass(this.markerSelect._icon, 'selected');
          }
        });
      }
    },
    layerChanged(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);

      layer.features.forEach((feature) => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
    initLayers() {
      this.layers.forEach((layer) => {
        var markerFeatures = layer.features.filter(feature => feature.type === 'marker');


        markerFeatures.forEach((feature) => {
          var popupContent = feature.publicationDate +
            ' <span>* de ' + feature.username + '</span>' +
            '<br><a href="' +
            feature.urlInfo +
            '">' +
            feature.name + '</a>' +
            '<div>' + feature.description + '</div>';
          // AJOUT IMAGE MINI
          if (feature.urlMini)
            popupContent = popupContent + '<img src="' + baseUrlMini + feature.urlMini + '">';
          var icon = "star";
          if (feature.icon) icon = feature.icon + '';
          var myIcon = L.divIcon({
            html: '<i class="fa-2x fas fa-' + icon + '"></i>',
            className: 'my-icon'
          });

          feature.leafletObject =
            L.marker([feature.lat, feature.lon], {
              icon: myIcon
            }) //  feature.coords)
            .bindPopup(popupContent)
            .addTo(this.map); // MONTRER SUR LA CARTE
          feature.leafletObject.on("mouseover", markerMouseOver);
          // POUR REVENIR DU MARKER VERS LE FEATURE
          feature.leafletObject.feature = feature;
        });
        // LH HACK
        console.log("initLayers");
        console.log(markerFeatures);
        if (markerFeatures.length > 0)
          this.myMarkerFeatures = markerFeatures;
      });
    },
    initMap() {
      this.map = L.map('map').setView([43.3, 5.4], 10);
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );

      this.tileLayer.addTo(this.map);

      $fl = $(".featureList");

      updateMapEnd = function(event) {
        bounds = this.getBounds();
        //console.log(myMarkerFeatures);
        myApp.nbFeatureVisible = 0;
        myApp.myMarkerFeatures.forEach((feature) => {
          var flatlong = feature.leafletObject.getLatLng();
          if (!bounds.contains(flatlong)) {
            feature.isOut = true;
          } else {
            feature.isOut = false;
            myApp.nbFeatureVisible++;
            feature.indice = myApp.nbFeatureVisible;
          }
        });

        // ATTENDRE QUE VUEJS FASSE LA MODIF DU DOM...
        Vue.nextTick(function() {
          // console.log("update animation...");
          if ($selectFeature.length > 0) {
            $fl.stop(); // stop ongoing animation
            // update scroll position if list changed after map move
            var selPos = $selectFeature.position();
            // animation relative sur la position scrolltop
            $fl.animate({
              scrollTop: '+=' + (selPos.top - fltop) + 'px'
            });
          }
        });


      }

      this.map.on("zoomend", updateMapEnd);

      this.map.on("moveend", updateMapEnd);
    },
  },
});