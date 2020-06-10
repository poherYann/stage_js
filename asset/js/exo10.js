var header = document.querySelector('section');
var section = document.querySelector('.section');

var requestURL = '../files/stage.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
    var superHeroes = JSON.parse(request.responseType);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
function populateHeader(jsonObj) {
    var myP = document.createElement('p');
    myP.textContent = jsonObj['squadName'];
    header.appendChild(myP);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + jsonObj['formed'];
    header.appendChild(myPara);
}