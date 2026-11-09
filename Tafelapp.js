let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

function showTafel() {
    let tafel = tafelinputObj.value
    //let teller = 1;
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    // while (teller < 11) {
    //     uitkomst = teller * tafel;
    //     output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    //     teller++;
    // }
    tafeloutputObj.innerHTML = output;
}


// APP 2: Willekeurige som controleren
let tafelinputcheckObj =
    document.getElementById("inputchecktafel");

let tafeloutputcheckObj =
    document.getElementById("outputchecktafel");

let somObj = document.getElementById("som");

let uitkomst = 0;
let controleBezig = false;


// Maak een nieuwe willekeurige som
function nieuweSom() {
    let tafel = Math.floor(Math.random() * 10) + 1;
    let getal = Math.floor(Math.random() * 10) + 1;

    uitkomst = tafel * getal;

    somObj.textContent = tafel + " x " + getal + " = ?";

    tafelinputcheckObj.value = "";
    tafeloutputcheckObj.textContent = "";

    controleBezig = false;
}


// Controleer het antwoord
function checktafel() {
    // Voorkom dat je meerdere keren tegelijk controleert
    if (controleBezig) {
        return;
    }

    let antwoord = tafelinputcheckObj.value;

    if (antwoord === "") {
        tafeloutputcheckObj.textContent =
            "Vul eerst een antwoord in!";
        return;
    }

    controleBezig = true;

    if (Number(antwoord) === uitkomst) {
        tafeloutputcheckObj.textContent = "GOED!";
    } else {
        tafeloutputcheckObj.textContent = "FOUT!";
    }

    // Wacht 1 seconde en maak dan een nieuwe som
    setTimeout(function() {
        nieuweSom();
    }, 1000);
}


// Start app 2 met een willekeurige som
nieuweSom();
