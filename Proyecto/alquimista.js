let cantidadAgua = document.getElementById('cantidadAgua')
const btnAgua = document.getElementById('btnAgua')
const btnResetAgua = document.getElementById('btnResetAgua')
const mensajeAgua = document.querySelector('.mensajeAgua')

let cantidadViento = document.getElementById('cantidadViento')
const btnViento = document.getElementById('btnViento')
const btnResetViento = document.getElementById('btnResetViento')
const mensajeViento = document.querySelector('.mensajeViento')

let cantidadFuego = document.getElementById('cantidadFuego')
const btnFuego = document.getElementById('btnFuego')
const btnResetFuego = document.getElementById('btnResetFuego')
const mensajeFuego = document.querySelector('.mensajeFuego')

let cantidadTierra = document.getElementById('cantidadTierra')
const btnTierra = document.getElementById('btnTierra')
const btnResetTierra = document.getElementById('btnResetTierra')
const mensajeTierra = document.querySelector('.mensajeTierra') 

const btnResumen = document.getElementById('btnResumen')
const mensajeResumen = document.querySelector('.mensajeResumen')

let totalCesta = document.getElementById('totalCesta')
const btnCesta = document.getElementById('btnCesta')
const mensajeCesta = document.querySelector('.mensajeCesta')

let btnComprar = document.getElementById('btnComprar')
let btnReset = document.getElementById('btnReset')

let totalAgua = 0
let totalViento = 0
let totalFuego = 0
let totalTierra = 0
let unidadesAgua = 0
let unidadesViento = 0
let unidadesFuego = 0
let unidadesTierra = 0
let unidadesElemento = 0
let totalElemento = 0
const txtAgua = 'agua'
const txtViento = 'viento'
const txtFuego = 'fuego'
const txtTierra = 'tierra'

var varAgua = {
  varUnidades: 0,
  varPrecio: 5,
  varElemento: txtAgua,
  varImporteTotal: 0,
  varCantidadTotal: 0
}

var varViento = {
  varUnidades: 0,
  varPrecio: 6,
  varElemento: txtViento,
  varImporteTotal: 0,
  varCantidadTotal: 0
}

var varFuego = {
  varUnidades: 0,
  varPrecio: 7,
  varElemento: txtFuego,
  varImporteTotal: 0,
  varCantidadTotal: 0
}

var varTierra = {
  varUnidades: 0,
  varPrecio: 8,
  varElemento: txtTierra,
  varImporteTotal: 0,
  varCantidadTotal: 0
}

btnAgua.addEventListener('click', () => {mensajeAgua.innerHTML = calcularElementos(varAgua)});
btnViento.addEventListener('click', () => {mensajeViento.innerHTML = calcularElementos(varViento);});
btnFuego.addEventListener('click', () => {mensajeFuego.innerHTML = calcularElementos(varFuego);});
btnTierra.addEventListener('click', () => {mensajeTierra.innerHTML = calcularElementos(varTierra);});
btnResumen.addEventListener('click',calcularResumen)
btnCesta.addEventListener('click',totalDeLaCesta)
btnResetAgua.addEventListener('click',() => resetElementos(txtAgua))
btnResetViento.addEventListener('click',() => resetElementos(txtViento))
btnResetFuego.addEventListener('click',() => resetElementos(txtFuego))
btnResetTierra.addEventListener('click',() => resetElementos(txtTierra))
btnComprar.addEventListener('click', comprarCesta)
btnReset.addEventListener('click', resetCesta)

// ojo - botón reset general

function calcularElementos(entElementos){
  let elementos = entElementos

  if (elementos.varElemento === txtAgua) {
    elementos.varUnidades = Number(cantidadAgua.value)
    cantidadAgua.value = ''
  }
  if (elementos.varElemento === txtViento) {
    elementos.varUnidades = Number(cantidadViento.value)
    cantidadViento.value = ''
  }
  if (elementos.varElemento === txtFuego) {
    elementos.varUnidades = Number(cantidadFuego.value)
    cantidadFuego.value = ''
  }
  if (elementos.varElemento === txtTierra) {
    elementos.varUnidades = Number(cantidadTierra.value)
    cantidadTierra.value = ''
  }

  if ((elementos.varUnidades <= 0) || (elementos.varUnidades > 50)) {
    elementos.varUnidades = 0
    return 'Cantidad incorrecta'
  }

  elementos.varCantidadTotal = elementos.varCantidadTotal + elementos.varUnidades

  if (elementos.varCantidadTotal > 50) {
    resetElementos(elementos.varElemento)
    return `Has superado el máximo de unidades por pedido <br> Mágicamente se reinicia tu pedido de ${elementos.varElemento}`
  } else {
    for (let contador=0; contador<elementos.varUnidades; contador++) {
      elementos.varImporteTotal = elementos.varImporteTotal + elementos.varPrecio
    }

    return `Llevas un total de ${elementos.varCantidadTotal} unidades <br> El importe total de ${elementos.varElemento} es: ${elementos.varImporteTotal} €`
  }
}

