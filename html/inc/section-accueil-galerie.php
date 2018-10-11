<style>
    ul.listeInfo {
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        width: 60%;
        justify-content: center;
    }

    ul.listeInfo li {
        width: 160px;
    }*/
</style>

<section class="container-fluid">
    <div class="row">
        <div class="col-sm-12">
            <ul class="listeInfo">
                <!-- ICI ON VA CREER UNE BALISE li PAR INFO RECUPERE -->
            </ul>
            <script>
                var appelAjax = function (urlApiAjax, callbackJson) {
                    // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
                    fetch(urlApiAjax)
                        .then(function (data) {
                            // DEBUG
                            console.log(data);
                            // ON VEUT RECEVOIR UN OBJET JAVASCRIPT
                            return data.json();
                        })
                        .then(callbackJson)
                }

                // URL API AJAX
                var urlApiAjax = 'https://myprovence.code4marseille.fr/api/instas?itemsPerPage=24';
                var ajouterImage = function (objetJS) {
                    console.log(objetJS);
                    // CA Y'EST J'AI UN OBJET JS AVEC TOUTES INFOS PLANQUEES DEDANS...
                    // IL FAUT ALLER RECUPERER LES INFOS QUI NOUS INTERESSENT
                    var tableauInfo = objetJS["hydra:member"];
                    // objet.propriete OU objet["propriete"]
                    // BOUCLE POUR PARCOURIR LES INFOS UNE PAR UNE
                    for (var index = 0; index < 10; index++) {
                        var infoCourante = tableauInfo[index];
                        console.log(infoCourante);
                        var link = infoCourante.link;
                        var thumbnail = infoCourante.thumbnail;
                        var lowResolution = infoCourante.lowResolution;
                        var standardResolution = infoCourante.standardResolution;
                        if (link) {
                            var baliseUl = document.querySelector("ul.listeInfo");
                            // DOM Document Object Model
                            // AJOUTER UNE BALISE li
                            var codeHtmlLi = '<li class="">' +
                                '<a href="' + link + '">' +
                                '<img class="img-fluid" src="' + standardResolution + '">' +
                                '</a>' +
                                '</li>';
                            // AJOUTER NOTRE CODE POUR LA BALISE li DANS LA BALISE ul
                            baliseUl.innerHTML += codeHtmlLi;
                        }
                    }

                }
                appelAjax(urlApiAjax, ajouterImage);
            </script>
        </div>
    </div>
</section>
