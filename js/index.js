const email = document.getElementById("email");
const contrasenia = document.getElementById('password');
const button = document.getElementById("ingBtn");
ingBtn.addEventListener("click", clicked);

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function verificarCampos() {
    return email.value.trim().length > 1 && contrasenia.value.trim().length > 1;
}

function enviarRegistro() {
    return (verificarCampos() && checked) ? showAlertSuccess() : showAlertError();
}

function clicked(){
    window.location = "main.html"; //Esta funcion me llevara a la pagina inicial
}