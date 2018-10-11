<?php

// AFFICHER LES MESSAGES D'ERREURS
error_reporting(E_ALL);
ini_set('error_display', 1);

class PageBuilder
{
    function __construct ()
    {
    }

    function __destruct ()
    {
        global $tabSection;
        if (empty($tabSection)) return;
        
        foreach($tabSection as $section) 
        {
            $sectionFichier = __DIR__ . "/../$section";
            if (is_file($sectionFichier)) {
                $sectionFichier = realpath($sectionFichier);
                include($sectionFichier); 
            }
            else {
                echo "[ERREUR: FICHIER MANQUANT $sectionFichier]";
            }
        }
    }
    
}


$objPageBuilder = new PageBuilder;
