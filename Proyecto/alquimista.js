let cantidadAgua = document.getElementById('cantidadAgua')
let totalAgua = document.getElementById('totalAgua')
const btnAgua = document.getElementById('btnAgua')
const mensajeAgua = document.querySelector('.mensajeAgua')

let cantidadViento = document.getElementById('cantidadViento')
let totalViento = document.getElementById('totalViento')
const btnViento = document.getElementById('btnViento')
const mensajeViento = document.querySelector('.mensajeViento')

let cantidadFuego = document.getElementById('cantidadFuego')
let totalFuego = document.getElementById('totalFuego')
const btnFuego = document.getElementById('btnFuego')
const mensajeFuego = document.querySelector('.mensajeFuego')

let cantidadTierra = document.getElementById('cantidadTierra')
let totalTierra = document.getElementById('totalTierra')
const btnTierra = document.getElementById('btnTierra')
const mensajeTierra = document.querySelector('.mensajeTierra') 

let totalCesta = document.getElementById('totalCesta')
const btnCesta = document.getElementById('btnCesta')
const mensajeCesta = document.querySelector('.mensajeCesta')

btnAgua.addEventListener('click',calcularAgua)
btnViento.addEventListener('click',calcularViento)
btnFuego.addEventListener('click',calcularFuego)
btnTierra.addEventListener('click',calcularTierra)
btnCesta.addEventListener('click',calcularCesta)

function calcularAgua() {
  let cantidad = Number(cantidadAgua.value)
  let precioAgua = 5
  mensajeAgua.innerHTML = ''

  if (cantidad <= 0) {
    mensajeAgua.innerHTML = 'Cantidad incorrecta'
  } else if (cantidad > 50) {
    mensajeAgua.innerHTML = 'Has superado el máximo de unidades por pedido'
  } else {
    for (let contador=1; contador<=cantidad; contador++) {
      totalAgua = totalAgua + precioAgua
      console.log(totalAgua)
    }
    mensajeAgua.innerHTML = `El importe total de Agua es: ${totalAgua} €`
  }
}

function calcularViento() {
  let cantidad = Number(cantidadViento.value)
  let precioViento = 6
  mensajeViento.innerHTML = ''

  if (cantidad <= 0) {
    mensajeViento.innerHTML = 'Cantidad incorrecta'
  } else if (cantidad > 50) {
    mensajeViento.innerHTML = 'Has superado el máximo de unidades por pedido'
  } else {
    for (let contador=1; contador<=cantidad; contador++) {
      totalViento = totalViento + precioViento
      console.log(totalViento)
    }
    mensajeViento.innerHTML = `El importe total de Viento es: ${totalViento} €`
  }
}

function calcularFuego() {
  let cantidad = Number(cantidadFuego.value)
  let precioFuego = 7
  mensajeFuego.innerHTML = ''

  if (cantidad <= 0) {
    mensajeFuego.innerHTML = 'Cantidad incorrecta'
  } else if (cantidad > 50) {
    mensajeFuego.innerHTML = 'Has superado el máximo de unidades por pedido'
  } else {
    for (let contador=1; contador<=cantidad; contador++) {
      totalFuego = totalFuego + precioFuego
      console.log(totalFuego)
    }
    mensajeFuego.innerHTML = `El importe total de Fuego es: ${totalFuego} €`
  }
}

function calcularTierra() {
  let cantidad = Number(cantidadTierra.value)
  let precioTierra = 8
  mensajeTierra.innerHTML = ''

  if (cantidad <= 0) {
    mensajeTierra.innerHTML = 'Cantidad incorrecta'
  } else if (cantidad > 50) {
    mensajeTierra.innerHTML = 'Has superado el máximo de unidades por pedido'
  } else {
    for (let contador=1; contador<=cantidad; contador++) {
      totalTierra = totalTierra + precioTierra
      console.log(totalTierra)
    }
    mensajeTierra.innerHTML = `El importe total de Tierra es: ${totalTierra} €`
  }
}

function calcularCesta() {
  totalCesta = totalAgua + totalViento + totalFuego + totalTierra
  mensajeCesta.innerHTML = `${totalCesta}`
}