/*exo 5*/
$(document).ready(function () {
    $('#cacher').click(function () {
        $('#coucou').css({
                'display': 'none',
            }
        );
    });
    $('#afficher').click(function () {
        $('#coucou').css({
            'display': 'block',
            'color': 'pink',
        });
    });
});
