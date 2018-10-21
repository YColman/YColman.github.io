var nbEnterPress = 0;
var essais = 0;



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

    nbEnterPress=1;
    essais=0;

    //alert(sessionStorage["choixExo"]);

    var radios = document.getElementsByName('operation');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            //alert(radios[i].value);
            var operation = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    document.getElementById("newCalcul").style.visibility = "hidden";
    document.getElementById("reponseUser").value = null;
    document.getElementById("reponseUser").style.visibility = "visible";
    document.getElementById("boutonValiderCalcul").style.visibility = "visible";
    document.getElementById("resultat").style.visibility = "hidden";
    document.getElementById("correction").style.visibility = "hidden";


    var table = document.getElementById("table").value;

    function tableAdd() {
        addit = Math.floor(Math.random() * 9) + 1;
        document.getElementById("newCalcul").style.visibility = "hidden";
        document.getElementById("reponseUser").value = null;
        document.getElementById("reponseUser").style.visibility = "visible";
        document.getElementById("boutonValiderCalcul").style.visibility = "visible";
        document.getElementById("resultat").style.visibility = "hidden";
        document.getElementById("correction").style.visibility = "hidden";
        document.getElementById("calculAFaire").innerHTML = "" + table + " " + "+" + " " + addit;
        document.getElementById("correction").innerHTML = parseInt(table)+parseInt(addit);
        document.getElementById("calculAFaire").value = "";
        document.getElementById("reponseUser").focus();
        var rep = parseInt(table)+parseInt(addit);
        console.log("ceci est une addition dont le résultat est : "+rep)
    }
    function tableMult() {
        multiplicat = Math.floor(Math.random() * 9) + 1;
        document.getElementById("newCalcul").style.visibility = "hidden";
        document.getElementById("reponseUser").value = null;
        document.getElementById("reponseUser").style.visibility = "visible";
        document.getElementById("boutonValiderCalcul").style.visibility = "visible";
        document.getElementById("resultat").style.visibility = "hidden";
        document.getElementById("correction").style.visibility = "hidden";
        document.getElementById("calculAFaire").innerHTML = "" + table + " " + "x" + " " + multiplicat;
        document.getElementById("correction").innerHTML = table * multiplicat;
        document.getElementById("calculAFaire").value = "";
        document.getElementById("reponseUser").focus();
    }

    if(operation == "x"){
        tableMult();
    }else if(operation == "+"){
        tableAdd();
    }
}



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
        document.getElementById("newCalcul").style.visibility = "visible";
        essais = 0;
    } else {
        //console.log(reponse);
        if (essais == 2) {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté, le résultat était " + reponse + "</p>";
            document.getElementById("boutonValiderCalcul").style.visibility = "hidden";
            document.getElementById("reponseUser").style.visibility = "hidden";
            document.getElementById("newCalcul").style.visibility = "visible";
            essais = 0;
        } else {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté essaie encore !</p>";

            essais = essais + 1;

        }
    }

}