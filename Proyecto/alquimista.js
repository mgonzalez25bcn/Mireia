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

btnAgua.addEventListener('click',calcularAgua)
btnViento.addEventListener('click',calcularViento)
btnFuego.addEventListener('click',calcularFuego)
btnTierra.addEventListener('click',calcularTierra)
btnResumen.addEventListener('click',calcularResumen)
btnCesta.addEventListener('click',totalDeLaCesta)
btnResetAgua.addEventListener('click',resetAgua)
btnResetViento.addEventListener('click',resetViento)
btnResetFuego.addEventListener('click',resetFuego)
btnResetTierra.addEventListener('click',resetTierra)

unidadesAgua = 0
unidadesViento = 0
unidadesFuego = 0
unidadesTierra = 0
totalAgua = 0
totalViento = 0
totalFuego = 0
totalTierra = 0

function calcularAgua() {
  let cantidad = Number(cantidadAgua.value)
  let precioAgua = 5
  mensajeAgua.innerHTML = ''

  unidadesAgua = unidadesAgua + cantidad

  if (unidadesAgua <= 0) {
    mensajeAgua.innerHTML = 'Cantidad incorrecta'
  } else if (unidadesAgua > 50) {
    mensajeAgua.innerHTML = 'Has superado el máximo de unidades por pedido <br> Se reinicia tu pedido de Agua'
    unidadesAgua = 0
    cantidadAgua.value = ''
    totalAgua = 0
  } else {
    for (let contador=0; contador<cantidad; contador++) {
      totalAgua = totalAgua + precioAgua
    }
    mensajeAgua.innerHTML = `Llevas un total de ${unidadesAgua} unidades <br>
    El importe total de Agua es: ${totalAgua} €`
  }
}

function calcularViento() {
  let cantidad = Number(cantidadViento.value)
  let precioViento = 6
  mensajeViento.innerHTML = ''

  unidadesViento = unidadesViento + cantidad

  if (unidadesViento <= 0) {
    mensajeViento.innerHTML = 'Cantidad incorrecta'
  } else if (unidadesViento > 50) {
    mensajeViento.innerHTML = 'Has superado el máximo de unidades por pedido <br> Se reinicia tu pedido de Viento'
    unidadesViento = 0
    cantidadViento.value = ''
    totalViento = 0
  } else {
    for (let contador=0; contador<cantidad; contador++) {
      totalViento = totalViento + precioViento
    }
    mensajeViento.innerHTML = `Llevas un total de ${unidadesViento} unidades <br>
    El importe total de Viento es: ${totalViento} €`
  }
}

function calcularFuego() {
  let cantidad = Number(cantidadFuego.value)
  let precioFuego = 6
  mensajeFuego.innerHTML = ''

  unidadesFuego = unidadesFuego + cantidad

  if (unidadesFuego <= 0) {
    mensajeFuego.innerHTML = 'Cantidad incorrecta'
  } else if (unidadesFuego > 50) {
    mensajeFuego.innerHTML = 'Has superado el máximo de unidades por pedido <br> Se reinicia tu pedido de Fuego'
    unidadesFuego = 0
    cantidadFuego.value = ''
    totalFuego = 0
  } else {
    for (let contador=0; contador<cantidad; contador++) {
      totalFuego = totalFuego + precioFuego
    }
    mensajeFuego.innerHTML = `Llevas un total de ${unidadesFuego} unidades <br>
    El importe total de Fuego es: ${totalFuego} €`
  }
}

function calcularTierra() {
  let cantidad = Number(cantidadTierra.value)
  let precioTierra = 6
  mensajeTierra.innerHTML = ''

  unidadesTierra = unidadesTierra + cantidad

  if (unidadesTierra <= 0) {
    mensajeTierra.innerHTML = 'Cantidad incorrecta'
  } else if (unidadesTierra > 50) {
    mensajeTierra.innerHTML = 'Has superado el máximo de unidades por pedido <br> Se reinicia tu pedido de Tierra'
    unidadesTierra = 0
    cantidadTierra.value = ''
    totalTierra = 0
  } else {
    for (let contador=0; contador<cantidad; contador++) {
      totalTierra = totalTierra + precioTierra
    }
    mensajeTierra.innerHTML = `Llevas un total de ${unidadesTierra} unidades <br>
    El importe total de Tierra es: ${totalTierra} €`
  }
}

function resetAgua() {
  unidadesAgua = 0
  cantidadAgua.value = ''
  totalAgua = 0
  mensajeAgua.innerHTML = ''
}

function resetViento() {
  unidadesViento = 0
  cantidadViento.value = ''
  totalViento = 0
  mensajeViento.innerHTML = ''
}

function resetFuego() {
  unidadesFuego = 0
  cantidadFuego.value = ''
  totalFuego = 0
  mensajeFuego.innerHTML = ''
}

function resetTierra() {
  unidadesTierra = 0
  cantidadTierra.value = ''
  totalTierra = 0
  mensajeTierra.innerHTML = ''
}
function calcularResumen() {
  mensajeResumen.innerHTML = ''

  if ((totalAgua == 0) && (totalViento == 0) && (totalFuego == 0) && (totalTierra == 0)){
    mensajeResumen.innerHTML = 'La cesta está vacía'
  } else {
    if (totalAgua > 0) {
      mensajeResumen.innerHTML += `Has añadido ${unidadesAgua} unidades de Agua a 5 €. 
      Importe total de Agua: ${totalAgua} € <br>`}
    if (totalViento > 0) {
      mensajeResumen.innerHTML += `Has añadido ${unidadesViento} unidades de Viento a 6 €. 
      Importe total de Viento: ${totalViento} € <br>`}
    if (totalFuego > 0) {
      cantidadF = Number(cantidadFuego.value)
      mensajeResumen.innerHTML += `Has añadido ${cantidadF} unidades de Fuego a 7 €. 
      Importe total de Fuego: ${totalFuego} € <br>`}
    if (totalTierra > 0) {
      cantidadT = Number(cantidadTierra.value)
      mensajeResumen.innerHTML += `Has añadido ${cantidadT} unidades de Tierra a 8 €. 
      Importe total de Tierra: ${totalTierra} € <br>`}
  }
}

function calcularCesta() {
  totalCesta = totalAgua + totalViento + totalFuego + totalTierra
  mensajeCesta.innerHTML = `${totalCesta} €`
}

function totalDeLaCesta() {
  calcularResumen()
  calcularCesta()
}
  