const email = document.getElementById("email");
const contrasenia = document.getElementById('password');
const button = document.getElementById("regBtn");
regBtn.addEventListener("click", clicked);

var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i



function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function clicked(){
    return window.location.href = "http://127.0.0.1:5500/GitHub/e-commerce/e-commerce/main.html";
}

function verificarCampos() {
    return email.value.trim().length > 1 && contrasenia.value.trim().length > 1;
}


function enviarRegistro() {
    return (verificarCampos () && check.checked) ? showAlertSuccess() : showAlertError();
}


