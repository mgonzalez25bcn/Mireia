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

precioAgua = 5
precioViento = 6
precioFuego = 7
precioTierra = 8
totalAgua = 0
totalViento = 0
totalFuego = 
totalTierra = 0
unidadesAgua = 0
unidadesViento = 0
unidadesFuego = 0
unidadesTierra = 0
unidadesElemento = 0
totalElemento = 0

const agua = {
  cantidad: cantidadAgua,
  precio: precioAgua,
  total: 0,
  unidades: 0
};

btnAgua.addEventListener('click', () => {
  mensajeAgua.innerHTML = calcularElementos(cantidadAgua, precioAgua, agua);
// btnAgua.addEventListener('click', () => {mensajeAgua.innerHTML = calcularElementos(agua, 'Agua');});
// btnViento.addEventListener('click', () => {mensajeViento.innerHTML = calcularElementos(cantidadViento, precioViento, 'Viento');});
// btnFuego.addEventListener('click', () => {mensajeFuego.innerHTML = calcularElementos(cantidadFuego, precioFuego, 'Fuego');});
// btnTierra.addEventListener('click', () => {mensajeTierra.innerHTML = calcularElementos(cantidadTierra, precioTierra, 'Tierra');});
btnResumen.addEventListener('click',calcularResumen)
btnCesta.addEventListener('click',totalDeLaCesta)
btnResetAgua.addEventListener('click',resetAgua)
btnResetViento.addEventListener('click',resetViento)
btnResetFuego.addEventListener('click',resetFuego)
btnResetTierra.addEventListener('click',resetTierra)

function calcularElementos(entUnidades,entPrecioUnidad,entElemento) {
  let unidades = Number(entUnidades.value)
  let precioUnidad = entPrecioUnidad
  let elemento = entElemento

  // unidadesElemento = unidadesElemento + unidades
  elemento.unidades = elemento.unidades + unidades

  if (elemento.unidades <= 0) {
    return 'Cantidad incorrecta'
  } else if (elemento.unidades > 50) {
    return `Has superado el máximo de unidades por pedido <br> Se reinicia tu pedido de ${elemento.nombre}`
    elemento.unidades = 0
    elemento.total = 0
    entUnidades.value = ''
  } else {
    for (let contador=0; contador<unidades; contador++) {
      // totalElemento = totalElemento + precioUnidad
      elemento.total = elemento.total + (unidades * precioUnidad)
    }
    return `Llevas un total de ${elemento.unidades} unidades <br> El importe total de ${elemento.nombre} es: ${elemento.total} €`
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

unidadesAgua = cantidadAgua

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
  