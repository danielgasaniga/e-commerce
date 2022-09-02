let identidades = localStorage.getItem("catID") //Creamos la variable "identidades" que traiga todas las id de las categorias
const URL = `${PRODUCTS_URL}${identidades}${EXT_TYPE}` //Realizamos la peticion de productos, identitades y salida
const container = document.getElementById("container") //Creamos la constante "container" en la cual agregamos el contenido

function productos(array){ //Dicha funcion recibira un array con sus datos, y los mostrara luego en pantalla
document.getElementById("container").innerHTML= ""; //Esto vaciara el contenedor
    for (let productos of array){ // Llamara el array de productos, aqui cambiamos por el de autos
        //Debajo agregaremos los elementos uno por uno
        document.getElementById("container").innerHTML += ` 
        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + productos.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between"> 
                        <div class="mb-1">
                        <h4>`+ productos.name + " " + productos.currency + " " + productos.cost + `</h4> 
                        <p> `+ productos.description +`</p>  
                        </div>
                        <small class="text-muted">` + productos.soldCount  + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
    }
}

fetch(URL) //Cuando se resuelve esta "URL", y obtenemos una repuesta, se ejecuta el codigo a continuación
.then(res=>{ //Entonces cuando la repuesta llega, la funcion flecha sobreescribe la variable
    if (res.ok) {
 return res.json()
    }else{
    console.log("Error")
    }
})
.then(data =>{productos(data.products)})//Como la repuesta es correcta, colocar la repuesta dentro de productos