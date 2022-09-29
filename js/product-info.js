let prodID = localStorage.getItem("prodID"); //Realizo un local storage, que me lo guarde en prodID
const INFO_URL = `https://japceibal.github.io/emercado-api/products/${prodID}.json` //Traigo los datos del json y los coloco en dicha variable
const INFO_COMMENTS_URL = `https://japceibal.github.io/emercado-api/products_comments/${prodID}.json` //Traigo los datos del json y los coloco en dicha variable
const info_comments = document.getElementById("comments")//Creo una variable, en donde ira lo que escriba como nuevo comentario
const botonEnviar = document.getElementById("botonEnviar")//Traigo el boton
let nuevoComentario = document.getElementById("nuevoComentario")//Creo una variable, para escribir mi nuevo comentario
const relacionados = document.getElementById("relacionados"); //Creo la constante "relacionados" en la cual agregamos el contenido


fetch(INFO_URL) // Realizo el fetch para que me aparezca toda la informacion del producto deseado
.then (response => response.json())
.then (infoProduct => {
    let container = document.getElementById("container")
    container.innerHTML +=` <div class="container">
    <br>
         <h1>${infoProduct.name}</h1>
            <br>
                <hr>
                    <div>
                        <h5><b>Precio</b></h5>
                            <p>${infoProduct.currency} ${infoProduct.cost}</p>
                    </div>
                        <div>
                            <h5><b>Descripción</b></h5>
                                <p>${infoProduct.description}</p>
                        </div>
                            <div>
                                <h5><b>Categoría</b></h5>
                                    <p>${infoProduct.category}</p>
                            </div>
                                <div>
                                    <h5><b>Cantidad de vendidos</b></h5>
                                        <p>${infoProduct.soldCount}</p>
                                </div>
                                    <div>
                                        <h5><b>Imágenes ilustrativas</b></h5>
                                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        </div>
                                        <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="${infoProduct.images[0]}" class="d-block w-100" alt="${infoProduct.description}">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="2000">
                                        <img src="${infoProduct.images[1]}" class="d-block w-100" alt="${infoProduct.description}">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        <div class="carousel-item">
                                        <img src="${infoProduct.images[2]}" class="d-block w-100" alt="${infoProduct.description}">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        <div class="carousel-item">
                                        <img src="${infoProduct.images[3]}" class="d-block w-100" alt="${infoProduct.description}">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                        </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                        </button>
                                        </div>
                                        </div>
                                        </div>
                                        <br>
                                        `
    });

fetch(INFO_COMMENTS_URL) //Realizo el fetch para que me aparezcan los comentarios de cada producto con sus datos correspondientes
.then (response => response.json())
.then (infoComments => {
    for(let commentsData of infoComments){
        info_comments.innerHTML += `<li class="list-group-item comments-list">
        <p class = "comments-list-head"><b>${commentsData.user}</b> - ${commentsData.dateTime}  
        <span class="fa fa-star ${commentsData.score >=1 ? "checked": ""}"></span>
        <span class="fa fa-star ${commentsData.score >=2 ? "checked": ""}"></span>
        <span class="fa fa-star ${commentsData.score >=3 ? "checked": ""}"></span>
        <span class="fa fa-star ${commentsData.score >=4 ? "checked": ""}"></span>
        <span class="fa fa-star ${commentsData.score >=5 ? "checked": ""}"></span>
        <p class = "comments-list-data">${commentsData.description}</p>
    </li> `
    }

 });

 botonEnviar.addEventListener("click", (evt) => { //Al apretar el boton, realizara el siguiente evento
    // Si hay texto ingresado en el input, se guardara en el localStorage
    if (nuevoComentario.value) localStorage.setItem("comentarios", nuevoComentario.value);
  });

  let usuario = localStorage.getItem("usuario") //Traigo la variable del correo, como usuario para los comentarios nuevos
  let conectarComentarios = localStorage.getItem("comentarios")//Traigo lo almacenado en el local storage comentarios
  var tmpDate = new Date().toLocaleString() // Trae la fecha actual
  //Agrego los comentarios que quiero, con mi usuario, la fecha actual, sus estrellas, y el comentario que deseo
  info_comments.innerHTML = `<li class="list-group-item comments-list">
  <p class = "comments-list-head"><b>${usuario}</b> - ${tmpDate}  
  <span class="fa fa-star ${conectarComentarios.score >=1 ? "checked": ""}"></span>
  <span class="fa fa-star ${conectarComentarios.score >=2 ? "checked": ""}"></span>
  <span class="fa fa-star ${conectarComentarios.score >=3 ? "checked": ""}"></span>
  <span class="fa fa-star ${conectarComentarios.score >=4 ? "checked": ""}"></span>
  <span class="fa fa-star ${conectarComentarios.score >=5 ? "checked": ""}"></span>
  <p class = "comments-list-data">${conectarComentarios}</p>
  </li> ` 

  function cargarRelacionados(id){ //Aqui realizo una funcion para que me enviar al local storage el producto, y me redirija
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
  }

  function relacionando() {//Creo esta funcion, para traer la informacian de los productos relacionados, trayendo su imagen, y nombre, y a la vez realizo un evento onclick, para que al cargar dichos productos, al hacer click, me redirija hacia la informacion de los mismos
    let htmlContentToAppend = "";
    for (const relacionando of lista.relatedProducts) {
      htmlContentToAppend += `<div onclick="cargarRelacionados(${relacionando.id})" class="col-md-4"> 
      <div class="card mb-4 shadow-sm custom-card cursor-active class="list-group-item list-group-item-action">
      <img class="bd-placeholder-img card-img-top" src="${relacionando.image}"  class="img-thumbnail">
      <p class="m-3">${relacionando.name}</p>
      </div>
      </div>
  `;
  relacionados.innerHTML = htmlContentToAppend;
    }
  }

document.addEventListener("DOMContentLoaded", function(){ //Realizo un addeventlistener para traer la informacion del json
    getJSONData(INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            lista = resultObj.data
            relacionando(lista)
          }
        })})    



