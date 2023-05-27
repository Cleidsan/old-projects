var enviado = document.getElementById("enviado-recup")
var input = document.getElementsByTagName("input")[0]

function enviar(email) {
   if (input.value === "") {
      enviado.innerHTML = "Digite um email valido."
      enviado.style.backgroundColor = "red"
      enviado.style.display = "block"
   } else {
      enviado.style.display = "block"
      enviado.innerHTML = "Email de recuperação enviado com sucesso."
      enviado.style.backgroundColor = "Green"
}
}

function clicar(email) {
   if (input.value === "") {
      enviado.innerHTML = "Digite um email valido."
      enviado.style.backgroundColor = "red"
      enviado.style.display = "block"
   } else {
      enviado.style.display = "block"
      enviado.innerHTML = "Email de recuperação enviado com sucesso."
      enviado.style.backgroundColor = "Green"
}
}
