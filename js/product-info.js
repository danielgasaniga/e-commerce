let prodID = localStorage.getItem("prodID"); //Realizo un local storage, que me lo guarde en pordID
const INFO_URL = `https://japceibal.github.io/emercado-api/products/${prodID}.json` //Traigo los datos del json y los coloco en dicha variable
const INFO_COMMENTS_URL = `https://japceibal.github.io/emercado-api/products_comments/${prodID}.json` //Traigo los datos del json y los coloco en dicha variable
const info_comments = document.getElementById("comments")
console.log(INFO_URL)
console.log(INFO_COMMENTS_URL)

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
                                    
                                        <div class="col-3 d-flex">
                                            <img src="${infoProduct.images[0]}" alt="${infoProduct.description}" class="img-thumbnail img">
                                            <img src="${infoProduct.images[1]}" alt="${infoProduct.description}" class="img-thumbnail img">
                                            <img src="${infoProduct.images[2]}" alt="${infoProduct.description}" class="img-thumbnail img">
                                            <img src="${infoProduct.images[3]}" alt="${infoProduct.description}" class="img-thumbnail img">
                                        </div>
                                    </div>
                                    </div>
                                    <br>
                                    `
    });

fetch(INFO_COMMENTS_URL) //Realizo el fetch para que me aparezcan los comentarios de cada producto
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