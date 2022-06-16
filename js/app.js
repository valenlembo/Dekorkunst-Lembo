
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

// PRIMER DESAFIO
function saludar(){
    let nombre = prompt('¿Cómo es tu nombre?')
    alert(`Hola ${nombre}`)
}
saludar()

function repreguntar(){
    let repregunta = prompt('¿Desea comprar algo mas? (si/no)')
    if(repregunta == 'si'){
        preguntar()
    }else if(repregunta == 'no'){
        alert('Gracias por su compra')
    }else{
        alert('Ingrese una opción valida')
        repreguntar()
    }
}

function pagar(){
    let pago = prompt('¿Con qué desea pagar? (transferencia/tarjeta)')
    if(pago == 'transferencia' || pago == 'Transferencia' || pago == 'TRANSFERENCIA'){
        alert('Usted tiene un 10% de descuento')
        let monto = parseFloat(prompt('Ingrese el monto a pagar sin puntos ni comas')) 
        let descuento = monto * 0.10
        let total = monto - descuento
        alert(`Su pago es de: ${total}`)
    }else if(pago == 'tarjeta' || pago == 'Tarjeta' || pago == 'TARJETA'){
        let monto = parseFloat(prompt('Ingrese el monto a pagar sin puntos ni comas'))
        alert('Usted tiene para elegir:')
        for(let i = 1; i <= 6; i++){
            let interes = monto * (i * 0.05)
            let cuota = (monto + interes) / i
            let total = monto + interes
            alert(`${i} cuotas de: $ ${cuota} \n Total de: $ ${total}`)
        }
        let cuotas = parseInt(prompt('¿En cuantas cuotas desea pagar?')) 
        if(cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 4 || cuotas == 5 || cuotas == 6){
            alert(`Enhorabuena su pago se ha concretado en ${cuotas} cuotas`)
        }else{
            alert('Ingrese una opción valida')
            pagar()
        }
    }
}

function deco(){
    let opcionDeco = prompt('Nuestras opciones son: \n 1- Almohadones Varios: $5.600 \n 2- Baulera Amarilla: $15.550 \n 3- Pie de cama azul: $4.490 \n 4- Pie de cama roja: $4.490 \n 5- Portalibros: $6.550 \n 6- Alfombra: $18.000')
    if(opcionDeco == 1 || opcionDeco == '1' || opcionDeco == 'Almohadones Varios' || opcionDeco == 'almohadones varios' || opcionDeco == 'ALMOHADONES VARIOS'){
        alert('Su compra es: Almohadones Varios, debe abonar $5.600')
        pagar()
        repreguntar()
    }else if(opcionDeco == 2 || opcionDeco == '2' || opcionDeco == 'Baulera Amarilla' || opcionDeco == 'baulera amarilla' || opcionDeco == 'BAULERA AMARILLA'){
        alert('Su compra es: Baulera Amarilla, debe abonar $15.550')
        pagar()
        repreguntar()
    }else if(opcionDeco == 3 || opcionDeco == '3' || opcionDeco == 'Pie de cama azul' || opcionDeco == 'pie de cama azul' || opcionDeco == 'PIE DE CAMA AZUL'){
        alert('Su compra es: Pie de cama azul, debe abonar $4.490')
        pagar()
        repreguntar()
    }else if(opcionDeco == 4 || opcionDeco == '4' || opcionDeco == 'Pie de cama roja' || opcionDeco == 'pie de cama roja' || opcionDeco == 'PIE DE CAMA ROJA'){
        alert('Su compra es: Pie de cama roja, debe abonar $4.490')
        pagar()
        repreguntar()
    }else if(opcionDeco == 5 || opcionDeco == '5' || opcionDeco == 'Portalibros' || opcionDeco == 'portalibros' || opcionDeco == 'PORTALIBROS'){
        alert('Su compra es: Portalibros, debe abonar $6.550')
        pagar()
        repreguntar()
    }else if(opcionDeco == 6 || opcionDeco == '6' || opcionDeco == 'Alfombra' || opcionDeco == 'alfombra' || opcionDeco == 'ALFOMBRA'){
        alert('Su compra es: Alfombra, debe abonar $18.000')
        pagar()
        repreguntar()
    }else{
        alert('No se encontró la opción')
        deco()
    }
}

