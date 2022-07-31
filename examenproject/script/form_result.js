addEventListener("load",init)

function init() {
    document.getElementById("snaam").innerHTML = getParam("naam_p");
    document.getElementById("sachternaam").innerHTML = getParam("achternaam_p");
    document.getElementById("saddress").innerHTML = getParam("address");
    document.getElementById("spostcode").innerHTML = getParam("postcode");
    document.getElementById("sstad").innerHTML = getParam("stad_p");
    document.getElementById("semail").innerHTML = getParam("email_p");
    document.getElementById("stel").innerHTML = getParam("tel_p");
    document.getElementById("sproductcategorie").innerHTML = getParam("productcategorie");
    document.getElementById("skleur").innerHTML = getParam("kleur");
    document.getElementById("sgewicht").innerHTML = getParam("gewicht");
    document.getElementById("saantal").innerHTML = getParam("aantal");
    document.getElementById("sgravering").innerHTML = getParam("gravering");
    document.getElementById("slevertijd").innerHTML = getParam("levertijd");

    let verpakkinsMateriaal;
    if (getParam("verpakkingsmateriaal") == null ) {
        verpakkinsMateriaal = "Nee"
    } else verpakkinsMateriaal = "Ja"
    document.getElementById("sverpakkingsmateriaal").innerHTML = verpakkinsMateriaal;
}

function getParam(name) {
    let queryString = decodeURIComponent(location.search.replace(/\+/g, " "))
    let regex = new RegExp(name + "=([^&]+)")
    let result = regex.exec(queryString)
    if (result) {
        return result[1];
    }else
        return null
}

