// VER LO DE LA CANTIDAD PARA EL STORAGE!!!


// clases
class Producto{
  constructor(title, price, img){
      this.title = title
      this.price = price
      this.img = img
  }
}

// variables globales
const shoppingContainer = document.querySelector('.shoppingContainer');
const btnCardsComprar = document.querySelectorAll(".btnAgregarCarrito");
const shoppingTotal = document.querySelector(".shoppingTotal")
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
let carrito = [];

// menu
addEventListener('DOMContentLoaded',()=>{
  const btnMenu = document.querySelector('.btnMenu');
  if(btnMenu){
      btnMenu.addEventListener('click',()=>{
          const menuItems = document.querySelector('.menuItems');
          menuItems.classList.toggle('show');
      })
  }
})

// carrito
btnCardsComprar.forEach((botonComprar)=> {
  botonComprar.addEventListener('click', btnComprarClicked);
});

function btnComprarClicked(event){
  const button = event.target;
  const card = button.closest(".card");
  const title = card.querySelector(".title").textContent;
  const price = card.querySelector(".price").textContent;
  const img = card.querySelector(".itemImg").src;
  
  agregarCardAlCarrito(title, price, img);
  crearObjetos(title, price, img);
}

// crear objetos y pasarlos a mi carrito
function crearObjetos(title, price, img){
  const producto = new Producto(title, price, img);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// agregar la card visualmente a mi carrito
function agregarCardAlCarrito(title, price, img){

  // NO FUNCIONA
  // const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
  // for (let i = 0; i < elementsTitle.length; i++) {
  //   if (elementsTitle[i].innerText === title) {
  //     let elementQuantity = elementsTitle[
  //       i
  //     ].parentElement.parentElement.parentElement.querySelector(
  //       '.shoppingCartItemQuantity'
  //     );
  //     elementQuantity.value++;
  //     $('.toast').toast('show');
  //     updateShoppingCartTotal();
  //     return;
  //   }
  // }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${img} class="fotoCarrito">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${title}</h6>
            </div>
        </div>
        <div class="col-3">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${price}</p>
            </div>
        </div>
        <div class="col-3">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shoppingInput shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

  shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}


function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    const shoppingPrice = Number(shoppingPriceElement.textContent.replace("$", ""));
    const shoppingCantidadProd = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    const shoppingCantidad = Number(shoppingCantidadProd.value);
    total = total + shoppingPrice * shoppingCantidad;
  });
  shoppingCartTotal.innerHTML = `$${total}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}