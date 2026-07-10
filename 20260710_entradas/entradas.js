// Declaración de variables

let elCantidad = document.getElementById('cantidadEntradas')
const btnGenerar = document.getElementById('btnGenerar')
const mensaje = document.querySelector('.mensaje') // Hacemos querySelector pq es una clase

btnGenerar.addEventListener('click',generarEntradas)

function generarEntradas(){
  let cantidad = Number(elCantidad.value)
  let precioUnitario = 70
  let precioTotal = 0
  mensaje.innerHTML = ''
  if (cantidad <= 0){
    mensaje.innerHTML = 'Esto que intentas hacer es imposible, amigo'
  } else if(cantidad > 10){
    mensaje.innerHTML = 'Puedes generar como máximo 10 entradas'
  } else {
    mensaje.innerHTML = `Generando ${cantidad} entrada/s <br>`
    for (let entrada=1; entrada<=cantidad; entrada++){
        precioTotal = precioTotal + precioUnitario
        let codigo
        do {
          codigo = Math.floor(Math.random() * 1000) // El floor no mostrará los decimales
        } while (codigo < 100)      // Si código es menor de 100 (<3 dígitos), busca otro
        
        mensaje.innerHTML += `Entrada número ${entrada} generada. Código: ${codigo} <br>`

    }

    mensaje.innerHTML += `Total de entradas generadas: ${cantidad} <br> Importe total 
    a pagar: ${precioTotal} € <br>`
  }
}