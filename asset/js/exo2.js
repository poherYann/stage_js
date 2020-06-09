// exo 2

var texte = document.getElementById('texte');
var couleur = document.getElementsByClassName('box_couleur');

for (var i = 0; i < couleur.length; i++) {
    if (couleur[i].className == 'box_couleur bleu') {
        couleur[i].addEventListener("click", function () {
            texte.style.color = 'blue'
        })
    }
    if (couleur[i].className == 'box_couleur rose') {
        couleur[i].addEventListener("click", function () {
            texte.style.color = 'deeppink'
        })
    }
    if (couleur[i].className == 'box_couleur vert') {
        couleur[i].addEventListener("click", function () {
            texte.style.color = 'lime'
        })
    }
}