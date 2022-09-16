let identidades = localStorage.getItem("catID"); //Creo la variable "identidades" que traiga todas las id de las categorias
const URL = `${PRODUCTS_URL}${identidades}${EXT_TYPE}`; //Realizamos la peticion de productos, identitades y salida
const container = document.getElementById("container"); //Creao la constante "container" en la cual agregamos el contenido
const ascendente = document.getElementById("asc"); //Creo la constante del boton ascendente
const descendente = document.getElementById("desc"); //Creo la constante del boton descendente
const relevancia = document.getElementById("rel"); //Creo la constante del boton relevancia

function setProdID(id) {  //ENTREGA, PARTE 1 
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"
}

function mostrarProductos(array) {
  //Dicha funcion recibira un array con sus datos, y los mostrara luego en pantalla
  document.getElementById("container").innerHTML = ""
  for (let productos of array) {
    // Llamara el array de productos, aqui cambiamos por el de productos
    //Debajo agregaremos los elementos uno por uno
    document.getElementById("container").innerHTML += //ENTREGA, PARTE 1 
      ` 
      <div onclick="setProdID(${productos.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` +
      productos.image +
      `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between"> 
                        <div class="mb-1">
                        <h4>` +
      productos.name +
      " " +
      productos.currency +
      " " +
      productos.cost +
      `</h4> 
                        <p> ` +
      productos.description +
      `</p>  
                        </div>
                        <small class="text-muted">` +
      productos.soldCount +
      ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `;
  }
}

document.addEventListener("DOMContentLoaded", function (){
fetch(URL) //Cuando se resuelve esta "URL", y obtenemos una repuesta, se ejecuta el codigo a continuación
  .then((res) => res.json()) //Entonces cuando la repuesta llega, la funcion flecha sobreescribe la variable
  .then((data) => {
    listaProductos = data.products;
    mostrarProductos(listaProductos);
  }); //Como la repuesta es correcta, colocar la repuesta dentro de productos

  document.getElementById("asc").addEventListener("click", function(){  //Hago que ralice la funcion de ascender al apretar el boton click
    funcAscendente()
  });
  
  document.getElementById("desc").addEventListener("click", function(){ //Hago que ralice la funcion de descender al apretar el boton click
    funcDescendente()
  });
  
  document.getElementById("rel").addEventListener("click", function(){ //Hago que ralice la funcion de relevancia al apretar el boton click
    funcRelevancia()
  });
}) 

function funcAscendente (){ //Creo la funcion ascendente, haciendo el orden para que me muestre el producto de mayor precio, al de menor precio
   listaProductos.sort((a, b) => {
       if(a.cost > b.cost) {return -1;}
       if(a.cost < b.cost) {return 1;}
       return 0;
   });
   mostrarProductos(listaProductos)
 };

 function funcDescendente (){ //Creo la funcion descendente, haciendo el orden para que me muestre el producto de menor precio, al de mayor precio
  listaProductos.sort((a, b) => {
      if(a.cost < b.cost) {return -1;}
      if(a.cost > b.cost) {return 1;}
      return 0;
  });
  mostrarProductos(listaProductos)
};

function funcRelevancia (){ //Creo la funcion relevancia, haciendo el orden para que me muestre desde el producto mas venido, al de menos venta
  listaProductos.sort((a, b) => {
      if(a.soldCount > b.soldCount) {return -1;}
      if(a.soldCount < b.soldCount) {return 1;}
      return 0;
  });
  mostrarProductos(listaProductos)
};

