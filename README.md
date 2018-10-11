# Hackathon Frioul ![CI status](http://myprovence.code4marseille.fr/media/logo/code4marseille.png)

Code4Marseille est une association composée de 3 écoles de formation en web developpement : Le Wagon, Webforce3 et Simplon.

L'objectif du Hackaton est de montrer la force de ces 3 formations a coder ensemble un projet en peu de temps. Ce projet, a destination des touristes désirant découvrir la magnifique région de Marseille et de ces environs, a une dimension temps réel et une dimension de partage entre utilisateurs non négligeable.

## Requirements
* Apache
* Visual Studio, Sublime Text ou Atom
* MySql
* phpMyAdmin
* Php > 7.1.3
* Composer 1.7.2
* Git

## Installation des outils

Selon votre système installez Mamp ou Wamp (version 64bits) et pensez à sélectionner une version de PHP > à 7.1.3

Installez "Composer" soit directement sur votre machine Windows en installant l’exécutable soit en utilisant le fichier composer.phar à la racine de votre projet. 
Voir le site [Composer](https://getcomposer.org/download/)

Installez la prise en charge de Git en ligne de commande [GIT](https://git-scm.com/downloads)

Vous pouvez tester vos version de PHP et Composer :
`$ composer -V`
`$ php -v`
Si ces deux lignes de commandes vous renvoient des informations tout est OK !

### ATTENTION : le backend et le frontend sont dissociées techniquement. Le Front utilise Javascript/Ajax/HTML/CSS, le backend est codé en PHP/SYMFONY !

## Installation du Front

* Installez WAMP ou LAMP sur votre machine. 
* Dans le répertoire du serveur Web local, créez un répertoire pour le projet front (ex : hackathon_front)
* Cloner le dépôt distant avec `$ git clone https://github.com/nienfba/hackathon_front.git`
* Vous êtes prêt à utilisez le Front, connectez vous à votre dossier à partir de localhost (ex : http://localhost/hackthon_front)

# POUR CE MATIN VALIDEZ LE BON FONCTIONNEMENT DE WAMP/MAMP, phpMyadmin, Composer et Git en ligne de commande. 

## Installation du Back

* Dans le répertoire du serveur Web local, créez un répertoire pour le projet back (ex : hackathon_back)
* Cloner le dépôt distant avec `$ git clone https://github.com/nienfba/hackathon_back.git`
* Maintenant il s'agit d'installer Symfony et ses dépendances, la base de données et d'y injecter le contenu pour celà :
 * `$ composer update` ou `$php composer.phar update`. Cette commande peut prendre plusieurs minutes :(
 * une fois le framework et ses dépendances mises à jour, modifier le fichier .env à la racine. Trouvez le ligne `$ DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name` 
Remplacez db_user et db_password et db_name par vos valeurs locales. Pour une installation standard de Wamp ou Mamp (ici le mot de passe est vide et la base s'appelle hackathon !!) : 
`$ DATABASE_URL=mysql://root:@127.0.0.1:3306/hackthon`
 * Nous allons maintenant créer la base de données, c'est automatique avec symfony !!:
`$ php bin/console database:create`
 * Puis créer les tables de la bases :
 `$ php bin/console make:migration`
 `$ php bin/console doctrine:migrations:migrate`
Il faut répondre "y" à la question "WARNING ! ...."
 * Puis nous allons insérer les données dans la base : 
 `$ php bin/console doctrine:fixtures:load`
Répondre "y" à la question "WARNING ! ...."
* OUF ! All is done !! Go to Work ;)

Connectez-vous sur http://localhost/hackaton_back/public/api/ pour tester !!


## API : Travailler sur le front et sur le back 

Pour travailler sur le front vous avez accès aux pages, css, js... etc. Ouvrez directement ses fichiers dans votre éditeur de texte favoris (Visual Studio Code, Atom ou Sublim, ou à la votre !). 
Pour la gestion des données, de la base de données... etc... c'est le back qui vous fourni tout ça à travers une API ! Pour découvrir cette API rendez-vous à l'adresse http://localhost/hackaton_back/public/api/

Sauf si votre projet le nécessite, vous n'avez normalement pas à utiliser Symfony et à coder de PHP, tout se passe à travers l'API. A partir du Front vous devez effectuer des requête AJAX en GET ou POST vers l'API. Des données transites alors en JSON pour l'affichage côté Front ou l'enregistrement en base côté back !

## Travaillez en équipe : utilisez git et github

Commencez par tous vous créer un compte github si ce n'est déjà fait !

* Lors d'une création de projet UNE seule personne doit créer ce que l'on appelle
le repository du projet. DOnc l'un d'entre vous créer ce repository sur son compte github. Les autres seront ensuite collaborateurs.

Pour ceci la personne doit aller dans Github sur son profil et cliquer sur "new"
Elle donne un nom à son projet et doit choisir si le projet est public ou privé ( le privé est payant et coûte environ 7$ par mois ), donc ici public :)

Suivre ensuite le setup explicatif de Github :), pour ceci mettez vous à la racine de votre front local et tapez les lignes de commandes proposées par Github pour initialiser le dépôt Git, ajouter le serveur distant de Github, et pusher tout ça sur Github !

* Ajouter les personnes qui vont participer au projet en allant dans l'onglet settings - collaborators sur Github
( mettre le pseudo GitHub des participants )


* Les participants vont recevoir une invitation par mail de rejoindre le repository. Validez cette demande.

* IL faut ensuite relier votre propre répertoire local du front avec le Github distant. A la racine de votre répertoire Front en ligne de commande tapez :
`$ git init`
`$ git remote add URL_DU_DEPOT_GIT`

* Vous voila en COLABORATION :)

* Dans le but de ne pas perdre le travail de chacun il est OBLIGATOIRE de travailler sur une branche afin de ne pas écraser le travail de chacun
Pour cela le terminal est votre ami :

`$ git branch -b nom-de-votre-branche` ( le nom doit être le plus explicatif possible afin de pouvoir comprendre ce qui est a l'intérieur de la branche et ce même 5 mois après par un inconnu )

Pour voir votre travail sur le master il faut pusher votre branche par cette ligne de commande :

`$ git push origin nom-de-votre-branche`

* Il faut ensuite créer une pull request sur GitHub afin de savoir si il y a des conflits entre vos travaux respectifs sur le repository.

La validation de cette pull request la push automatiquement sur le master.

* Il vous suffit ensuite de faire un git PULL origin master afin de récupérer le master à jour


VOUS VOILA FIN PRÊTS POUR DU BON TRAVAIL DE GROUPE PROPRE !!!!!!!
