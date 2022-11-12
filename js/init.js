const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL =
  "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL =
  "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const AUTOS_URL =
  "https://japceibal.github.io/emercado-api/cats_products/101.json"; //Agrego la constante AUTOS
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
};

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
};

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};

let valor = localStorage.getItem("usuario"); // Traemos lo que se encuentra dentro de "usuario" y lo colocamos en una nueva variable llamada valor
let ingreso = document.getElementById("login"); // Creamos una variable llamada "ingreso" en la cual traemos el id, de donde mostrare el correo con el cual se ingresa
ingreso.innerHTML = `<li>${valor}</li>`; // Agregara el contenido dentro de "valor", que es el correo, y lo mostrara

salida.addEventListener("click", function () {
  //Creo dicha funcion para que al cerrar sesion, desaparezca usuario con el que me logee
  localStorage.removeItem("usuario");
});