const primerNombre = document.getElementById("primerNombre");
const segundoNombre = document.getElementById("segundoNombre");
const primerApellido = document.getElementById("primerApellido");
const segundoApellido = document.getElementById("segundoApellido");
const email = document.getElementById("email");
const telefonoDeContacto = document.getElementById("telefonoDeContacto");
const boton_guardar = document.getElementById("boton_guardar");
//EXPRESION REGULAR PARA CORROBORAR FORMATO DE CORREO
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


function validad() {
    indice = lista.selectedIndex;
    if (indice == null || indice == 0) {
      return false;
    }
    boton_guardar.addEventListener("click", () => {
      validad();
    });
  }

(function () {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();
          if (!form.checkValidity()) {
              event.stopPropagation();
          }else{
            showAlertSuccess()
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();


  //MENSAJES DE ERROR Y CONFIRMACIÓN
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

//FUNCIONES COMPLEMENTARIAS DE 'ENVIAR REGISTRO'

function verificarCampos() {
  return primerNombre.value.trim().length > 1 && primerApellido.value.trim().length > 1 && emailRegex.test(email.value);
}

//FUNCIÓN PRINCIPAL A LA CUAL APUNTA CART.HTML
function guardarRegistro() {
  return (verificarCampos && check.checked) ? showAlertSuccess() : showAlertError();
}