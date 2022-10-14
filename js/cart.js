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
      htmlContentToAppend += `<div class="col-md-1"> 
      <div class="container">
      <img class="bd-placeholder-img card-img-top" src="${item.image}"  class="img-thumbnail">
      <p class="m-3">${item.name}</p><p class="m-3">${item.currency}</p> <p class="m-3">${item.unitCost}</p><p class="m-3"></p><p class="m-3">${item.currency}</p> <p class="m-3">${item.unitCost}</p>
      </div>
      </div>
  `;
 contenedor.innerHTML = htmlContentToAppend;
    }
  }