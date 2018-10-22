var nbEnterPress = 0;
var essais = 0;

var resAddRandOK=0;
var resAddRandNO=0;
var resMultRandOk=0;
var resMultRandNO=0;
var resSousRandOK=0;
var resSousRandNO=0;

var radios = document.getElementsByName('operation');
var operation;


document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log("Nombre de fois touche 'entrée': " + nbEnterPress);
        document.getElementById("reponseUser").focus();
        if (nbEnterPress == 0||nbEnterPress == 1) {
            afficheCalcul();
        } else if ( nbEnterPress == 2 || nbEnterPress == 3 || nbEnterPress == 4) {
            afficheReponse();
        } else if (nbEnterPress == 5) {
            afficheReponse();
            nbEnterPress = 0;
        }
    }
}, false);


function afficheCalcul() {

    nbEnterPress=2;
    essais=0;

    //alert(sessionStorage["choixExo"]);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            //alert(radios[i].value);
            operation = radios[i].value;
            break;
        }
    }

    document.getElementById("newCalcul").style.visibility = "hidden";
    document.getElementById("reponseUser").value = null;
    document.getElementById("reponseUser").style.visibility = "visible";
    document.getElementById("boutonValiderCalcul").style.visibility = "visible";
    document.getElementById("resultat").style.visibility = "hidden";
    document.getElementById("correction").style.visibility = "hidden";
    var nombre1 = Math.floor(Math.random() * 50);
    var nombre2 = Math.floor(Math.random() * 50);

    switch (operation) {
        case "+":
            var correction = nombre1 + nombre2;
            break;
        case "-":
            var correction = nombre1 - nombre2;
            break;
        case "x":
            var correction = nombre1 * nombre2;
            break;
    }



    document.getElementById("calculAFaire").innerHTML = "" + nombre1 + " " + operation + " " + nombre2;
    document.getElementById("correction").innerHTML = correction;
    document.getElementById("calculAFaire").value = "";
    document.getElementById("reponseUser").focus();
    


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
        nbEnterPress=0;
        document.getElementById("newCalcul").focus()

        if(operation == "x"){
            resMultRandOk+=1;
            sessionStorage["resMultRandOk"]=resMultRandOk.toString();
        }else if(operation == "+"){
            resAddRandOK+=1;
            sessionStorage["resAddRandOK"]=resAddRandOK.toString();
        } else if (operation == "-"){
            resSousRandOK+=1;
            sessionStorage["resSousRandOK"]=resSousRandOK.toString();
        }

    } else {
        //console.log(reponse);
        if (essais == 3) {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté, le résultat était " + reponse + "</p>";
            document.getElementById("boutonValiderCalcul").style.visibility = "hidden";
            document.getElementById("reponseUser").style.visibility = "hidden";
            document.getElementById("newCalcul").style.visibility = "visible";
            essais = 0;
            document.getElementById("newCalcul").focus()
            nbEnterPress=0;

            if(operation == "x"){
                resMultRandNO+=1;
                sessionStorage["resMultRandNO"]=resMultRandNO.toString();
            }else if(operation == "+"){
                resAddRandNO+=1;
                sessionStorage["resAddRandNO"]=resAddRandNO.toString();
            } else if (operation == "-"){
                resSousRandNO+=1;
                sessionStorage["resSousRandNO"]=resSousRandNO.toString();
            }
        } else {
            document.getElementById("resultat").innerHTML = "<p style=" + "font-size:25;color:red>Raté essaie encore !</p>";
            nbEnterPress+=1;
            essais = essais + 1;

        }
    }
    
}
