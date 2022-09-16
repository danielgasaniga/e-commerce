let prodID = localStorage.getItem("prodID");
const INFO_URL = `https://japceibal.github.io/emercado-api/products/${prodID}.json`
const INFO_COMMENTS_URL = `https://japceibal.github.io/emercado-api/products_comments/${prodID}.json`

fetch(INFO_URL)
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
                                    `
    });

fetch(INFO_COMMENTS_URL)
.then (response => response.json())
.then (infoComments => {
    let comments = document.getElementById("comments")
    comments.innerHTML +=` <div class="container">
    <br>
         <h1>${infoComments.product}</h1>
         </div>
            `
    });