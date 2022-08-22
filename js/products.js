let autosArray = []; //En dicho array, se cargaran los datos redibidos 


function showAutosList(array){ //Dicha funcion recibira un array con sus datos, y los mostrara luego en pantalla

    for (let autos of array){
        document.getElementById("container").innerHTML += `
        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + autos.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between"> 
                        <div class="mb-1">
                        <h4>`+ autos.name + " " + autos.currency + " " + autos.cost + `</h4> 
                        <p> `+ autos.description +`</p>  
                        </div>
                        <small class="text-muted">` + autos.soldCount  + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
    }
}

document.addEventListener("DOMContentLoaded", function(e){ //
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           autosArray = resultObj.data;
            showAutosList(autosArray.products); 
            console.log(autosArray.products)
        }
    });
});