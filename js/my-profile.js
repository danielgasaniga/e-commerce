const primerNombre = document.getElementById("primerNombre");
const segundoNombre = document.getElementById("segundoNombre");
const primerApellido = document.getElementById("primerApellido");
const segundoApellido = document.getElementById("segundoApellido");
const email = document.getElementById("email");
const telefonoDeContacto = document.getElementById("telefonoDeContacto");

primerNombre.value = localStorage.getItem("primerNombre");
segundoNombre.value = localStorage.getItem("segundoNombre");
primerApellido.value = localStorage.getItem("primerApellido");
segundoApellido.value = localStorage.getItem("segundoApellido");
email.value = localStorage.getItem("usuario");
telefonoDeContacto.value = localStorage.getItem("telefonoDeContacto");

const validar = document.querySelectorAll(".needs-validation");

validar.forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      localStorage.setItem("primerNombre", primerNombre.value);
      localStorage.setItem("segundoNombre", segundoNombre.value);
      localStorage.setItem("primerApellido", primerApellido.value);
      localStorage.setItem("segundoApellido", segundoApellido.value);
      localStorage.setItem("telefonoDeContacto", telefonoDeContacto.value);

      if (!form.checkValidity()) {
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});