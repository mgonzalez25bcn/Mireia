// Declaración de variables
// al ponerlo como selector, ponemos # delante. Es lo mismo, de 2 formas diferentes
const contador = document.querySelector('#contador')  //esto es un h2 que tiene un 0
const mensaje = document.getElementById('mensaje')

const btnEntrada = document.getElementById('btn-entrada')
const btnSalida = document.getElementById('btn-salida')
const btnReset = document.getElementById('btn-reset')

const MAX = 10
const MIN = 0

//Estado 
let personas = 0

//Listeners
btnEntrada.addEventListener('click', incremento)
btnSalida.addEventListener('click', decremento)
btnReset.addEventListener('click', reset)


function incremento() {
  if (personas < MAX) {
    personas++
    contador.innerHTML = personas
    if (personas >=7 && personas <=10) {
      mensaje.innerHTML = 'Casi lleno'
      // mensaje.classList.remove('rosa')
      mensaje.classList.add('naranja')
      contador.style.color = 'orange'
    } 
    if (personas === MAX){
      mensaje.innerHTML = 'Completo'
      // mensaje.style.color = 'red'
      mensaje.classList.remove('naranja')
      mensaje.classList.add('rosa')
      contador.style.color = 'pink'
    } 
  }
}

function decremento() {
  if (personas > MIN) {
    personas--
    contador.innerHTML = personas
    if (personas >= 7 && personas < MAX) {
      mensaje.innerHTML = 'Casi lleno'
      mensaje.classList.add('naranja')
      contador.style.color = 'orange'
    }  else {
      mensaje.classList.remove('naranja')
      mensaje.innerHTML = ''
      contador.style.color = 'black'
    }

}
}

function reset() {
  personas = 0
  contador.innerHTML = personas
  contador.style.color = 'black'
  mensaje.innerHTML = ''
}
