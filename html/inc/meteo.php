<ul class='listeInfoMeteo'></ul>
<p class='listeInfoMeteo'></p>

       <script>
// URL API AJAX
var lat = 43.3;
var lng = 5.4;
var city = "Marseille";
var urlApiAjax = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lng + '&units=metric&appid=ee3abf652133c6c47b5daef91a31b166';
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
fetch(urlApiAjax)
.then(function(data){
// ON VEUT RECEVOIR UN OBJET JAVASCRIPT
    return data.json();
})
.then(function(objetJS){
console.log(objetJS);
// CA Y'EST J'AI UN OBJET JS AVEC TOUTES INFOS PLANQUEES DEDANS...
// IL FAUT ALLER RECUPERER LES INFOS QUI NOUS INTERESSENT
// objet.propriete OU objet["propriete"]
// BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
  var tableauWeather = objetJS['list'];

  //recup des DATAs
  var listWeather = {};
  for(var index=0; index < tableauWeather.length; index++) {
    var infoWeather = tableauWeather[index];
    //RECUP DATA DE
    var dateOb = new Date(infoWeather.dt_txt);
    var day = dateOb.getDate();
    var month = dateOb.getMonth();
    var date = day + "/" + month;
    var tempMin = infoWeather.main.temp_min;
    var tempMax = infoWeather.main.temp_max;
    var humidity = infoWeather.main.humidity;
    var windSpeed = infoWeather.wind.speed;
    var windDeg = infoWeather.wind.deg;
    var icon = infoWeather.weather[0].icon;
  //DATA PAR JOUR DANS ListWeather
    if (!(date in listWeather)){
      listWeather[date] = {icon : [icon], tmin : [tempMin],
        tmax : [tempMax], windS : [windSpeed], windD : [windDeg], humid : [humidity]};
    } else {
        listWeather[date].icon.push(icon);
        listWeather[date].tmin.push(tempMin);
        listWeather[date].tmax.push(tempMax);
        listWeather[date].humid.push(humidity);
        listWeather[date].windS.push(windSpeed);
        listWeather[date].windD.push(windDeg);
      }
    }
console.log(listWeather);
//RECUPERATION DATA POUR L'AFFICHAGE
  var tempMinScreen = [];
  var tempMaxScreen = [];
  var windMaxScreen = [];
  var windDegScreen = [];
  var iconScreenDay = [];
  var humidScreen = [];

  for (var date in listWeather) {
    var dateWeather = listWeather[date];
    humidScreen.push(dateWeather.humid);
    var tempMinS = Math.min(...dateWeather.tmin.map(x => parseFloat(x)));
    tempMinScreen.push(tempMinS.toFixed(1));
    var tempMaxS = Math.max(...dateWeather.tmax.map(x => parseFloat(x)));
    tempMaxScreen.push(tempMaxS.toFixed(1));
    var windMaxS = Math.max(...dateWeather.windS.map(x => parseFloat(x)));
    windMaxScreen.push((windMaxS * 3.6).toFixed(1));
    var windDeg = Math.min(...dateWeather.windD.map(x => parseFloat(x)));
    windDegScreen.push(windDeg);
    var iconS = Object.values(dateWeather.icon);
    iconScreenDay.push(iconS);
  }
//recuperation des heures et icon par relever
  var infoH = {};
  for(var index=0; index < tableauWeather.length; index++) {
    var infoHours = tableauWeather[index];
    var dateHour = new Date(infoHours.dt_txt);
    var hour = dateHour.getHours();
    var iconHour = infoHours.weather[0].icon;
    if (!(dateHour in infoH)){
      infoH[dateHour] = {hour : [hour], iconH : [iconHour]};
    } else {
        infoH[dateHour].hour.push(hour);
        infoH[dateHour].iconH.iconHour;
      }
  }

   var screenHour = [];
  for (var dateHour in infoH) {
    var h = infoH[dateHour];
    screenHour.push(h.hour);
    screenHour.push(h.iconH);
  }
  var dayLet = {0:'dim.',1:'lun.',2:'mar.',3:'mer.',4:'jeu.',5:'ven.',6:'sam.'};
  var today = new Date();
  var dayNum = today.getDay();

  var baliseUl = document.querySelector("ul.listeInfoMeteo");
  // DOM Document Object Model
  // AJOUTER UNE BALISE li


     var codeHtmlLi = '<div class = "border">'
                        + '<div class="meteo-flex-title padding-side">' + city
                        + '</div>' +
                        '<div class="meteo-flex-head padding-botom" >'
                          + '<div class="meteo-index padding-side ">' + dayLet[dayNum] + ' ' + day  + '</div>'
                          + '<div class="meteo-index padding-side padding-botom">' + '<img class="meteo-icon-day" src="https://openweathermap.org/img/w/'+ iconScreenDay[0][0] + '.png">' + tempMaxScreen[0] + '°C' + '</div>'
                          + '<div class="meteo-index padding-side d-none d-sm-block">'+ 'vent '+ ' ' + windMaxScreen[0] + ' ' + 'km/h' + '<br>' + 'humidité :' + humidity + '%' + '</div>'
                        + '</div>' +
                        '<div class="meteo-flex padding-botom">'
                          + '<div class="meteo-index d-none d-sm-block ">' +'<img src="https://openweathermap.org/img/w/'+ screenHour[1] + '.png">' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' +'<img src="https://openweathermap.org/img/w/'+ screenHour[3] + '.png">' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' +'<img src="https://openweathermap.org/img/w/'+ screenHour[5] + '.png">' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' +'<img src="https://openweathermap.org/img/w/'+ screenHour[7] + '.png">' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' +'<img src="https://openweathermap.org/img/w/'+ screenHour[9] + '.png">' + '</div>'
                        + '</div>' +
                        '<div class = "meteo-flex padding-botom" >'
                          + '<div class="meteo-index d-none d-sm-block">' + screenHour[0] + ':' + '00' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + screenHour[2] + ':' + '00' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + screenHour[4] + ':' + '00' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + screenHour[6] + ':' + '00' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + screenHour[8] + ':' + '00' + '</div>'
                        + '</div>' +
                      '</div>' +
                      '<div class = "border">'
                        + '<div class = "meteo-flex padding-top">'
                          + '<div class="meteo-index">' + dayLet[(dayNum+1)%7] + '</div>'
                          + '<div class="meteo-index">' + dayLet[(dayNum+2)%7] + '</div>'
                          + '<div class="meteo-index">' + dayLet[(dayNum+3)%7] + '</div>'
                          + '<div class="meteo-index">' + dayLet[(dayNum+4)%7] + '</div>'
                        + '</div>'
                        + '<div class = "meteo-flex">'
                          + '<div class="meteo-index">' + '<img src="https://openweathermap.org/img/w/'+ iconScreenDay[1][4] + '.png">' + '</div>'
                          + '<div class="meteo-index">' + '<img src="https://openweathermap.org/img/w/'+ iconScreenDay[2][4] + '.png">' + '</div>'
                          + '<div class="meteo-index">' + '<img src="https://openweathermap.org/img/w/'+ iconScreenDay[3][4] + '.png">' + '</div>'
                          + '<div class="meteo-index">' + '<img src="https://openweathermap.org/img/w/'+ iconScreenDay[4][4] + '.png">' + '</div>'
                        + '</div>' +
                        '<div class = "meteo-flex" >'
                          + '<div class="meteo-index d-none d-sm-block">' + tempMaxScreen[1] + '°' + ' / ' + tempMinScreen[1] + '°' +  '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + tempMaxScreen[2] + '°' + ' / ' + tempMinScreen[2] + '°' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + tempMaxScreen[3] + '°' + ' / ' + tempMinScreen[3] + '°' + '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + tempMaxScreen[4] + '°' + ' / ' + tempMinScreen[4] + '°' + '</div>'
                        + '</div>' +
                        '<div class = "meteo-flex" >'
                          + '<div class="meteo-index d-none d-sm-block">' + ' vent '+ ' ' + windMaxScreen[1] + ' ' + 'km/h' +  '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + ' vent '+ ' ' + windMaxScreen[2] + ' ' + 'km/h' +  '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + ' vent '+ ' ' + windMaxScreen[3] + ' ' + 'km/h' +  '</div>'
                          + '<div class="meteo-index d-none d-sm-block">' + ' vent '+ ' ' + windMaxScreen[4] + ' ' + 'km/h' +  '</div>'
                        + '</div>' +
                      '</div>';



// AJOUTER NOTRE CODE POUR LA BALISE li DANS LA BALISE ul
  baliseUl.innerHTML += codeHtmlLi;

})
      </script>
