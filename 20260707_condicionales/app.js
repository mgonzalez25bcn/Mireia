// Disco
function verificarEdadDisco() {
  let edadDisco = Number(document.getElementById('edadDisco').value)

  if (!edadDisco) {
    document.getElementById('comentario-edad').innerHTML = 'Introduce tu edad'
  } else if (edadDisco <= 0) {
      document.getElementById('comentario-edad').innerHTML = 'Edad no válida'
  } else if (edadDisco <= 15) {
    document.getElementById('comentario-edad').innerHTML = 'No puedes entrar todavía'
  } else  if(edadDisco == 16 || edadDisco == 17){
    document.getElementById('comentario-edad').innerHTML = 'Solo puedes entrar acompañado'
  } else {
    document.getElementById('comentario-edad').innerHTML = 'Adelante'
}
}

Number(document.getElementById('edadDisco').value)

// Concierto
function verificarEdadConcierto() {
  let entradaConcierto = document.querySelector('input[name="entradaConcierto"]:checked').value
  // si no fuera tipo radio:
  // let entradaConcierto = document.querySelector('input[name="entradaConcierto"]:checked')
  let edadConcierto = Number(document.getElementById('edadConcierto').value)
  let mensajeConcierto = document.getElementById('comentario-concierto')
  console.log(entradaConcierto)
  console.log(edadConcierto)

//   if (entradaConcierto === 'si' && edadConcierto >= 18) {
//       mensajeConcierto.innerHTML = 'Entras'
//   } else if (entradaConcierto === 'si' && edadConcierto < 18) {
//     mensajeConcierto.innerHTML = 'Puedes entrar acompañado'
//   } else {
//     mensajeConcierto.innerHTML = 'No entras'
// }

  if (entradaConcierto === 'no') {
    mensajeConcierto.innerHTML = 'No entras'
  }else if (!edadConcierto) {
      mensajeConcierto.innerHTML = 'Introduce tu edad'
  } else if (edadConcierto < 18) {
    mensajeConcierto.innerHTML = 'Puedes entrar acompañado'
  } else {
    mensajeConcierto.innerHTML = 'Entras'
  }
}

Number(document.getElementById('edadConcierto').value)

// Idioma
// function Saludar() {
//   let idioma = document.getElementById('idioma').value
//   console.log(idioma)
//   if (idioma === 'es') {
//     document.getElementById('saludo').innerHTML = 'Hola, ¿cómo estás?'
//   } else if (idioma === 'en') {
//     document.getElementById('saludo').innerHTML = 'Hello, how are you?'
//   } else if (idioma === 'fr') {
//     document.getElementById('saludo').innerHTML = 'Bonjour, comment ça va?'
//   } else if (idioma === 'it') {
//     document.getElementById('saludo').innerHTML = 'Ciao, come stai?'
//   }
// }

  function Saludar(idioma) {
    let mensajeSaludo = document.getElementById('saludo')
    switch (idioma) {
      case 'es':
        saludo.innerHTML = 'Hola, ¿cómo estás?'
        break
      case 'en':
        saludo.innerHTML = 'Hello, how are you?'
        break
      case 'fr':
        saludo.innerHTML = 'Bonjour, comment ça va?'
        break
      case 'it':
        saludo.innerHTML = 'Ciao, come stai?'
        break
    }

  }

  // Precio entradas
  function calcularPrecio() {
    let edadEntradas = Number(document.getElementById('edadEntradas').value)
    let numEntradas = Number(document.getElementById('numEntradas').value)
    let mensajePrecio = document.getElementById('precio')

    let precioEntrada

    if (edadEntradas < 5) {
      precioEntrada = 0;
    } else if (edadEntradas >= 6 && edadEntradas <= 17) {
      precioEntrada = 4;
    } else if (edadEntradas >= 18 && edadEntradas <= 64) {
      precioEntrada = 7;
    } else {
      precioEntrada = 5;
    }

    let precioTotal = precioEntrada * numEntradas
    precio.innerHTML = "Tus " + numEntradas + " entradas cuestan: " + precioTotal + "€"
  } 
