const info_carrito =
  "https://japceibal.github.io/emercado-api/user_cart/25801.json";

const opciones = document.getElementById("selector");
const tarjeta = document.getElementById("flexRadioDefault1");
const transferencia = document.getElementById("flexRadioDefault2");
const numeroTarjeta = document.getElementById("numero_tarjeta");
const codigoSeguridad = document.getElementById("codigo_seguridad");
const vencimientoTarjeta = document.getElementById("vencimiento_tarjeta");
const numeroCuenta = document.getElementById("numero_cuenta");
const botonCerrar = document.getElementById("boton_cerrar");
const info = document.getElementById("info");
const costos = document.getElementById("costos");

document.addEventListener("DOMContentLoaded", async function () {
  let dato = await getJSONData(info_carrito);

  info.innerHTML = "";
  info.innerHTML += `
  <thead>
  <tr>
    <th scope="col"></th>
    <th scope="col">Nombre</th>
    <th scope="col">Costo</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Subtotal</th>
  </tr>
</thead>`;
  for (let articulos of dato.data.articles) {
    info.innerHTML += `
 <tbody>
  <tr>
    <th scope="row"><img style="width: 100px;" src="${articulos.image}" class="img-thumbnail"> </th>
    <td>${articulos.name}</td>
    <td>${articulos.currency} ${articulos.unitCost}</td>
    <td>
    <input oninput="calcular_costo(${articulos.unitCost}, this.value)" type="number" value="${articulos.count}" min="1" max="9" id="cant"></td>
    <td><b>${articulos.currency}<span id="subtotal"> ${articulos.unitCost}</b> </span> </td>
  </tr>
  `;

    costos.innerHTML += `
   <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Subtotal del producto (USD)
    <span class="badge bg-primary rounded-pill" id="costoss">${articulos.unitCost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Costo del envio (USD)
    <span class="badge bg-primary rounded-pill" id="envios"></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Total (USD)
    <span class="badge bg-primary rounded-pill" id="total"></span>
  </li>
</ul>
   `;
  }

  const envio = document.getElementById("envios");

  function calcular_envio() {
    let subtotal = Number(document.getElementById("subtotal").textContent);
    let opcion = opciones.selectedIndex;
    if (opcion == 1) envio.innerHTML = subtotal * 0.15;
    else if (opcion == 2) envio.innerHTML = subtotal * 0.07;
    else if (opcion == 3) envio.innerHTML = subtotal * 0.05;
  }

  cant.addEventListener("input", () => {
    calcular_envio();
    sumar_total();
  });

  opciones.addEventListener("click", () => {
    calcular_envio();
    sumar_total();
  });

  function sumar_total() {
    let subtotal = Number(document.getElementById("subtotal").textContent);
    const total = document.getElementById("total");
    total.innerHTML = subtotal + Number(envio.textContent);
  }
});

function calcular_costo(parametro1, parametro2) {
  let costoss = document.getElementById("costoss");
  let subtotal = document.getElementById("subtotal");
  subtotal.innerHTML = parametro1 * parametro2;
  costoss.innerHTML = parametro1 * parametro2;
}

function chequear() {
  if (tarjeta.checked) {
    numeroTarjeta.disabled = false;
    codigoSeguridad.disabled = false;
    vencimientoTarjeta.disabled = false;
    numeroCuenta.required = false;
    numeroCuenta.disabled = true;
    numeroTarjeta.required = true;
    codigoSeguridad.required = true;
    vencimientoTarjeta.required = true;
  } else if (transferencia.checked) {
    numeroCuenta.disabled = false;
    numeroTarjeta.required = false;
    codigoSeguridad.required = false;
    vencimientoTarjeta.required = false;
    numeroCuenta.required = true;
    numeroTarjeta.disabled = true;
    codigoSeguridad.disabled = true;
    vencimientoTarjeta.disabled = true;
  }
}

const calle = document.getElementById("calle");
const numero = document.getElementById("numero");
const esquina = document.getElementById("esquina");
const botonComprar = document.getElementById("boton_comprar");

function validar() {
  opcion = opciones.selectedIndex;
  if (opcion == null || opcion == 0) {
    return false;
  }
  botonComprar.addEventListener("click", () => {
    validar();
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
        } else {
          showAlertSuccess();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function verificarCampos() {
  return (
    calle.value.trim().length > 1 &&
    esquina.value.trim().length > 1 &&
    numero.value.trim().length > 1
  );
}

function enviarRegistro() {
  return verificarCampos && check.checked
    ? showAlertSuccess()
    : showAlertError();
}
