
const btnTiempo = document.getElementById('btnTiempo')
const mensaje = document.getElementById('mensaje')
const resultado = document.getElementById('resultado')

btnTiempo.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition((posicion)=>{
    console.log(posicion)
    const lat = posicion.coords.latitude
    const lon = posicion.coords.longitude

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m&timezone=Europe%2FBerlin`

    fetch(url)
      .then(respuesta=>{
      return respuesta.json()
    })
    .then(datos =>{
      // console.log(datos)
      document.body.className = datos.current.is_day ? 'dia' : 'noche'

      resultado.innerHTML = `
        <div class="cabecera-tiempo">
          <div>
            <p class="fecha">
              ${new Date(datos.current.time).toLocaleDateString('es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
              })}
            </p>

            <p class="hora">
              ${new Date(datos.current.time).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>

          <div class="icono-dia">
            ${datos.current.is_day ? '☀️' : '🌙'}
          </div>
        </div>

        <section class="temperatura">
          <span class="temperatura-numero">
            ${Math.round(datos.current.temperature_2m)}
          </span>
          <span class="temperatura-grados">ºC</span>
        </section>

        <p class="estado">
          ${datos.current.is_day ? '☀️ Es de día' : '🌙 Es de noche'}
        </p>

        <div class="datos-grid">
          <div class="dato">
            <span class="dato-icono">💧</span>
            <div>
              <span class="dato-titulo">Humedad</span>
              <strong>${datos.current.relative_humidity_2m}%</strong>
            </div>
          </div>

          <div class="dato">
            <span class="dato-icono">🌡️</span>
            <div>
                <span class="dato-titulo">Sensación</span>
                <strong>${Math.round(datos.current.apparent_temperature)} ºC</strong>
            </div>
          </div>

          <div class="dato">
            <span class="dato-icono">💨</span>
            <div>
              <span class="dato-titulo">Viento</span>
              <strong>${datos.current.wind_speed_10m} km/h</strong>
            </div>
          </div>

          <div class="dato">
            <span class="dato-icono">🧭</span>
            <div>
              <span class="dato-titulo">Dirección</span>
              <strong>${datos.current.wind_direction_10m}°</strong>
            </div>
          </div>
        </div>

        <section class="ubicacion">
          <h2>📍 Tu ubicación</h2>

          <div class="coordenadas">
            <span>Latitud</span>
            <strong>${datos.latitude.toFixed(4)}</strong>
            <span>Longitud</span>
            <strong>${datos.longitude.toFixed(4)}</strong>
            <span>Zona horaria</span>
            <strong>${datos.timezone}</strong>
          </div>
        </section>
`


      // resultado.innerHTML = `
      //   <h2>Datos principales</h2>
      //   <p>Fecha: ${new Date(datos.current.time).toLocaleDateString('es-ES', {
      //         weekday: 'long',
      //         day: 'numeric',
      //         month: 'long'
      //       })}</p>
      //   <p>Hora: ${new Date(datos.current.time).toLocaleTimeString('es-ES', {
      //         hour: '2-digit',
      //         minute: '2-digit'
      //       })}</p>
      //   <p>Temperatura: ${Math.round(datos.current.temperature_2m)} ºC</p>
      //   <p>Humedad: ${datos.current.apparent_temperature}</p>
      //   <p>Sensación térmica: ${Math.round(datos.current.apparent_temperature)} ºC</p>
      //   <p>${datos.current.is_day ? '☀️ Es de día' : '🌙 Es de noche'}</p>

      //   <h2>Datos secundarios</h2>
      //   <h3>Viento</h3>
      //   <p>Dirección: ${datos.current.wind_direction_10m}</p>        
      //   <p>Velocidad: ${datos.current.wind_speed_10m}</p>

      //   <h3>Ubicación</h3>
      //   <p>Latitud: ${datos.latitude}</p>
      //   <p>Longitud: ${datos.longitude}</p>
      //   <p>Zona: ${datos.timezone}</p>

      // `
    })
  })
})

