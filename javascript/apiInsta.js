const TIME_UPDATE_INSTA = 30000;
var hashtag = "code4marseille";


//Tous les icones chargés pour toutes les catégories
var idsInfos = [];

//Appeler API Back pour récupérer les icones de toutes les catégories
function ajaxInfos() {
    var UrlApi = "https://myprovence.code4marseille.fr/api/infos";

    fetch(UrlApi)
    .then(function (reponse) {
      return reponse.json();
    })
    .then(function (objetJson) {
      //Nombres de pages à charger
      var LastPage = objetJson['hydra:totalItems'] / 100;
      var NbPages = Math.ceil(LastPage);
      for (var page = 1; page < NbPages + 1; page++) {
        var url = UrlApi + '?page=' + page;
        fetch(url)
        .then(function (response) {
                      // SI ON VEUT GERER DU JSON
                      // ON VA TRANSFORMER LE RESULTAT EN OBJET JSON
                      return response.json();
                    })
        .then(function (objetJson) {
          var tableauInfo = objetJson["hydra:member"];
          console.log(tableauInfo);
          // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
          for (var index = 0; index < tableauInfo.length; index++) {
            var infoCourante = tableauInfo[index];
            if (infoCourante.latitude && infoCourante.longitude) {
              var id = infoCourante["@id"];
                  //Verification d'ajout d'image (live)
                  if (idsInfos.includes(id) == false) {
                    idsInfos.push(id);
                    var image = "";

                    var lien = id;

                    if (infoCourante.icon != null && infoCourante.description != null) {
                      if (infosFiltres.includes(infoCourante.icon)) {
                        var photo = [{
                          lat: infoCourante.latitude,
                          lng: infoCourante.longitude,
                          url: "media/mapiconsfavoris/" + infoCourante.icon + "favoris.png",
                          caption: infoCourante.description,
                          thumbnail: "media/mapiconsfavoris/" + infoCourante.icon + "favoris.png",
                          icon: infoCourante.icon,
                          lien: lien.replace('/api/infos/', 'https://myprovence.code4marseille.fr/info-public/'),
                          image: image,
                          title: infoCourante.title
                        }];
                        if (infoCourante.icon == "question") {
                          if (filtreQuestion) {
                            questionLayer.add(photo).addTo(map);
                          }
                        } else {
                          if (filtreIcon) {
                            iconLayer.add(photo).addTo(map);
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
      }
    });
  }

     


//Id des photos du live insta !
var idInsta = [];
//hashtag = "code4marseille"
function ajaxMap() 
{
  var UrlApi = "https://myprovence.code4marseille.fr/api/instas?tags=code4marseille";  
 
  //console.log(arrayTagInsta);
  for(var cpttag=0; cpttag< arrayTagInsta.length;cpttag++)
  {
    hashtag=arrayTagInsta[cpttag];
    UrlApi = "https://myprovence.code4marseille.fr/api/instas?itemsPerPage=200&tags=" + hashtag; 
    //console.log(UrlApi);
    $.getJSON(UrlApi,function(data){
      //Nombres de pages à charger
      var tableauInfo = data;
      //var LastPage = objetJson['hydra:totalItems'] / 100;
          //console.log(tableauInfo);
          var photos = [];
            // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
          for (var index = 0; index < tableauInfo.length; index++) {
            var infoCourante = tableauInfo[index];

            if (infoCourante.latitude && infoCourante.longitude) {
              var title = infoCourante.title;
              var likes = infoCourante.likes;
              var link = infoCourante.link;
              var latitude = infoCourante.latitude;
              var longitude = infoCourante.longitude;
              var description = infoCourante.caption;
              var publicationDate = infoCourante.publicationDate;
              var image = infoCourante.lowResolution;
              var id = infoCourante.id;
              var username = infoCourante.userUsername;
              if (filtreLive) {
                      //Verification d'ajout d'image (live)
                      //console.log(idInsta)
                      if (idInsta.includes(id) == false) {
                        idInsta.push(id);
                          //Verification si image existe encore
                          var img = new Image();
                          img.myLat = String(latitude);
                          img.myLng = String(longitude);
                          img.myLink = link;
                          img.myDescription = description;
                          img.myLikes = likes;
                          img.myUsername = username;
                          img.onload = function () {
                            var photo = [{
                              lat: this.myLat,
                              lng: this.myLng,
                              url: this.src,
                              caption: this.myDescription,
                              thumbnail: this.src,
                              likes: this.myLikes,
                              link:this.myLink,
                              username: this.myUsername
                            }];
                            photoLayer.add(photo).addTo(map);
                          }
                          img.src = infoCourante.lowResolution;
                        }
                      }
              }
            }
        });

  }
  //console.log(photoLayer);
}

function ajaxMapOLD() 
{
  var UrlApi = "https://myprovence.code4marseille.fr/api/instas?tags=" + hashtag;  
 
  for(var cpttag=0; cpttag< arrayTagInsta.length;cpttag++)
  {
    
    hashtag=arrayTagInsta[cpttag];
    console.log(UrlApi);
    fetch(UrlApi)
    .then(function (reponse) {
    return reponse.json();
    })
    .then(function (objetJson) {
      //Nombres de pages à charger
      var LastPage = objetJson['hydra:totalItems'] / 100;
      var NbPages = Math.ceil(LastPage);

      for (var page = 1; page < NbPages + 1; page++) {

        var url = UrlApi + '&page=' + page;
        fetch(url)
        .then(function (response) {
                      // SI ON VEUT GERER DU JSON
                      // ON VA TRANSFORMER LE RESULTAT EN OBJET JSON
                      return response.json();
                    })
        .then(function (objetJson) {
          var tableauInfo = objetJson["hydra:member"];
          console.log(tableauInfo);
          var photos = [];
            // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
          for (var index = 0; index < tableauInfo.length; index++) {


            var infoCourante = tableauInfo[index];

            if (infoCourante.latitude && infoCourante.longitude) {
              var title = infoCourante.title;
              var likes = infoCourante.likes;
              var link = infoCourante.link;
              var latitude = infoCourante.latitude;
              var longitude = infoCourante.longitude;
              var description = infoCourante.caption;
              var publicationDate = infoCourante.publicationDate;
              var image = infoCourante.lowResolution;
              var id = infoCourante.id;
              var username = infoCourante.userUsername;
              if (filtreLive) {
                      //Verification d'ajout d'image (live)
                      if (idInsta.includes(id) == false) {
                        idInsta.push(id);
                          //Verification si image existe encore
                          var img = new Image();
                          img.myLat = String(latitude);
                          img.myLng = String(longitude);
                          img.myLink = link;
                          img.myDescription = description;
                          img.myLikes = likes;
                          img.myUsername = username;
                          img.onload = function () {
                            var photo = [{
                              lat: this.myLat,
                              lng: this.myLng,
                              url: this.src,
                              caption: this.myDescription,
                              thumbnail: this.src,
                              likes: this.myLikes,
                              link:this.myLink,
                              username: this.myUsername
                            }];
                            photoLayer.add(photo).addTo(map);
                          }
                          img.src = infoCourante.lowResolution;
                        }
                      }
                    }
            }
        });
      }
  });
}
}


//On charge les icone de la carte et on lance l'intervale d'actualisation

var arrayTagInsta = ['code4marseille','myprovence'];
reloadMap();

//Rehcarge les image toutes les 30 secondes
var reloadInstaMap;
function reloadMap()
{
  //first load
  ajaxInfos();
  //initLayerMapInsta();
  ajaxMap();
  //ajaxMap('myprovence');
  reloadInstaMap = setInterval(function () {
      //ajaxMap(hashtag);
      console.log('update');
      ajaxMap();
      ajaxInfos();
  }, TIME_UPDATE_INSTA);
}


function initLayerMapInsta()
{
  idInsta = [];
  photoLayer = L.photo.cluster({spiderfyDistanceMultiplier: 1.6}).on('click', function (evt) {
    evt.layer.bindPopup(L.Util.template('<a href="{link}" target="_blank"><img src="{url}"/><img src="media/icons/logoInsta.png" style="display: inline-block; height: 40px !important; width: 40px !important;"></a><span><b>Photo de {username}</b></span><span style="float:right;"><img id="imgLike" src="media/icons/instaLike.png"/></span><b style="float: right; line-height:28px;">{likes}</b><p>{caption}</p><br><br>', evt.layer.photo), {
        className: 'leaflet-popup-photo',
        minWidth: 400
    });
  });
  //map.addLayer(photoLayer);
}