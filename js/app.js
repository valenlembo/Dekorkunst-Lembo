/* clase 2: crear un algoritmo con un condicional
Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre un resultado. */

// let mayoriaDeEdad = prompt("Ingrese su edad");
// if(mayoriaDeEdad >= 18){
//     alert("Genial eres mayor de edad puedes navegar por nuestro sitio")
// }else{
//     alert("Eres menor de edad no puedes navegar por nuestro sitio")
// }

/**/ 

// MENU
addEventListener('DOMContentLoaded',()=>{
    const btnMenu = document.querySelector('.btnMenu')
    if(btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})