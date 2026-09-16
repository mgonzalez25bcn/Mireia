const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravedad = 0.6
const dino = {
  x: 50,
  y: 200,
  ancho: 40,
  alto: 80, 
  velocidadY: 0
}

const cactus = {
  x: 750,
  y: 240,
  ancho: 25,
  alto: 40
}

let puntos = 0
let finJuego = false

// Aquí guardaremos todos los cactus que existen en este momento
let ejercitoCactus = []

document.addEventListener('keydown', (ev)=>{
   // El dinosaurio solo puede saltar si está en el suelo
  if(ev.code === 'Space' && dino.y === 200){
    // console.log('salta')
    dino.velocidadY = -12
  }
})

function dibujarDino(){
  ctx.fillStyle = '#826ef0'
  ctx.fillRect(
      dino.x,
      dino.y,
      dino.ancho,
      dino.alto
  )
}

function dibujarSuelo(){
  ctx.fillStyle = '#10a321'
  ctx.fillRect(0,280,canvas.width,20)
}

// Dibujamos todos los cactus que hay dentro del array
function dibujarCactus(){
  ejercitoCactus.forEach((cactus) => {
  ctx.fillStyle = '#6aa30f'
  ctx.fillRect(
      cactus.x,
      cactus.y,
      cactus.ancho,
      cactus.alto
  )
  })
}

// Cada vez que llamamos a esta función creamos un cactus nuevo
function crearCactus(){
  // Altura aleatoria entre 30 y 70 aproximadamente
  const alto = Math.random() * 40 + 30

  // El cactus puede aparecer justo después del canvas
  // o bastante más lejos.
  // Así la distancia entre cactus no será siempre igual
  const distancia = Math.random() * 400

  ejercitoCactus.push({
    // El cacuts aparece por la derecha, pero no siempre exactamente en 
    // El mismo punto
    x: canvas.width + distancia,
    
    // Lo colocamos apoyado en el suelo
    y: 280 - alto,

    ancho: 25,

    alto: alto,

    // Cada cactus tendrá una velocidad distinta
    // entre 4 y 6 píxeles por frame aprox
    velocidad: Math.random() * 2 + 4,

    // Nos permite saber si este cactus ya ha generado el siguiente
    otro: false,

    // Cadad cactus tendrá un momento diferente
    //  para crear rel siguiente cactus.

    // Algunos lo harán pronto y habrá dos cactus juntos.
    // Otros lo harán trarde y estarán más separados. 
    momentoNuevoCactus:
      Math.random() * 300 + 200  
  })
}

function actualizar(){

  // Si hemos perdido, mostramos el mensaje y dejamos de ejecutar la animación
  if(finJuego === true){
    ctx.fillStyle = 'black'
    ctx.font = '40px Arial'
    ctx.fillText('Fin del juego', 280,140)
    return
  }

  // Borramos el fotograma anterior
  ctx.clearRect(0,0,canvas.width,canvas.height)

  // cactus.x = cactus.x-5
  // // Este es el desplazamiento. Solo se mueve 5px a la izquierda en cada frame,
  // // pero para que existan más frames, necesitamos la función 
  // // requestAnimationFrame()

  // if(cactus.x < -cactus.ancho){
  //   cactus.x = canvas.width
  // }

      // Recorremos todos los cactus
    ejercitoCactus.forEach((cactus) => {

        // Movemos cada cactus hacia la izquierda pero con la actualización de velocidad
       cactus.x = cactus.x - cactus.velocidad


        // Cada cactus tiene su propio momento
        // para generar el siguiente
        if (
            cactus.x <= cactus.momentoNuevoCactus &&
            cactus.otro === false
        ) {

            crearCactus()

            // Marcamos que este cactus ya ha creado otro
            // para que no cree uno en cada frame
            cactus.otro = true
        }


        // Cuando el cactus sale completamente por la izquierda
        // sumamos un punto
        if (cactus.x < -cactus.ancho) {

            puntos++
        }

    })


    // Eliminamos del array los cactus que ya
    // han desaparecido completamente del canvas
    ejercitoCactus = ejercitoCactus.filter((cactus) => {

        return cactus.x > -cactus.ancho

    })


  // Con la condición, hacemos que si se sale del canva regrese por la derecha
  // (canvas.width)

  dino.y = dino.y + dino.velocidadY // Dibujamos al dino con la actualización
    // de y de la barra espaciadora

  dino.velocidadY = dino.velocidadY + gravedad // Con la gravedad, conseguimos
    // que deje de subir y baje, pero no tiene límite

  // Ponemos el límite diciendo que si está más abajo que el suelo, se quede
  // en el suelo
  if(dino.y >= 200){
    dino.y = 200
    dino.velocidadY = 0
  }

  // Como ahora tenemos varios cactus,
    // tenemos que comprobar la colisión con TODOS
    ejercitoCactus.forEach((cactus) => {
    const colision = 
      dino.x < cactus.x + cactus.ancho &&
      dino.x + dino.ancho > cactus.x &&
      dino.y < cactus.y + cactus.alto &&
      dino.y + dino.alto > cactus.y

    if(colision){
      finJuego = true
    }
    })

    // Mostramos los puntos
    ctx.fillStyle = 'black'
    ctx.font = '20px Arial'

    ctx.fillText(
        `Puntos: ${puntos}`,
        650,
        30
    )

  dibujarDino()
  dibujarSuelo()
  dibujarCactus()
  requestAnimationFrame(actualizar)
  // Aquí creamos la animación, haciendo que la fnción "se llame a si misma" en
  // cada frame
}

// Creamos el primer cactus
crearCactus()

// Arrancamos el juego
actualizar()
