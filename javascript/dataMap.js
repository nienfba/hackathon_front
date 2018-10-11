// URL API AJAX
var urlApiCat = 'https://myprovence.code4marseille.fr/api/categories';
fetch(urlApiCat)
  .then(function(data) {
    // DEBUG
    //console.log(data);
    // ON VEUT RECEVOIR UN OBJET JAVASCRIPT
    return data.json();
  })
  .then(function(x) {
    //console.log(x);
    // CA Y'EST J'AI UN OBJET JS AVEC TOUTES INFOS PLANQUEES DEDANS...
    // IL FAUT ALLER RECUPERER LES INFOS QUI NOUS INTERESSENT
    var arrayCat = x["hydra:member"];
    // objet.propriete OU objet["propriete"]
    // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
    for (var i = 0; i < arrayCat.length; i++) {
      var listeCat = arrayCat[i];
      //console.log(listeCat);
      var categoryName = listeCat.name;

      var baliseUl = document.querySelector("ul.dropdown-menu");
      // DOM Document Object Model
      // AJOUTER UNE BALISE li
      var codeHtmlLi =
        '<li class="text-center">' +
        '<h3>' + categoryName + '</h3>' +
        '</li>';

      // AJOUTER NOTRE CODE POUR LA BALISE li DANS LA BALISE ul
      baliseUl.innerHTML += codeHtmlLi;

    }

  })