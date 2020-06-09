<?php
include('../inc/header.php');
?>

<h2>Exercice 8</h2>
<p>Faire un shifumi</p>

<section class="jeu">
    <div class="score">
        <div class="joueur-score">
            <h2>Joueur</h2>
            <p>0</p>
        </div>
        <div class="ordi-score"  >
            <h2>Ordinateur</h2>
            <p>0</p>
        </div>
    </div>

    <div class="intro">
        <h1>Pierre Feuille Ciseaux</h1>
        <button>Jouer</button>
    </div>
    <div class="match fadeOut">
      <h2 class="winner">Faites votre choix</h2>
        <div class="choix">
            <img class="choix-joueur" src="../asset/img/pierre.png" alt="">
            <img class="choix-ordinateur" src="../asset/img/pierre.png" alt="">
        </div>
        <div class="options">
            <button class="pierre">pierre</button>
            <button class="feuille">feuille</button>
            <button class="ciseaux">ciseaux</button>

        </div>
    </div>
</section>



<footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script
        src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
        crossorigin="anonymous">

    </script>


    <script src="../asset/js/exo8.js">
    </script>

    </body>
    </html>
</footer>