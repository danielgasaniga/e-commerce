const usuarioId = 25801; //Creo una constante con su id correspondiente
const contenedor = document.getElementById("cartContainer"); //Creo una constante trayendo el contenedor del carro

document.addEventListener("DOMContentLoaded", function () { //Realizo un addevenlistener para que me cargue el DOM
  let URL_cart = CART_INFO_URL + usuarioId + EXT_TYPE; ////Realizamos la peticion de productos, identitades y salida
  fetch(URL_cart)
    .then(function (response) {
      return response.json();
    })
    .then(function (item) {
      peticion(item);
    });
});

function peticion(data) {
  let htmlContentToAppend = "";
  for (const item of data.articles) {
    htmlContentToAppend += `<table class="table table"> <br>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nombre</th>
          <th scope="col">Costo</th>
          <th scope="col">Cantidad</th>
          <th scope="col" >SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style="width: 65px; height: 40px;"  class="img-fluid" src="${item.image}"></td>
          <td>${item.name}</td>
          <td>${item.currency}<span id="preciofijo"> ${item.unitCost} </span></td>
          <td><input id="variableCantidades" type="number" style="width:70px"></td>
          <td id = "subTotal"><strong>${item.currency} </strong></td>
        </tr>`;
    contenedor.innerHTML = htmlContentToAppend;

    let variableCantidad = document.getElementById("variableCantidades")
    let subTotal = document.getElementById("subTotal")
    let preciofijo = document.getElementById("preciofijo")

 variableCantidad.addEventListener("keyup", function () {
      var result = item.unitCost * variableCantidad.value;
      subTotal.innerHTML = `<strong>${item.currency} ${result}</strong>`;
    });
  }
}
