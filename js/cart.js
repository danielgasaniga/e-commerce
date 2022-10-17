const usuarioId = 25801; //Creo una constante con su id correspondiente
const contenedor = document.getElementById("cartContainer"); //Creo una constante trayendo el contenedor del carro

document.addEventListener("DOMContentLoaded", function () { //Realizo un addevenlistener para que me cargue el DOM
  let URL_cart = CART_INFO_URL + usuarioId + EXT_TYPE; ////Realizo la peticion de productos, identitades y salida, y que me ejecute la funcion peticion, que se encuentra debajo
  fetch(URL_cart)
    .then(function (response) {
      return response.json();
    })
    .then(function (item) {
      peticion(item);
    });
});

function peticion(data) { //Realizo una funcion con una tabla en las cuales ingreso los datos solicitados
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
          <td>${item.currency} ${item.unitCost}</td>
          <td><input id="variableCantidades" oninput="subTotal(${item.unitCost})" type="number" style="width:70px"></td>
          <td><b>${item.currency} <span id="resultado"${item.unitCost}></b></td>
        </tr>
        </table>`;
      }
    contenedor.innerHTML = htmlContentToAppend;
  }


  function subTotal(total){ //Creo una funcion para realziar la multiplicacion, para luego mostrarla en el subtotal
    let variableCantidades = document.getElementById("variableCantidades").value
    resultado = total * variableCantidades
    return (document.getElementById("resultado").innerHTML = resultado) 
  }
