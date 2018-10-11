<!DOCTYPE html>
<html lang="fr">

<?php include_once "html/inc/head.php"; ?>


<body class="decouvrir">

	<!----------------------------------- DEBUT  HEADER   --------------------------------------->
	<!-- 	<header class="decouvrir">
				<div class="logo"> <a href="index.php"><img src="media/CODE4MARSEILLE_WHITE.png" alt="" class="logo" /></a></div>
				<nav class="">

						<ul class="">
								<li class=""></li>

						</ul>
				</nav>
		</header> -->
	<!-----------------------------------  FIN  HEADER   ---------------------------------------->



	<!-----------------------------------  DEBUT  MAIN   ---------------------------------------->
<main>

	<div class="container">
		<img class="img-dec" src="media/marseille/le-panier.jpg" alt="">

    <div class="row">
      <div class='col-sm-12 col-lg-6 margin-left'>
      	<h1 >BALADE DANS LE PANIER</h1>
				<p class="colonned">idéal pour la famille</p> <!-- pictogrammes -->
				<p class="colonned">#marseille #panier</p>    <!---- Hachtag ---->
				<p >
					On est dimanche matin et il vous manque le petit bouquet d'aromates
					pour terminer votrebonne daube provençale dont tout le monde raffole?!
					Lemarché de la place Richelme vous attendavec tout les produits du
					terroir, aromates, olives, l'huile d'olive, les tomates séchées,
					les fruits et légumes, les poissons, les bons petits fromages de
					chèvre, le miel, la tapenade ou le caviar d'aubergine pour l'apéro...
				</p>
				<p>
					Sentez-moi ces parfums ! Et à deux pas de là,
					Place des prêcheurs, vous pourrez même acheter un joli bouquet
					de fleurs pour décorer votre table dominicale
				</p>
      </div>
      <div class="col-sm-12 col-lg-6 margin-right">
        <?php include_once "html/inc/meteo.php"; ?>
      </div>
    </div>
						<!-- Vignettes des meilleurs publications -->

    <div class="listePhoto">
  		<h5 >Meilleures Publications</h5>

			<?php include_once "html/inc/social2.php"; ?>
		</div>
								<!-- <div class="col-lg-3 colonnrdimg1"></div>
								<div class="col-lg-3 colonnrdimg2"></div>
								<div class="col-lg-3 colonnrdimg3"></div>
								<div class="col-lg-3 colonnrdimg4"></div>
								<div class="col-lg-3 colonnrdimg5"></div>
								<div class="col-lg-3 colonnrdimg6"></div>
								<div class="col-lg-3 colonnrdimg7"></div>
								<div class="col-lg-3 colonnrdimg8"></div>
								<div class="col-lg-3 colonnrdimg9"></div> -->



		<div class="row">
			<p class="col-lg-12 p-0">
			Si vous souhaitez avoir une de vos images sur le site,
			inscrivez-vous sur Instagrame si ce n'est pas déjà
			fait et publiez une photo en mettant les hastags
			suivants :<strong> #marseille #panier</strong>
			</p>
    </div>

	</div>
</main>
<!-----------------------------------  FIN  MAIN   ---------------------------------------->
</body>
<?php include_once "html/inc/footer.php"; ?>

</html>
