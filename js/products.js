let identidades = localStorage.getItem("catID"); //Creamos la variable "identidades" que traiga todas las id de las categorias
const URL = `${PRODUCTS_URL}${identidades}${EXT_TYPE}`; //Realizamos la peticion de productos, identitades y salida
const container = document.getElementById("container"); //Creamos la constante "container" en la cual agregamos el contenido
const ascendente = document.getElementById("asc");
const descendente = document.getElementById("desc");
const relevancia = document.getElementById("rel");
const ordenando = document.getElementById("ordenando");
var listaProductos = [];
const ORDER_ASC_BY_COST= "$Asc";
const ORDER_DESC_BY_COST = "$Desc";
const ORDER_BY_PROD_REL = "Rel";

function mostrarProductos(array) {
  //Dicha funcion recibira un array con sus datos, y los mostrara luego en pantalla
  document.getElementById("container").innerHTML = ""
  for (let productos of array) {
    // Llamara el array de productos, aqui cambiamos por el de productos
    //Debajo agregaremos los elementos uno por uno
    document.getElementById("container").innerHTML +=
      ` 
        
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
console.log("putito", document.getElementById("asc"))

  document.getElementById("asc").addEventListener("click", function(){
    funcAscendente()
  });
  
  document.getElementById("desc").addEventListener("click", function(){
    funcDescendente()
  });
  
  document.getElementById("rel").addEventListener("click", function(){
    funcRelevancia()
  });
})  

function funcAscendente (){
   listaProductos.sort((a, b) => {
       if(a.cost > b.cost) {return -1;}
       if(a.cost < b.cost) {return 1;}
       return 0;
   });
   mostrarProductos(listaProductos)
 };

 function funcDescendente (){
  listaProductos.sort((a, b) => {
      if(a.cost < b.cost) {return -1;}
      if(a.cost > b.cost) {return 1;}
      return 0;
  });
  mostrarProductos(listaProductos)
};

function funcRelevancia (){
  listaProductos.sort((a, b) => {
      if(a.soldCount > b.soldCount) {return -1;}
      if(a.soldCount < b.soldCount) {return 1;}
      return 0;
  });
  mostrarProductos(listaProductos)
};

