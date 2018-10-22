var resMultTabOk = sessionStorage["resMultTabOk"];
var resMultTabNO = sessionStorage["resMultTabNO"];
var resAddTabOk = sessionStorage["resAddTabOk"];
var resAddTabNO = sessionStorage["resAddTabNO"];

var resAddRandOK = sessionStorage["resAddRandOK"] ;
var resAddRandNO =sessionStorage["resAddRandNO"];
var resMultRandOk=sessionStorage["resMultRandOk"];
var resMultRandNO=sessionStorage["resMultRandNO"];
var resSousRandOK= sessionStorage["resSousRandOK"];
var resSousRandNO = sessionStorage["resSousRandNO"];


function voirResult() {
    console.log("resMultTabOk" + resMultTabOk);


    if ( resMultTabOk!= 0) document.getElementById("resMultTabOk").innerHTML = "<p style=" + "font-size:25;color:green>Vous avez réussi " + resMultTabOk + " calculs de table de multiplication !</p>";
    if (resMultTabNO != 0) document.getElementById("resMultTabNO").innerHTML = "<p style=" + "font-size:25;color:red>Vous avez raté " + resMultTabNO + " calculs de table de multiplication !</p>";


    if ( resAddTabOk!= 0) document.getElementById("resAddTabOk").innerHTML = "<p style=" + "font-size:25;color:green>Vous avez réussi " + resAddTabOk + " calculs de table d'addition !</p>";
    if ( resAddTabNO!= 0) document.getElementById("resAddTabNO").innerHTML = "<p style=" + "font-size:25;color:red>Vous avez raté " + resAddTabNO + " calculs de table d'addition !</p>";

    if ( resMultRandOk!= 0) document.getElementById("resMultRandOk").innerHTML = "<p style=" + "font-size:25;color:green>Vous avez réussi " + resMultRandOk + " calculs d'addition au hasard !</p>";
    if (resMultRandNO != 0) document.getElementById("resMultRandNO").innerHTML = "<p style=" + "font-size:25;color:red>Vous avez raté " + resMultRandNO + " calculs d'addition au hasard!</p>";

    if (resAddRandOK != 0) document.getElementById("resAddRandOK").innerHTML = "<p style=" + "font-size:25;color:green>Vous avez réussi " + resAddRandOK + " calculs de multiplication au hasard !</p>";
    if (resAddRandNO != 0) document.getElementById("resAddRandNO").innerHTML = "<p style=" + "font-size:25;color:red>Vous avez raté " + resAddRandNO + " calculs de multiplication au hasard!</p>";

    if ( resSousRandOK!= 0) document.getElementById("resSousRandOK").innerHTML = "<p style=" + "font-size:25;color:green>Vous avez réussi " + resSousRandOK + " calculs d'addition au hasard!</p>";
    if ( resSousRandNO!= 0) document.getElementById("resSousRandNO").innerHTML = "<p style=" + "font-size:25;color:red>Vous avez raté " + resSousRandNO + " calculs d'addition au hasard!</p>";

}

