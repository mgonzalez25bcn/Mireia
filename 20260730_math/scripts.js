//Declaración variables
let numeroDecimal = document.getElementById('numeroDecimal')
const btnProbarRedondeo = document.getElementById('btnProbarRedondeo')
let resultadoRound = document.getElementById('resultadoRound')
let resultadoCeil = document.getElementById('resultadoCeil')
let resultadoFloor = document.getElementById('resultadoFloor')

let numeroAleatorio = document.getElementById('numeroAleatorio')
const btnGenerarDecimal = document.getElementById('btnGenerarDecimal')

let carasDado = document.getElementById('carasDado')
let caraDado = document.getElementById('caraDado')
const btnLanzarDado = document.getElementById('btnLanzarDado')
const mensajeDado = document.getElementById('mensajeDado')
let listaLanzamientos = document.getElementById('listaLanzamientos')

let primerLanzamiento = true

const dadoJugador = document.getElementById('dadoJugador')
const dadoMaquina = document.getElementById('dadoMaquina')
const btnJugarRonda = document.getElementById('btnJugarRonda')
const btnReiniciar= document.getElementById('btnReiniciar')
const resultadoDuelo = document.getElementById('resultadoDuelo')
const puntosJugador = document.getElementById('puntosJugador')
const puntosMaquina = document.getElementById('puntosMaquina')
const rondasJugadas = document.getElementById('rondasJugadas')
const estadoMarcador = document.getElementById('estadoMarcador')

let ptsJugador = 0
let ptsMaquina = 0
let rdsJugadas = 0

//Listers

btnProbarRedondeo.addEventListener('click', ()=>{
  const numero = Number(numeroDecimal.value)

  resultadoRound.textContent = Math.round(numero)
  resultadoCeil.textContent = Math.ceil(numero)
  resultadoFloor.textContent = Math.floor(numero)
})

btnGenerarDecimal.addEventListener('click', ()=>{
  const numero = Math.random()
  numeroAleatorio.textContent = numero.toFixed(4)
})

btnLanzarDado.addEventListener('click', ()=>{
  const numeroCaras = Number(carasDado.value)
  caraDado.textContent = '?'
  mensajeDado.textContent = 'El dado está rodando...'
  setTimeout(()=>{
    let resultado = lanzarDado(numeroCaras)
    caraDado.textContent = resultado
    if(resultado === numeroCaras){
      mensajeDado.textContent = `Máxima puntuación: ${resultado}`
    } else if (resultado === 1) {
      mensajeDado.textContent = ':( Pringao, has sacado un 1'
    } else {
      mensajeDado.textContent = `Has sacado un ${resultado}`
    }
    if(primerLanzamiento){
      listaLanzamientos.textContent = ''
      primerLanzamiento = false
    }
    const nuevoResultado = document.createElement('div')
    nuevoResultado.textContent = resultado
    listaLanzamientos.prepend(nuevoResultado)
    if (listaLanzamientos.children.length > 9){
      // listaLanzamientos.lastElementChild.remove()
      btnLanzarDado.disabled = true
      mensajeDado.textContent = 'Llevas 10 tiradas. Descansa un rato'
      return
    }
  },1000)
})

btnJugarRonda.addEventListener('click', ()=>{
  dadoJugador.textContent = '?'
  dadoMaquina.textContent = '?'

  resultadoDuelo.textContent = 'Los dados están rodando...'
  setTimeout(() => {
    const resultadoJugador = lanzarDado(6)
    const resultadoMaquina = lanzarDado(6)
    dadoJugador.textContent = resultadoJugador
    dadoMaquina.textContent = resultadoMaquina

    if(resultadoJugador > resultadoMaquina){
      ptsJugador++
      resultadoDuelo.textContent = `Ganas la ronda: ${resultadoJugador} contra ${resultadoMaquina}`
    } else if(resultadoJugador < resultadoMaquina){
      ptsMaquina++
      resultadoDuelo.textContent = `Ganas la ronda: ${resultadoMaquina} contra ${resultadoJugador}`
    } else {
      resultadoDuelo.textContent = `Empate a ${resultadoJugador}`
    }

    rdsJugadas++

    puntosJugador.textContent = `Tú: ${ptsJugador}`
    puntosMaquina.textContent = `Máquina: ${ptsMaquina}`
    rondasJugadas.textContent = `Rondas: ${rdsJugadas}`

    actualizarEstadoMarcador()

    if(ptsJugador === 3){
      resultadoDuelo.textContent = '¡Has ganado la partida!'
      btnJugarRonda.disabled = true
      return
    }

    if(ptsMaquina === 3){
      resultadoDuelo.textContent = '¡Ha ganado la máquina!'
      btnJugarRonda.disabled = true
      return
    }

  }, 1000);
})

btnReiniciar.addEventListener('click',()=>{
  ptsJugador = 0
  ptsMaquina = 0
  rdsJugadas = 0

  puntosJugador.textContent = 'Tú: 0'
  puntosMaquina.textContent = 'Máquina: 0'
  rondasJugadas.textContent = 'Rondas: 0'
  estadoMarcador.textContent = 'Empate'

  dadoJugador.textContent = '?'
  dadoMaquina.textContent = '?'

  resultadoDuelo.textContent = '...'
  btnJugarRonda.disabled = false
})

//Funciones

function lanzarDado(numeroCaras = 6){
  return Math.floor(Math.random()*numeroCaras)+1
}

function actualizarEstadoMarcador(){
  if(ptsJugador > ptsMaquina){
    estadoMarcador.textContent = `Va ganando ${ptsJugador} a ${ptsMaquina}`
  } else if (ptsJugador < ptsMaquina){
    estadoMarcador.textContent = `La máquina te gana ${ptsMaquina} a ${ptsJugador}`
  } else {
    estadoMarcador.textContent = `Partida empatada a ${ptsJugador}`
  }
}