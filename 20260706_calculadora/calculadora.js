function saludar() {
    let nombre = document.getElementById('nombre').value

    if (nombre === '') {
      document.getElementById('saludo').style.display = 'block'
      document.getElementById('saludo').innerHTML = '¡Hola tú!'
      document.getElementById('comentario').innerHTML = 'Por favor, escribe tu nombre'
    } else {
      document.getElementById('saludo').style.display = 'block'
      document.getElementById('saludo').innerHTML = '¡Hola ' + nombre + '!'
      document.getElementById('comentario').innerHTML = 'Ya puedes utilizar la calculadora'
    }
    // console.log(nombre)
  }


function escribir(numerico) {
  let pantalla = document.getElementById('pantalla').value
  pantalla = pantalla + numerico
  document.getElementById('pantalla').value = pantalla
}

function borrarPantalla() {
  document.getElementById('pantalla').value = ''
  document.getElementById('comentario').innerHTML = 'Pantalla borrada'
}

function calcular() {
  let operacion = document.getElementById('pantalla').value
  let nombre = document.getElementById('nombre').value

  if (nombre === '') {
    nombre = 'tú'
  }

  if (operacion === '') {
    document.getElementById('comentario').innerHTML = 'Introduce una operación'
    return
  } else {
    let resultado = eval(operacion)
    document.getElementById('pantalla').value = resultado
    document.getElementById('comentario').innerHTML = nombre + ', el resultado es ' + resultado
  }
}

function modoFiesta() {
  // document.body.classList.add('fiesta')
    document.body.classList.toggle('fiesta')

  document.getElementById('comentario').innerHTML = 'Has cambiado de modo la página'
  }

function limpiarTodo() {
  document.getElementById('nombre').value = ''
  document.getElementById('saludo').innerHTML = ''
  document.getElementById('saludo').style.display = 'none'
  document.getElementById('pantalla').value = ''
  document.getElementById('comentario').innerHTML = ''

  // si hubiera un modo fiesta activo con add, lo desactivamos
  // document.body.classList.remove('fiesta')
}