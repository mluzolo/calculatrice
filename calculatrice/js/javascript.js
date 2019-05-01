/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function uno() {


    document.getElementById("un").value = 1;
    un = document.getElementById("un").value;
    document.getElementById("ecran").value += un;

}


function deuxo() {


    document.getElementById("deux").value = 2;
    deux = document.getElementById("deux").value;
    document.getElementById("ecran").value += deux;

}

function troiso() {


    document.getElementById("trois").value = 3;
    trois = document.getElementById("trois").value;
    document.getElementById("ecran").value += trois;

}

function quatreo() {


    document.getElementById("quatre").value = 4;
    quatre = document.getElementById("quatre").value;
    document.getElementById("ecran").value += quatre;


}

function cinqo() {


    document.getElementById("cinq").value = 5;
    cinq = document.getElementById("cinq").value;
    document.getElementById("ecran").value += cinq;


}

function sixo() {


    document.getElementById("six").value = 6;
    six = document.getElementById("six").value;
    document.getElementById("ecran").value += six;


}

function septo() {


    document.getElementById("sept").value = 7;
    sept = document.getElementById("sept").value;
    document.getElementById("ecran").value += sept;


}

function huito() {


    document.getElementById("huit").value = 8;
    huit = document.getElementById("huit").value;
    document.getElementById("ecran").value += huit;


}

function neufo() {


    document.getElementById("neuf").value = 9;
    neuf = document.getElementById("neuf").value;
    document.getElementById("ecran").value += neuf;


}

function zeroo() {


    document.getElementById("zero").value = 0;
    zero = document.getElementById("zero").value;
    document.getElementById("ecran").value += zero;


}


function clearo() {

    document.getElementById("ecran").value = null;


}

function virguleo() {


    document.getElementById("virgule").value = ",";
    virgule = document.getElementById("virgule").value;
    document.getElementById("ecran").value += virgule;


}

function additiono() {

    document.getElementById("addition").value = "+";
    addition = document.getElementById("addition").value;
    document.getElementById("ecran").value += addition;

}

function soustractiono() {

    document.getElementById("soustraction").value = "-";
    soustraction = document.getElementById("soustraction").value;
    document.getElementById("ecran").value += soustraction;

}

function multiplicationo() {

    document.getElementById("multiplication").value = "*";
    multiplication = document.getElementById("multiplication").value;
    document.getElementById("ecran").value += multiplication;

}

function divisiono() {

    document.getElementById("division").value = "/";
    division = document.getElementById("division").value;
    document.getElementById("ecran").value += division;

}

function egaleo() {

  
    resultat = eval(document.getElementById("ecran").value);
    document.getElementById("ecran").value = resultat;
}