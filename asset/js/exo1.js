// exo 1
var box = document.getElementById("box");
box.addEventListener("mouseover", function () {
    box.style.border = "3px solid black"
});
box.addEventListener("mouseout", function () {
    box.style.border = ""
});

var bordure = document.getElementById("bordure");
bordure.addEventListener("mouseover", function () {
    bordure.style.backgroundColor = "red"
});
bordure.addEventListener("mouseout", function () {
    bordure.style.backgroundColor = ""
});

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
    image.style.backgroundImage = "url('../asset/img/hotline.jpg')"
});
image.addEventListener("mouseout", function () {
    image.style.backgroundImage = ""
});







