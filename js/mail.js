// create mail and subjects variables
var emailAd= "mailto:" + "petruc.hamon@" + "gmail.com";
var emailSubj = "?subject=Demande d'information pour mon repas à domicile...";

// create the elements
var mail = document.createElement("a");

// set class to the elements
mail.setAttribute("class", "footer__list-item-a");

// add the URL attribute
mail.setAttribute("href", emailAd + emailSubj);

// Add link description
mailDesc = document.createTextNode("Envoyez-moi un mail");

// Add it to the new hyperlink
mail.appendChild(mailDesc);

// Find the place to put it
placeholder1 = document.getElementById("mail-pch");
//
// add this to the DOM in memory
placeholder1.appendChild(mail);
