const email = document.getElementById("email");
const contrasenia = document.getElementById("password");
const button = document.getElementById("ingBtn");
ingBtn.addEventListener("click", clicked);

function verificarCampos() {
  return email.value.trim().length > 1 && contrasenia.value.trim().length > 1; //Retorne si hay algo escrito mayor a un digito, y el trim, lo que hace, es que borre si hay espacios, para no contarlos como digitos
}

function clicked() {
  if (verificarCampos()) {
    window.location = "main.html"; //Esta funcion me llevara a la pagina inicial
  } else {
    alert("Rellene los campos por favor :)"); // Si no, aparecera una alarma diciendo:  Rellene los campos por favor :)
  }
}
