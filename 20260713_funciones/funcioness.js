function fecha(){
  console.log(new Date())
}

fecha()

function saludar(nombre){
  console.log(`Hola ${nombre}`)
}

saludar('Mireia')

function sumaBasica(){
  let a = 2
  let b = 3
  console.log(a+b)
  document.write('Esta función escribe ' + (a+b) + '<br>')
}

sumaBasica()

function suma(a,b){
  console.log('Esta suma da ' + (a+b))
}

suma (4,8)

function sumaTop(c,d){
  return c+d
}

let salida = sumaTop(20,7)
document.write(salida + '<br>')

function calcularEdad(anioNacimiento){
  const anioActual = new Date().getFullYear()
  if (anioNacimiento > anioActual){
    return "Año no válido"
  }
  return anioActual - anioNacimiento
}

let edad = calcularEdad(1981)
document.write(edad + '<br>')

let fechaHoy = Date.now()
console.log(fechaHoy)
