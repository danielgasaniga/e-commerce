const primerNombre = document.getElementById("primerNombre");
const segundoNombre = document.getElementById("segundoNombre");
const primerApellido = document.getElementById("primerApellido");
const segundoApellido = document.getElementById("segundoApellido");
const email = document.getElementById("email");
const telefonoDeContacto = document.getElementById("telefonoDeContacto");
const boton_guardar = document.getElementById("boton_guardar");


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