function resetElementos(entElemento) {
  let elemento = entElemento

  if (elemento === txtAgua) {
    varAgua.varUnidades = 0,
    varAgua.varImporteTotal = 0,
    varAgua.varCantidadTotal = 0
    cantidadAgua.value = ''
    mensajeAgua.innerHTML = ''
  }

  if (elemento === txtViento) {
    varViento.varUnidades = 0,
    varViento.varImporteTotal = 0,
    varViento.varCantidadTotal = 0
    cantidadViento.value = ''
    mensajeViento.innerHTML = ''
  }

  if (elemento === txtFuego) {
    varFuego.varUnidades = 0,
    varFuego.varImporteTotal = 0,
    varFuego.varCantidadTotal = 0
    cantidadFuego.value = ''
    mensajeFuego.innerHTML = ''
  }

  if (elemento === txtTierra) {
    varTierra.varUnidades = 0,
    varTierra.varImporteTotal = 0,
    varTierra.varCantidadTotal = 0
    cantidadTierra.value = ''
    mensajeTierra.innerHTML = ''
  }
}

function calcularResumen() {
  mensajeResumen.innerHTML = ''
  mensajeCesta.innerHTML = ''

  if ((varAgua.varImporteTotal == 0) && (varViento.varImporteTotal == 0) && (varFuego.varImporteTotal == 0) && (varTierra.varImporteTotal == 0)){
    mensajeResumen.innerHTML = 'La cesta está vacía'
  } else {
    if (varAgua.varImporteTotal > 0) {
      mensajeResumen.innerHTML += `Has añadido ${varAgua.varCantidadTotal} unidades de Agua a 5 €. 
      Importe total de Agua: ${varAgua.varImporteTotal} € <br>`}
    if (varViento.varImporteTotal > 0) {
      mensajeResumen.innerHTML += `Has añadido ${varViento.varCantidadTotal} unidades de Viento a 6 €. 
      Importe total de Viento: ${varViento.varImporteTotal} € <br>`}
    if (varFuego.varImporteTotal > 0) {
      mensajeResumen.innerHTML += `Has añadido ${varFuego.varCantidadTotal} unidades de Fuego a 7 €. 
      Importe total de Fuego: ${varFuego.varImporteTotal} € <br>`}
    if (varTierra.varImporteTotal > 0) {
      mensajeResumen.innerHTML += `Has añadido ${varTierra.varCantidadTotal} unidades de Tierra a 8 €. 
      Importe total de Tierra: ${varTierra.varImporteTotal} € <br>`}
  }
}

function calcularCesta() {
  totalCesta = varAgua.varImporteTotal + varViento.varImporteTotal + 
        varFuego.varImporteTotal + varTierra.varImporteTotal
  mensajeCesta.innerHTML = `${totalCesta} €`
}

function totalDeLaCesta() {
  calcularResumen()
  calcularCesta()
}

function comprarCesta(){
  if(totalCesta >= 9000){
    alert('¡Felicidades! 🎉 Ya eres nivel oro 🥇')
  } 

  if(totalCesta >= 600 && totalCesta < 900){
    alert('¡Felicidades! 🎉 Ya eres nivel plata 🥈')
  } 

  if(totalCesta >= 300 && totalCesta < 600){
    alert('¡Felicidades! 🎉 Ya eres nivel bronce 🥉')
  } 

  if(totalCesta >= 1 && totalCesta < 300){
    alert('Compra realizada 💳✨')
  }
  if(totalCesta <=0){
    alert('No has añadido productos a la cesta 😲')
  }
}

function resetCesta(){
  location.reload();
}
  