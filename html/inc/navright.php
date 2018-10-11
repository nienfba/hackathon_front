


<div id="navRight" class="bounceIn animated" style="color:white;">

    live : <input type="checkbox" id="live" checked/><br>

    <?php
    $filtres = [
        'child' => 'child',
        'cocktail' => 'cocktail',
        'eye' => 'eye',
        'thumbs-up' => 'thumbs-up',
        'umbrella-beach' => 'umbrella-beach',
        'swimmer' => 'swimmer',
        'futbol' => 'futbol',
        'fish' => 'fish',
        'kiwi-bird' => 'kiwi-bird',
        'smile' => 'smile',
        'camera' => 'camera',
        'question' => 'question'
    ];


    foreach ($filtres as $filtre) {
        ?>
        <?= $filtre ?> : <input type="checkbox" onclick="filtre('<?= $filtre ?>')" checked/><br>
        <?php
    }
    ?>

</div>
