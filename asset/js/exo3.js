/*exo 3*/
var affichage = document.getElementById('affichage');
var tableau = document.getElementsByClassName('tableau');

for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].className == 'tableau ete') {
        tableau[i].addEventListener("click", function () {
            affichage.style.backgroundImage = "url(../asset/img/ete.jpg)"
        })
    }
    if (tableau[i].className == 'tableau automne') {
        tableau[i].addEventListener("click", function () {
            affichage.style.backgroundImage = "url(../asset/img/automne.jpg)"
        })
    }
    if (tableau[i].className == 'tableau hiver') {
        tableau[i].addEventListener("click", function () {
            affichage.style.backgroundImage = "url(../asset/img/hiver.jpg)"
        })
    }
    if (tableau[i].className == 'tableau printemps') {
        tableau[i].addEventListener("click", function () {
            affichage.style.backgroundImage = "url(../asset/img/printemps.jpg)"
        })
    }

}
