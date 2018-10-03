var nbEnterPress = 0;

// document.addEventListener('keypress', function (e) {
//     if (e.keyCode >= 0 && e.keyCode <= 9) {
//         document.getElementById("reponseUser").focus();
//     }
// }, false);

document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log("Nombre de fois touche 'entrée': " + nbEnterPress);
        document.getElementById("reponseUser").focus();
        if (nbEnterPress == 0) {
            afficheCalcul();
        } else if (nbEnterPress == 1 || nbEnterPress == 2 || nbEnterPress == 3) {
            afficheReponse();
        } else if (nbEnterPress == 4) {
            afficheReponse();
            nbEnterPress = -1;
        }
        nbEnterPress += 1;
    }
}, false);

function afficheCalcul() {
    document.getElementById("reponseUser").value = null;
    document.getElementById("reponseUser").style.visibility = "visible";
    document.getElementById("boutonValiderCalcul").style.visibility = "visible";
    document.getElementById("resultat").style.visibility = "hidden";
    document.getElementById("correction").style.visibility = "hidden";
    var nombre1 = Math.floor(Math.random() * 50);
    var nombre2 = Math.floor(Math.random() * 50);
    var correction = nombre1 + nombre2;
    document.getElementById("calculAFaire").innerHTML = "" + nombre1 + "+" + nombre2;
    document.getElementById("correction").innerHTML = correction;
    document.getElementById("calculAFaire").value = "";
    document.getElementById("reponseUser").focus();


}

var essais = 0;

function afficheReponse() {
    document.getElementById("resultat").style.visibility = "visible";


    //var essais;
    console.log("Nombre d'essais: " + essais);
    var x = document.getElementById("reponseUser");
    var text;
    text = x.value;
    var reponse = document.getElementById("correction").innerHTML
    if (reponse == text) {
        console.log("On arrive bien à trouver la solution");
        document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:green> Bravo, vous avez trouvé ! </p>";
        document.getElementById("reponseUser").style.visibility = "hidden";
        document.getElementById("boutonValiderCalcul").style.visibility = "hidden";
        essais=0;
    } else {
        //console.log(reponse);
        if (essais == 3) {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté, le résultat était " + reponse + "</p>";
            document.getElementById("boutonValiderCalcul").style.visibility = "hidden";
            document.getElementById("reponseUser").style.visibility = "hidden";
            essais = 0;
        } else {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté essaie encore !</p>";

            essais = essais + 1;

        }
    }

}
