/* Autres fonctionnalités de la page d'accueil à commenter et vérifier si encore utiles */

$("#hashtag").click(function () {
    //clearInterval(reloadInstaMap);
    if ($("#inputHashtag").val().length > 2) {
      //clearInterval(reloadInstaMap);
      hashtag = $("#inputHashtag").val();
      arrayTagInsta = [hashtag];
      map.removeLayer(photoLayer);
      initLayerMapInsta();
      ajaxMap();
    } /*else {
      console.log('reload');
      reloadMap();
    }*/
  });


$("#hashtagReset").click(function () {

  console.log('reload');
  $("#inputHashtag").val('');
  arrayTagInsta = ['code4marseille','myprovence'];
  map.removeLayer(photoLayer);
  initLayerMapInsta();
  ajaxMap();
  //reloadMap();
    /*if ($("#inputHashtag").val().length > 2) {
        hashtag = $("#inputHashtag").val();
        idInsta = [];
        map.removeLayer(photoLayer);*/
        /*photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
            evt.layer.bindPopup(L.Util.template('<img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
                className: 'leaflet-popup-photo',
                minWidth: 400
            });
        });*/
        //ajaxMap(hashtag);
    /*} else {
        hashtag = "code4marseille";
        idInsta = [];
        map.removeLayer(photoLayer);*/
        /*photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
            evt.layer.bindPopup(L.Util.template('<img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
                className: 'leaflet-popup-photo',
                minWidth: 400
            });
        });*/
       /* ajaxMap(hashtag);
    }*/
});
  
  $("#showOverlay").click(function () {
    if ($(".overlay-box").is(":visible")) {
      $(".overlay-box").hide();
    } else {
      $(".overlay-box").show();
    }
  });
  
  $("#showRight").click(function () {
    if ($("#navRight").is(":visible")) {
      $("#navRight").hide();
    } else {
      $("#navRight").show();
    }
  });
  
  var hauteur = (document.body.clientWidth);
  
          /*$("#UpPage").click(function () {
           if (page = 3) {
           anime({
           targets: '.WallOfPictures',
           translateY: 2500
           });
           anime({
           targets: '#navBottom',
           translateY: 50
           });
           page = 2;
           }
         });*/
  
  
  //SCRIPT DANIEL ACCUEIL.PHP
  $(document).ready(function () {
    $.fn.delay = function (time, callback) {
      jQuery.fx.step.delay = function () {};
      return this.animate({
        delay: 1
      }, time, callback);
    }
  
    $.getJSON('html/inc/accueil.json', function (data) {
      var idPhoto=0;
      //$('#lieux').delay(3000, function () {
      window.setInterval(function () {
        //$.each(data, function (index, d) {
          //console.log('tt');
          $('#lieux').html(data[idPhoto].hashtag);
          $('article').css('background-image', 'url(' + data[idPhoto]
            .image + ')');
          if(idPhoto < data.length-1)
            idPhoto++;
          else
            idPhoto = 0;
        },3000);
  
          // var alternate = anime({
          //   targets: '#alternate .el',
          //   translateX: -950,
          //   direction: 'alternate'
          // });
  
        // });
      });
    });
  
  // });
  
  //var urlApiAjax = 'https://myprovence.code4marseille.fr/api/instas?itemsPerPage=24';
  var urlApiAjax = 'http://myprovence.code4marseille.fr/api/instas?tags=code4marseille&itemsPerPage=100';
  var appelAjax = function (urlApiAjax, callbackJson)
  {
      // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
      fetch(urlApiAjax)
      .then(function (data) {
                  // ON VEUT RECEVOIR UN OBJET JAVASCRIPT
                  return data.json();
                })
      .then(callbackJson)
    }
  

  
  // URL API AJAX
  var ajouterImage = function (objetJS)
  {
    // CA Y'EST J'AI UN OBJET JS AVEC TOUTES INFOS PLANQUEES DEDANS...
    // IL FAUT ALLER RECUPERER LES INFOS QUI NOUS INTERESSENT
    var tableauInfo = objetJS["hydra:member"];
    //console.log(tableauInfo);
    //Tri du tableau last POST Insta
    tableauInfo.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      //console.log(new Date(b.createdTime*1000));
      return new Date(a.createdTime*1000)- new Date(b.createdTime*1000);
    });
    // objet.propriete OU objet["propriete"]
    // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
    //console.log(tableauInfo.length-1);
    for (var index = tableauInfo.length-1; index > tableauInfo.length-11; index--) {
      var infoCourante = tableauInfo[index];
        //onsole.log(infoCourante);
        var link = infoCourante.link;
        var thumbnail = infoCourante.thumbnail;
        var lowResolution = infoCourante.lowResolution;
        var standardResolution = infoCourante.standardResolution;
        if (link) {
          var baliseUl = document.querySelector("div.liste");
            // DOM Document Object Model
            // AJOUTER UNE BALISE li
            var codeHtmlLi = '<a href="' + link + '"><div class="listeInfo img-thumbnail miniatures" style="background-image:url(' + standardResolution + ');background-size:cover;background-position:center center";></div></a>';
            // AJOUTER NOTRE CODE POUR LA BALISE li DANS LA BALISE ul
            //baliseUl.innerHTML += codeHtmlLi;
            baliseUl.innerHTML += codeHtmlLi;
          }
          animWall();
        }
  
      }
      appelAjax(urlApiAjax, ajouterImage);
  
      // ANIMATIONS DES PHOTOS DU WALLOFPICTURE
      // Non utilisé !
      function animWall() {
        let bars = document.querySelectorAll('.listeInfo')
        const NUM_ELEMENTS = bars.length
        const BAR_ANIM_DURATION = 2.65
  
        bars.forEach((bar, index) => {
  
  
              // Set 'animation-duration'
              bar.style.animationDuration = `${BAR_ANIM_DURATION}s`
  
              // Calculate Staggered Delay
              let barDelay = index * (BAR_ANIM_DURATION / NUM_ELEMENTS) * 2
  
              // Set Staggered Delay
              bar.style.animationDelay = `${barDelay}s`
  
              bar.classList.add("animWall");
            })
      }


//TEMP ANIMATION FIESTA DES SUDS
/*
var fds  = L.marker([43.29989228243306, 5.362647771835327], {
  icon: L.icon({
    iconUrl: 'media/icons/fds.png',
    iconSize: [60, 60],
    iconAnchor: [40, 40],
    className: 'leaflet-marker-blink'
  })
}).addTo(map);

fds.bindPopup('<h4>Evènement ce soir !</h4><p style="text-align:center"><img src="media/icons/fds.png" /><iframe width="280" height="160" src="https://www.youtube.com/embed/d2Iio5afp3w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p><p><a href="http://www.dock-des-suds.org/fiesta2018/" target="_blank">Découvrir l\'événement >></a>');
*/