function cuadros(){
    let opcionCuadros = prompt('Nuestras opciones son: \n 1- Cuadro de madera: $5.600 \n 2- Cuadro de metal: $15.550 \n 3- Cuadro de plastico: $4.490 \n 4- Cuadro de vidrio: $4.490 \n 5- Cuadro de cristal: $6.550 \n 6- Cuadro de piedra: $18.000')
    if(opcionCuadros == 1 || opcionCuadros == '1' || opcionCuadros == 'Cuadro de madera' || opcionCuadros == 'cuadro de madera' || opcionCuadros == 'CUADRO DE MADERA'){
        alert('Su compra es: Cuadro de madera, debe abonar $5.600')
        pagar()
        repreguntar()
    }else if(opcionCuadros == 2 || opcionCuadros == '2' || opcionCuadros == 'Cuadro de metal' || opcionCuadros == 'cuadro de metal' || opcionCuadros == 'CUADRO DE METAL'){
        alert('Su compra es: Cuadro de metal, debe abonar $15.550')
        pagar()
        repreguntar()
    }else if(opcionCuadros == 3 || opcionCuadros == '3' || opcionCuadros == 'Cuadro de plastico' || opcionCuadros == 'cuadro de plastico' || opcionCuadros == 'CUADRO DE PLASTICO'){
        alert('Su compra es: Cuadro de plastico, debe abonar $4.490')
        pagar()
        repreguntar()
    }else if(opcionCuadros == 4 || opcionCuadros == '4' || opcionCuadros == 'Cuadro de vidrio' || opcionCuadros == 'cuadro de vidrio' || opcionCuadros == 'CUADRO DE VIDRIO'){
        alert('Su compra es: Cuadro de vidrio, debe abonar $4.490')
        pagar()
        repreguntar()
    }else if(opcionCuadros == 5 || opcionCuadros == '5' || opcionCuadros == 'Cuadro de cristal' || opcionCuadros == 'cuadro de cristal' || opcionCuadros == 'CUADRO DE CRISTAL'){
        alert('Su compra es: Cuadro de cristal, debe abonar $6.550')
        pagar()
        repreguntar()
    }else if(opcionCuadros == 6 || opcionCuadros == '6' || opcionCuadros == 'Cuadro de piedra' || opcionCuadros == 'cuadro de piedra' || opcionCuadros == 'CUADRO DE PIEDRA'){
        alert('Su compra es: Cuadro de piedra, debe abonar $18.000')
        pagar()
        repreguntar()
    }else{
        alert('No se encontró la opción')
        cuadros()
    }
}

function velas(){
    let opcionVelas = prompt('Nuestras opciones son: \n 1- Tall Ribbed Tower: $700 \n 2- Short Ribbed Tower: $1.000 \n 3- Tangled: $1.800 \n 4- Wabe x3: $3.300 \n 5- Set Black: $1.500 \n 6- Shell: $1.300')
    if(opcionVelas == 1 || opcionVelas == '1' || opcionVelas == 'Tall Ribbed Tower' || opcionVelas == 'tall ribbed tower' || opcionVelas == 'TALL RIBBED TOWER'){
        alert('Su compra es: Tall Ribbed Tower, debe abonar $700')
        pagar()
        repreguntar()
    }else if(opcionVelas == 2 || opcionVelas == '2' || opcionVelas == 'Short Ribbed Tower' || opcionVelas == 'short ribbed tower' || opcionVelas == 'SHORT RIBBED TOWER'){
        alert('Su compra es: Short Ribbed Tower, debe abonar $1.000')
        pagar()
        repreguntar()
    }else if(opcionVelas == 3 || opcionVelas == '3' || opcionVelas == 'Tangled' || opcionVelas == 'tangled' || opcionVelas == 'TANGLED'){
        alert('Su compra es: Tangled, debe abonar $1.800')
        pagar()
        repreguntar()
    }else if(opcionVelas == 4 || opcionVelas == '4' || opcionVelas == 'Wabe x3' || opcionVelas == 'wabe x3' || opcionVelas == 'WABE X3'){
        alert('Su compra es: Wabe x3, debe abonar $3.300')
        pagar()
        repreguntar()
    }else if(opcionVelas == 5 || opcionVelas == '5' || opcionVelas == 'Set Black' || opcionVelas == 'set black' || opcionVelas == 'SET BLACK'){
        alert('Su compra es: Set Black, debe abonar $1.500')
        pagar()
        repreguntar()
    }else if(opcionVelas == 6 || opcionVelas == '6' || opcionVelas == 'Shell' || opcionVelas == 'shell' || opcionVelas == 'SHELL'){
        alert('Su compra es: Shell, debe abonar $1.300')
        pagar()
        repreguntar()
    }else{
        alert('No se encontró la opción')
        preguntar()
    }
}

function preguntar(){
    let pregunta = prompt('¿Qué te gustaría comprar? \n 1- Deco \n 2- Cuadros \n 3- Velas')
    if(pregunta == 1 || pregunta == 'Deco' || pregunta == 'deco' || pregunta == 'DECO'){
        deco()
    }else if(pregunta == 2 || pregunta == 'Cuadros' || pregunta == 'cuadros' || pregunta == 'CUADROS'){
        cuadros()
    }else if(pregunta == 3 || pregunta == 'Velas' || pregunta == 'velas' || pregunta == 'VELAS'){
        velas()
    }else{
        alert('Ingrese un valor válido')
        preguntar()
    }
}
preguntar()

