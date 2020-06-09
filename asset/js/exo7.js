$(document).ready(function(){
    $("#btn1").click(function(){
        $("#form").append(
            "    <label for=\"\">Nom</label>\n" +
            "    <input type=\"text\" id=\"nom\" placeholder=\"Ex : Doe\">\n" +
            "\n" +
            "    <label for=\"\">Prénom</label>\n" +
            "    <input type=\"text\" id=\"prenom\" placeholder=\"Ex : John\">\n" +
            "\n" +
            "    <button onclick=\"getValue()\">Valider</button>");
    });
});

function getValue() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    alert(nom + prenom);
}

