document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


let valor = localStorage.getItem("usuario") // Traemos lo que se encuentra dentro de "usuario" y lo colocamos en una nueva variable llamada valor
let ingreso = document.getElementById("login") // Creamos una variable llamada "ingreso" en la cual traemos el id, de donde mostrare el correo con el cual se ingresa
ingreso.innerHTML = `<li>${valor}</li>` // Agregara el contenido dentro de "valor", que es el correo, y lo mostrara

salida.addEventListener('click', function(){ //Creo dicha funcion para que al cerrar sesion, desaparezca usuario con el que me logee
    localStorage.removeItem('usuario');
})  