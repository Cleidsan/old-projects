var suun = document.getElementById("mode-iconsuun")
var moon = document.getElementById("mode-iconmoon")
var whiteLogin = document.getElementById("white-central")
var login = document.getElementById("dark-login")


suun.addEventListener('click', clicar)
moon.addEventListener('click', clicar1)

function clicar() {
    moon.style.display = "block"
    suun.style.display = "none"
    whiteLogin.style.display = "block"
    login.style.display = "none"
}

function clicar1() {
    moon.style.display = "none"
    suun.style.display = "block"
    login.style.display = "block"
    whiteLogin.style.display = "none"
    
}