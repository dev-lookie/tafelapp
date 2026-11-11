let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

function showTafel() {
    let tafel = tafelinputObj.value
    
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
  
    tafeloutputObj.innerHTML = output;
}



// APP 2: Willekeurige som controleren

let tafelinputcheckObj =
    document.getElementById("inputchecktafel");

let tafeloutputcheckObj =
    document.getElementById("outputchecktafel");

let somObj =
    document.getElementById("som");

let keuzetafelObj =
    document.getElementById("keuzetafel");

let oefeningObj =
    document.getElementById("oefening");

let uitkomst = 0;
let gekozenTafel = 0;
let controleBezig = false;


// Start de oefening
function startOefening() {

    gekozenTafel = Number(keuzetafelObj.value);

    if (gekozenTafel < 1 || gekozenTafel > 10 ||
        keuzetafelObj.value === "") {

        alert("Vul een tafel in tussen 1 en 10!");
        return;
    }

    oefeningObj.style.display = "block";

    nieuweSom();
}


// Maak een nieuwe willekeurige som
function nieuweSom() {

    let getal = Math.floor(Math.random() * 10) + 1;

    uitkomst = gekozenTafel * getal;

    somObj.textContent =
        gekozenTafel + " x " + getal + " = ?";

    tafelinputcheckObj.value = "";
    tafeloutputcheckObj.textContent = "";

    controleBezig = false;
}


// Controleer het antwoord
function checktafel() {

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

    setTimeout(function() {
        nieuweSom();
    }, 1000);
}

function absoluut_niks() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    alert("had nou maar niet op de knop geklikt");
}
