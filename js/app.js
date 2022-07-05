// VARIABLES
const btnMenu = document.querySelector('.btnMenu')
const agregarCarrito = document.querySelector('.agregarCarrito')
// MENU
addEventListener('DOMContentLoaded',()=>{
    if(btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})


// // VARIABLES GLOBALES
// // CARRITO
// const carrito = []
// // FUNCION INICIALIZAR ELEMENTOS
// function inicializarElementos(){

// }
// // CONSTRUCTOR
// class Producto{
//     constructor(nombre, precio, categoria, ID){
//         this.nombre = nombre
//         this.precio = precio
//         this.categoria = categoria
//         this.ID = ID
//     }
// }
// // OBJETOS DECO
// const almohadonesVarios = new Producto ("Almohadones Varios", 5600, 20, "deco", 1)
// const setMesaYBancos = new Producto ("Set Mesa y Bancos", 78999, 3, "deco", 2)
// const setMesaYBanquetas = new Producto ("Set Mesa y Banquetas", 25000, 3, "deco", 3)
// const setMesaYLampara = new Producto ("Set Mesa y Lampara", 35500, 4, "deco", 4)
// const bauleraAmarilla = new Producto ("Baulera Amarilla", 15550, 6, "deco", 5)
// // OBJETOS CUADROS
// const cuadroVerde = new Producto ("Cuadro Verde", 5600, 15, "cuadros", 6)
// const cuadroBlanco = new Producto ("Cuadro Blanco", 8000, 7, "cuadros", 7)
// // OBJETOS VELAS
// const tallRibbedTower = new Producto ("Tall Ribbed Tower", 700, 20, "velas", 8)
// const shortRibbedTower = new Producto ("Short Ribbed Tower", 1000, 3, "velas", 9)
// // TODOS LOS PRODUCTOS 
// const productos = [
//     almohadonesVarios,
//     setMesaYBancos,
//     setMesaYBanquetas,
//     setMesaYLampara,
//     bauleraAmarilla,
//     cuadroVerde,
//     cuadroBlanco,
//     tallRibbedTower,
//     shortRibbedTower
// ]
// // FUNCION SALUDAR
// function saludar(){
//     let nombre = prompt('¿Cómo es tu nombre?')
//     alert(`Hola ${nombre}`)
// }
// saludar()
// // FUNCION SEGUIR COMPRANDO
// function seguirComprando(){
//     let repregunta = prompt('¿Desea comprar algo mas? (si/no)')
//     let eleccion = repregunta.toUpperCase()
//     if(eleccion == 'SI'){
//         compra()
//     }else if(eleccion == 'NO'){
//         alert(`Su carrito: \n ${JSON.stringify(carrito)}`)
//         pagar()
//         const total = totalCarrito()
//         alert('Gracias por su compra')
//     }else{
//         alert('Ingrese una opción valida')
//         seguirComprando()
//     }
// }
// // FUNCION ACOMODAR PRECIOS 
// function acomodar(){
//     let preguntaAcomodar = prompt("Como desea acomodar los productos: \n 1.Del mas economico al mas costoso \n 2. Del mas costoso al mas economico")
//     switch(preguntaAcomodar){
//         case "1": 
//             productos.sort((a, b) => {
//                 if (a.precio > b.precio) {
//                     return 1;
//                 }
//                 if (a.precio < b.precio) {
//                     return -1;
//                 }
//                 return 0;
//             })
//             alert(JSON.stringify(productos))
//             break
//         case "2":
//             productos.sort((a, b) => {
//                 if (b.precio > a.precio) {
//                     return 1;
//                 }
//                 if (b.precio < a.precio) {
//                     return -1;
//                 }
//                 return 0;
//             })            
//             alert(JSON.stringify(productos))
//             break
//         default:
//             alert("Seleccione una opcion valida")
//             acomodar()
//     }
// }
// acomodar()
// // FUNCION PAGAR
// function pagar(){
//     let pago = prompt('¿Con qué desea pagar? (transferencia/tarjeta)').toUpperCase()
//     if(pago == 'TRANSFERENCIA'){
//         alert('Usted tiene un 10% de descuento')
//         const total = totalCarrito()
//         const precioConTransferencia = Math.round(total - (total*0.10))
//         alert(`Su total es de: $${precioConTransferencia}`)
//     }else if(pago == 'TARJETA'){
//         alert('Usted tiene un 25% de recargo')
//         const total = totalCarrito()
//         const precioConTarjeta = Math.round(total + (total*0.25))
//         alert(`Su total es de: $${precioConTarjeta}`)
//     }
// }
// //FUNCION TOTAL CARRITO
// function totalCarrito(){
//     return carrito.reduce((acc, el) => acc + el.precio, 0)
// }
// // FUNCION COMPRA
// function compra(){
//     let pregunta = prompt('¿Qué te gustaría comprar? \n 1- Deco \n 2- Cuadros \n 3- Velas')
//     let eleccion = pregunta.toUpperCase()
//     if(eleccion == 1 || eleccion == 'DECO'){
//         let opciones = parseFloat(prompt(`Nuestras opciones son: \n 1. ${almohadonesVarios.nombre}: $${almohadonesVarios.precio} \n 2. ${setMesaYBancos.nombre}: $${setMesaYBancos.precio} \n 3. ${setMesaYBanquetas.nombre}: $${setMesaYBanquetas.precio} \n 4. ${setMesaYLampara.nombre}: $${setMesaYLampara.precio} \n 5. ${bauleraAmarilla.nombre}: $${bauleraAmarilla.precio}`))
//         switch(opciones){
//             case 1:
//                 carrito.push({nombre: almohadonesVarios.nombre, precio: almohadonesVarios.precio})
//                 seguirComprando()
//                 break
//             case 2:
//                 carrito.push({nombre: setMesaYBancos.nombre, precio: setMesaYBancos.precio})
//                 seguirComprando()
//                 break
//             case 3:
//                 carrito.push({nombre: setMesaYBanquetas.nombre, precio: setMesaYBanquetas.precio})
//                 seguirComprando()
//                 break
//             case 4:
//                 carrito.push({nombre: setMesaYLampara.nombre, precio: setMesaYLampara.precio})
//                 seguirComprando()
//                 break
//             case 5:
//                 carrito.push({nombre: bauleraAmarilla.nombre, precio: bauleraAmarilla.precio})
//                 seguirComprando()
//                 break
//             default:
//                 alert("Opcion no valida")
//                 compra()
//         }
//     }else if(eleccion == 2 || eleccion == 'CUADROS'){
//         let opciones = parseInt(prompt(`Nuestras opciones son: \n 1. ${cuadroVerde.nombre}: $${cuadroVerde.precio} \n 2. ${cuadroBlanco.nombre}: $${cuadroBlanco.precio}`))
//         switch(opciones){
//             case 1:
//                 carrito.push({nombre: cuadroVerde.nombre, precio: cuadroVerde.precio})
//                 seguirComprando()
//                 break
//             case 2:
//                 carrito.push({nombre: cuadroBlanco.nombre, precio: cuadroBlanco.precio})
//                 seguirComprando()
//                 break
//             default: 
//                 alert("Opcion no valida")
//                 compra()
//         }
//     }else if(eleccion == 3 || eleccion == 'VELAS'){
//         let opciones = parseInt(prompt(`Nuestras opciones son: \n 1. ${tallRibbedTower.nombre}: $${tallRibbedTower.precio} \n 2. ${shortRibbedTower.nombre}: $${shortRibbedTower.precio}`))
//         switch(opciones){
//             case 1:
//                 carrito.push({nombre: tallRibbedTower.nombre, precio: tallRibbedTower.precio})
//                 seguirComprando()
//                 break
//             case 2:
//                 carrito.push({nombre: shortRibbedTower.nombre, precio: shortRibbedTower.precio})
//                 seguirComprando()
//                 break
//             default: 
//                 alert("Opcion no valida")
//                 compra()
//         }
//     }else{
//             alert('Ingrese un valor válido')
//             compra()
//     }
// }
// compra()

