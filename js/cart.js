const usuarioId = 25801
const contenedor = document.getElementById("cartContainer")

document.addEventListener ("DOMContentLoaded", function (){
let URL_cart = CART_INFO_URL + usuarioId + EXT_TYPE
fetch (URL_cart).then(function(response){
return response.json()
}).then(function (item) {
    peticion(item);
  })})

  function peticion(data){
        let htmlContentToAppend = "";
    for (const item of data.articles) {
      htmlContentToAppend += `<table class="table table"> <br>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nombre</th>
          <th scope="col">Costo</th>
          <th scope="col">Cantidad</th>
          <th scope="col">SubTotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style="width: 65px; height: 40px;"  class="img-fluid" src="${item.image}"></td>
          <td>${item.name}</td>
          <td>${item.currency} ${item.unitCost}</td>
          <td> <input id="cantidades" type="number" style="width:70px"></td>
          <td><strong>${item.currency} ${item.unitCost}</strong></td>
        </tr>`
  ;
 contenedor.innerHTML = htmlContentToAppend;
    }
  }