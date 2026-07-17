let planes = [
  {
    nombre: 'Concierto al aire libre',
    lugar: 'Playa de Bogatell',
    precio: 10,
    categoria: 'Música',
    icono: '🪩',
    imagen: 'img/concert.jpg',
    reservado: false
  },
  {
   nombre: 'Visita a una expo',
    lugar: 'MACBA',
    precio: 0,
    categoria: 'Arte',
    icono: '🫠',
    imagen: 'img/museum.jpg',
    reservado: true 
  },
  {
    nombre: 'Rafting',
    lugar: 'Riu Vinalopó',
    precio: 22,
    categoria: 'Deporte',
    icono: '🛶',
    imagen: 'img/rafting.jpg',
    reservado: false
  },
  {
    nombre: 'Drag Show',
    lugar: 'Strass',
    precio: 10,
    categoria: 'Drag',
    icono: '👑',
    imagen: 'img/drag.jpg',
    reservado: false
  }
]

// console.log(planes.length)
// console.log(planes[0])
// console.log(planes[2].nombre)

const listaPlanes = document.getElementById('listaPlanes')

  function mostrarPlanes(){
    listaPlanes.innerHTML = ''
    for (let i=0; i < planes.length; i++){
    // for (let plan of planes){
      // console.log(plan.nombre)
      let plan = planes[i] // necesito esta variable desde que cambio la definición del bucle
      let mensajeEstado
      let claseEstado

      if(plan.reservado === true){
        mensajeEstado = 'Ya está reservado'
        claseEstado = 'reservado'
      } else {
        mensajeEstado = 'Plan disponible'
        claseEstado = 'disponible'
      }

      // Poner gratis si precio es cero
      let textoPrecio
      if (plan.precio === 0){
          textoPrecio = 'Gratis'
      } else {
        textoPrecio = `${plan.precio} €`
      }
 
      listaPlanes.innerHTML += `
      <article class='tarjeta'>
      <div class='contenedorImagen'>
        <img src=${plan.imagen} alt='${plan.nombre}'>
        <span class='icono'>${plan.icono}</span>
      </div>
      <div class='contenidoTarjeta'>
       <p class='categoria'>${plan.categoria}</p>
        <h2>${plan.icono} ${plan.nombre}</h2>
        <p>Lugar: ${plan.lugar}</p>
        <p>Precio: ${textoPrecio}</p>
        <p class='estado ${claseEstado}'>${mensajeEstado}</p>
        <button class='btnReservar' data-indice='${i}'>Cambiar reserva</button>
      </div>
    </article>
      `
  }

  // contiene todos los botones reservar pq lo declaramos All
  let botonesReservar = document.querySelectorAll('.btnReservar')

  //nos llevará a cada botón (busca el índice de cada botón)
  for(let boton of botonesReservar){
    boton.addEventListener('click', cambiarReserva)
}
}

function cambiarReserva(ev){
      let indice = ev.target.dataset.indice
      // console.log(indice)
      planes[indice].reservado = !planes[indice].reservado

      mostrarPlanes()
}

planes.push({
  nombre: 'Beer Pong',
  lugar: 'Playa',
  precio: 'lo que te valga la cerveza',
  categoria: 'Deporte',
  icono: '🍺',
  imagen: 'img/beerpong.jpg',
  reservado: false
}
)

mostrarPlanes()

