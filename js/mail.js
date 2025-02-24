// create mail and subjects variables
var pchMailAd = "mailto:" + "petruchamon@" + "chefprive.biz";
var pchMailSubj = "?subject=Demande d'information pour mon repas à domicile...";

var jbhMailAd = "mailto:" + "webmaster@" + "chefprive.biz";
var jbhMailSubj = "?subject=Mail to chefprive.biz Webmaster";

// create the elements
var mailAtPch = document.createElement("a");
var mailAtJbh = document.createElement("a");

// set class to the elements
mailAtPch.setAttribute("class", "footer__list-item-a");
mailAtJbh.setAttribute("class", "footer__copyright");

// add the URL attribute
mailAtPch.setAttribute("href", pchMailAd + pchMailSubj);
mailAtJbh.setAttribute("href", jbhMailAd + jbhMailSubj);

// Add link description
mailAtPchDesc = document.createTextNode("Envoyez-moi un mail");
mailAtJbhDesc = document.createTextNode("Copyright © 2025 JBHamon");

// Add it to the new hyperlink
mailAtPch.appendChild(mailAtPchDesc);
mailAtJbh.appendChild(mailAtJbhDesc);

// Find the place to put it
placeholder1 = document.getElementById("mail-pch");
placeholder2 = document.getElementById("mail-jbh");
//
// add this to the DOM in memory
placeholder1.appendChild(mailAtPch);
placeholder2.appendChild(mailAtJbh);
