// vars globales
// aca adentro es donde voy a poner el innerHTML para que se agreguen los productos en e tbody
const listaProductos = document.querySelector("#listaCarrito tbody")
// algunos productos
const almohadonesAgregar = document.getElementById("1")
const setCuadrosAgregar = document.getElementById("2")

// funciones agregar productos al carrito
almohadonesAgregar.onclick = () => {
  const row = document.createElement("tr")
  row.innerHTML = 
    `<td><img src="${almohadonesVarios.foto}" class="fotoCarrito"></td>
      <td>${almohadonesVarios.nombre} <br> $${almohadonesVarios.precio}</td>`
  listaProductos.appendChild(row)
}
setCuadrosAgregar.onclick = () => {
  const row = document.createElement("tr")
  row.innerHTML = 
    `<td><img src="${setCuadros.foto}" class="fotoCarrito"></td>
      <td>${setCuadros.nombre} <br> $${setCuadros.precio}</td>`
  listaProductos.appendChild(row)
}

// obj constructor productos
class Producto{
  constructor(nombre, precio, foto, categoria, id){
      this.nombre = nombre
      this.precio = precio
      this.foto = foto
      this.categoria = categoria
      this.id = id
  }
}

// productos best sellers
const almohadonesVarios = new Producto ("Almohadones Varios", 5600, "./img/almohadones.jpeg", "deco", 1)
const setCuadros = new Producto ("Set Cuadros", 3500, "./img/cuadros2.jpeg", "cuadros", 2)
const pieDeCamaRojo = new Producto ("Pie de Cama", 4490, "./img/pieDeCama2.jpeg", "deco", 3)
const shortRibbedTower = new Producto ("Short Ribbed Tower", 1000, "./img/velas12.jpeg", "velas", 4)
const cuadroBlancoyVerde = new Producto ("Cuadro Blanco y Verde", 6000, "./img/cuadro3.jpeg", "cuadros", 5)
const mixedSet = new Producto ("Mixed set", 6550, "./img/velas13.jpeg", "velas", 6)
const MesaMadera = new Producto ("Mesa Madera", 18000, "./img/cuadros4.jpeg", "deco", 7)
const setCuadrosVarios = new Producto ("Set Cuadros Varios", 15500, "./img/cuadros12.jpeg", "cuadros", 8)
const geoLady = new Producto ("Geo Lady", 1500, "./img/velas19.jpeg", "velas", 9)
const alfombra = new Producto ("Alfombra", 18000, "./img/alfombra2.jpeg", "deco", 10)
const bauleraAmarilla = new Producto ("Baulera Amarilla", 15550, "./img/bauleraAmarilla.jpeg", "deco", 11)
const setCuadrosVariosLuna = new Producto ("Set Cuadros Varios Luna", 12500, "./img/cuadros11.jpeg", "cuadros", 12)

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