// variables globales
const listaProductos = document.querySelector("#listaCarrito tbody")
const botones = document.querySelectorAll(".btnAgregarCarrito")
const eliminarProducto = document.querySelectorAll(".btnEliminar")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const total = document.getElementById("total")

// clases 
class Producto{
  constructor(nombre, precio, foto, categoria, id){
      this.nombre = nombre
      this.precio = precio
      this.foto = foto
      this.categoria = categoria
      this.id = id
  }
}

class Carrito {
  constructor(id) {
      this.id = id
      this.productos = []
  }
  calcularTotal() {
      let total = 0;
      for(let i = 0; i < this.productos.length; i++) {
          total = total + this.productos[i].precio
      }
      return total
  }
}

// catalogo de productos 
let catalogo = []
const producto1 = new Producto ("Almohadones Varios", 5600, "./img/almohadones.jpeg", "deco", 1)
const producto2 = new Producto ("Set Cuadros", 3500, "./img/cuadros2.jpeg", "cuadros", 2)
const producto3 = new Producto ("Pie de Cama", 4490, "./img/pieDeCama2.jpeg", "deco", 3)
const producto4 = new Producto ("Short Ribbed Tower", 1000, "./img/velas12.jpeg", "velas", 4)
const producto5 = new Producto ("Cuadro Blanco y Verde", 6000, "./img/cuadro3.jpeg", "cuadros", 5)
const producto6 = new Producto ("Mixed set", 6550, "./img/velas13.jpeg", "velas", 6)
const producto7 = new Producto ("Mesa Madera", 18000, "./img/cuadros4.jpeg", "deco", 7)
const producto8 = new Producto ("Set Cuadros Varios", 15500, "./img/cuadros12.jpeg", "cuadros", 8)
const producto9 = new Producto ("Geo Lady", 1500, "./img/velas19.jpeg", "velas", 9)
const producto10 = new Producto ("Alfombra", 18000, "./img/alfombra2.jpeg", "deco", 10)
const producto11 = new Producto ("Baulera Amarilla", 15550, "./img/bauleraAmarilla.jpeg", "deco", 11)
const producto12 = new Producto ("Set Cuadros Varios Luna", 12500, "./img/cuadros11.jpeg", "cuadros", 12)
catalogo.push(producto1)
catalogo.push(producto2)
catalogo.push(producto3)
catalogo.push(producto4)
catalogo.push(producto5)
catalogo.push(producto6)
catalogo.push(producto7)
catalogo.push(producto8)
catalogo.push(producto9)
catalogo.push(producto10)
catalogo.push(producto11)
catalogo.push(producto12)

// funciones

// agregar card al carrito
function actualizarCarrito(carrito) {
  carrito.productos.forEach(producto => {
    const row = document.createElement("tr")
    row.innerHTML = 
      `<td><img src="${producto.foto}" class="fotoCarrito"></td>
        <td>${producto.nombre} <br> $${producto.precio}</td>
        <td>
        <button class="btn btn-dark btn-sm p-2 btnEliminar"> Eliminar </button>
        </td>`
    listaProductos.appendChild(row)
  })
  listaProductos.innerHTML += `<p class="total">Precio Total: $${carrito.calcularTotal()}</p>`
}

function renovarStorage() {
  localStorage.removeItem("carrito"); 
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* Cargar carrito existente */
window.addEventListener('DOMContentLoaded', (e) => {
  let storage = JSON.parse(localStorage.getItem("carrito"));
  let carritoGuardado = new Carrito(storage.id, storage.productos);
  storage.productos.forEach(producto => {
      carritoGuardado.productos.push(producto);
  })
  limpiarCarrito();
  actualizarCarrito(carritoGuardado);
});


// limpiar carrito
vaciarCarrito.onclick = limpiarCarrito
function limpiarCarrito() {
  listaProductos.innerHTML = ""
  localStorage.clear()
}

// Ingresar un prod al carrito 
let carrito = new Carrito(1);
let arrayDeBotones = Array.from(botones)
arrayDeBotones.forEach(boton => {
  boton.addEventListener("click", (e) => {
    let productoElegido = catalogo.find(producto => producto.id == e.target.id)
    carrito.productos.push(productoElegido)
    limpiarCarrito()
    actualizarCarrito(carrito)
    renovarStorage()
  })
})

let arrayDeBtnEliminar = Array.from(eliminarProducto)
arrayDeBtnEliminar.forEach(eliminar => {
  eliminar.addEventListener("click", (e) => {
    let productoElegido = catalogo.find(producto => producto.id == e.target.id)
    productoElegido.remove()
  })
})

// menu
addEventListener('DOMContentLoaded',()=>{
  const btnMenu = document.querySelector('.btnMenu')
  if(btnMenu){
      btnMenu.addEventListener('click',()=>{
          const menuItems = document.querySelector('.menuItems')
          menuItems.classList.toggle('show')
      })
  }
})