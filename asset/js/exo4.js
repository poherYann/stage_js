/*exo 4*/
$(document).ready(function () {
    $('#moins').click(function () {
        $('#boostme').css({
                'width': '-=100px',
                'height': '-=100px',
                'background': 'blue',
            }
        );
    });
    $('#plus').click(function () {
        $('#boostme').animate({
            'height': "+=200px",
            'width': "+=200px"
        }).css({
            'background': 'red',
        });
    });
});