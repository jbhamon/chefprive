emailEpch = "petruc.hamon@" + "gmail.com";

const svg = document.getElementById("#mail-pch");

var createA = document.createElement('a');
var createAText = document.createTextNode(Envoyez-moi un mail);

createA.className = 'footer__list-item-a';
/*createA.setAttribute('href', "mailto:'" + emailEpch "'");*/
createA.setAttribute('href', "http://www.google.com");



/* '?subject=Demande&nbsp;d&#39;information&nbsp;pour&nbsp;mon&nbsp;repas&nbsp;&agrave;&nbsp;domicile...'"'");*/

createA.appendChild(createAText);

svg.appendChild(createA);

/*document.getElementById("myDiv").innerHTML = "<img src='" + myPath + "'>";*/