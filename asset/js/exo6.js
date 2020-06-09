/*exo 6*/
$(document).ready(function () {
    $('#go').click(function () {
        $('.gauche').animate({
            'left': '100px'
        }, 1000)
        $('.droite').animate({
            'right': '100px'
        }, 1000)
        $('.haut').animate({
            'top': '100px'
        }, 1000)
        $('.bas').animate({
            'bottom': '100px'
        }, 1000)
        $('.bonusLeft').animate({
            'right': '200px'
        }, 3000)
        $('.bonusRight').animate({
            'left': '200px'
        }, 3000)
        $('.bonusTop').animate({
            'bottom': '200px'
        }, 3000)
        $('.bonusBottom').animate({
            'top': '200px'
        }, 3000)
    })
});
