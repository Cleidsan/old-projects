/*********** Front-End ************/
var btn1 = document.getElementById("sumir-1")
var btnS1 = document.getElementById("sumir-1-1")
var cat1 = document.getElementById("sm1")
var catCentral = document.getElementById("sumir-categorias")

btn1.addEventListener("click", clicar1)
btnS1.addEventListener("click", close1)

function clicar1() {
    cat1.style.display = "block"
    cat2.style.display = "none"
    cat3.style.display = "none"
    btn1.style.display = "none"
    btnS1.style.display = "block"
    catCentral.style.display = "block"
    mostraDescr2.style.display = "none"
    mostraDescr3.style.display = "none"
}
function close1() {
    cat1.style.display = "none"
    btnS1.style.display = "none"
    catCentral.style.display = "none"
    btn1.style.display = "block"    
    mostraDescr1.style.display = "none"
    mostraDescr2.style.display = "none"
    mostraDescr3.style.display = "none"
}
/*********** Front-End ************/
/*********** FullStack ************/
var btn2 = document.getElementById("sumir-2")
var btnS2 = document.getElementById("sumir-2-2")
var cat2 = document.getElementById("sm2")

btn2.addEventListener("click", clicar2)
btnS2.addEventListener("click", close2)

function clicar2() {
    cat2.style.display = "block"
    cat1.style.display = "none"
    cat3.style.display = "none"
    btn2.style.display = "none"
    btnS2.style.display = "block"
    catCentral.style.display = "block"
    mostraDescr1.style.display = "none"
    mostraDescr3.style.display = "none"
}
function close2() {
    cat2.style.display = "none"
    btnS2.style.display = "none"
    catCentral.style.display = "none"
    btn2.style.display = "block"    
    mostraDescr2.style.display = "none"
    mostraDescr1.style.display = "none"
    mostraDescr3.style.display = "none"
}
/*********** FullStack ************/
/*********** Back-End ************/
var btn3 = document.getElementById("sumir-3")
var btnS3 = document.getElementById("sumir-3-3")
var cat3 = document.getElementById("sm3")

btn3.addEventListener("click", clicar3)
btnS3.addEventListener("click", close3)

function clicar3() {
    cat3.style.display = "block"
    cat1.style.display = "none"
    cat2.style.display = "none"
    btn3.style.display = "none"
    btnS3.style.display = "block"
    catCentral.style.display = "block"
    mostraDescr1.style.display = "none"
    mostraDescr2.style.display = "none"
}
function close3() {
    cat3.style.display = "none"
    btnS3.style.display = "none"
    catCentral.style.display = "none"
    mostraDescr3.style.display = "none"
    mostraDescr1.style.display = "none"
    mostraDescr2.style.display = "none"
    btn3.style.display = "block"    
}
/*********** Back-End ************/
/*********** Abrir e fechar descriçao **************/
var descr1 = document.getElementById("descr1")
var x1 = document.getElementById("X1")
var descr2 = document.getElementById("descr2")
var x2 = document.getElementById("X2")
var descr3 = document.getElementById("descr3")
var x3 = document.getElementById("X3")
var mostraDescr1 = document.getElementById("mostra-descr1")
var mostraDescr2 = document.getElementById("mostra-descr2")
var mostraDescr3 = document.getElementById("mostra-descr3")

descr1.addEventListener("click", abrir1)
descr2.addEventListener("click", abrir2)
descr3.addEventListener("click", abrir3)
x1.addEventListener("click", fechar1)
x2.addEventListener("click", fechar2)
x3.addEventListener("click", fechar3)

function abrir1() {
    mostraDescr1.style.display = "block"
    mostraDescr2.style.display = "none"
    mostraDescr3.style.display = "none"
}

function abrir2() {
    mostraDescr2.style.display = "block"
    mostraDescr1.style.display = "none"
    mostraDescr3.style.display = "none"
}

function abrir3() {
    mostraDescr3.style.display = "block"
    mostraDescr1.style.display = "none"
    mostraDescr2.style.display = "none"
}
function fechar1() {
    mostraDescr1.style.display = "none"
}

function fechar2() {
    mostraDescr2.style.display = "none"
}

function fechar3() {
    mostraDescr3.style.display = "none"
}
