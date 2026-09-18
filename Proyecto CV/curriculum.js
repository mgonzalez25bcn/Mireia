// 1. Datos personales
const perfil = {
  nombre: "Mireia González Brull",
  especialidad: "Desarrollo Web | Plataformas Digitales | Soporte IT",
  ubicacion: "Barcelona",
  telefono: "+34 661 207 882",
  email: "mireiagbrull@gmail.com",
  linkedin: "https://linkedin.com/in/mireia-g-519192385",
  experiencia: "20+",
  presentacion: "Más de 20 años de experiencia en desarrollo y mantenimiento de aplicaciones, soporte IT, administración de plataformas digitales y gestión de contenidos web.",
  descripcion: "He trabajado en entornos corporativos, financieros y educativos, participando en resolución de incidencias, soporte funcional, validación de procesos y mantenimiento de aplicaciones. Actualmente estoy especializada en desarrollo y publicación web."
}

// 2. Arrays
const estadisticas = [
  { numero: "20+", texto: "años de experiencia" },
  { numero: "Web", texto: "especialización actual" },
  { numero: "IT", texto: "soporte y desarrollo" },
  { numero: "CMS", texto: "plataformas digitales" }
]

const competencias = [
  "Resolución de problemas", "Soporte funcional y técnico", "Capacidad analítica",
  "Trabajo en equipo", "Organización y planificación", "Adaptabilidad",
  "Comunicación", "Atención al detalle", "Aprendizaje continuo"
]

const experiencia = [
  {
    puesto: "Administradora de Plataformas Digitales",
    empresa: "Programas de Innovación Educativa / Grupo Santillana / PRISA",
    periodo: "Mar 2019 – Dic 2022", lugar: "Ciudad de México",
    categoria: "web", etiqueta: "Web · Plataformas",
    funciones: [
      "Administración de plataformas CMS y LMS.",
      "Gestión y publicación de contenidos digitales.",
      "Soporte funcional y técnico a usuarios.",
      "Resolución y seguimiento de incidencias.",
      "Mantenimiento y validación de procesos."
    ]
  },
  {
    puesto: "Analista Programadora", empresa: "Tecnocom / CaixaBank",
    periodo: "Jul 2008 – Jun 2015", lugar: "Barcelona",
    categoria: "it", etiqueta: "IT · Desarrollo",
    funciones: [
      "Desarrollo y mantenimiento de aplicaciones.",
      "Soporte funcional y técnico.",
      "Análisis y resolución de incidencias.",
      "Validación de procesos y mantenimiento de aplicaciones."
    ]
  },
  {
    puesto: "Analista Programadora", empresa: "Sogeti / Cofidis",
    periodo: "Mar 2006 – Jun 2008", lugar: "Barcelona",
    categoria: "it", etiqueta: "IT · Desarrollo",
    funciones: [
      "Desarrollo y mantenimiento de aplicaciones.",
      "Análisis de necesidades y resolución de incidencias.",
      "Soporte técnico y funcional.",
      "Trabajo en entornos corporativos."
    ]
  },
  {
    puesto: "Programadora Senior", empresa: "Emagine / Deutsche Bank",
    periodo: "Nov 2005 – Mar 2006", lugar: "Barcelona",
    categoria: "it", etiqueta: "IT · Desarrollo",
    funciones: [
      "Programación y mantenimiento de aplicaciones.",
      "Trabajo en entorno financiero.",
      "Resolución de incidencias y soporte técnico."
    ]
  },
  {
    puesto: "Programadora Senior", empresa: "Elan IT / Deutsche Bank",
    periodo: "May 2005 – Nov 2005", lugar: "Barcelona",
    categoria: "it", etiqueta: "IT · Desarrollo",
    funciones: [
      "Desarrollo y mantenimiento de aplicaciones.",
      "Programación en entorno financiero.",
      "Soporte y resolución de incidencias."
    ]
  },
  {
    puesto: "Programadora Junior / Senior", empresa: "CORITEL / Accenture",
    periodo: "Nov 2000 – Sep 2004", lugar: "España",
    categoria: "it", etiqueta: "IT · Desarrollo",
    funciones: [
      "Participación en proyectos para Caixa Catalunya.",
      "Participación en proyectos para Banc Sabadell.",
      "Participación en proyectos para Deutsche Bank.",
      "Participación en proyectos para Fibanc, STA Andorra, GNP Seguros y Accenture.",
      "Programación con COBOL, CICS, DB2, AS/400 y Adélia."
    ]
  }
]

const formacion = [
  {
    titulo: "IFCD0110", centro: "Generalitat de Catalunya",
    periodo: "2026 – Actualidad",
    descripcion: "Especialización actual en desarrollo web, HTML5, CSS3, JavaScript, diseño responsive, accesibilidad, usabilidad y publicación de contenidos web.",
    destacada: true
  },
  {
    titulo: "Técnico Especialista en Informática de Gestión FP II",
    centro: "Formación Profesional", periodo: "1997 – 2000",
    descripcion: "Formación en Informática de Gestión.", destacada: false
  },
  {
    titulo: "Técnico Auxiliar Administrativo FP I",
    centro: "Formación Profesional", periodo: "1995 – 1997",
    descripcion: "Formación administrativa.", destacada: false
  }
]

const habilidades = [
  { nombre: "HTML5", nivel: 90 },
  { nombre: "CSS3", nivel: 85 },
  { nombre: "JavaScript", nivel: 85 },
  { nombre: "Responsive Web", nivel: 85 },
  { nombre: "Accesibilidad y usabilidad", nivel: 80 },
  { nombre: "CMS / LMS", nivel: 90 },
  { nombre: "COBOL", nivel: 95 },
  { nombre: "CICS / DB2", nivel: 95 }
]

const conocimientos = [
  "PL/I", "AS/400", "XML", "Adélia", "Microsoft Office",
  "Google Workspace", "Publicación web", "Gestión de contenidos"
]

const idiomas = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Catalán", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Medio" }
]

// 3. Selector de elementos
const $ = selector => document.querySelector(selector)

// 4. Cabecera
function renderPrincipal() {
  $("#principalEyebrow").textContent = `${perfil.ubicacion} · ${perfil.especialidad}`
  $("#principalName").textContent = perfil.nombre
  $("#principalRole").textContent = perfil.especialidad
  $("#principalIntro").textContent = perfil.presentacion
  $("#experienceYears").textContent = perfil.experiencia
  $("#experienceText").textContent = "años de experiencia tecnológica"
}

// 5. Estadísticas
function renderStats() {
  const container = $("#miniStats")
  container.innerHTML = estadisticas.map(stat => `
    <div class="stat"><strong>${stat.numero}</strong><span>${stat.texto}</span></div>
  `).join("")
}

// 6. Perfil y competencias
function renderProfile() {
  $("#profileText").innerHTML = `
    <p>${perfil.descripcion}</p>
    <p>Mi trayectoria combina experiencia tecnológica consolidada con una especialización actual orientada al desarrollo y publicación web.</p>
  `
  $("#competencies").innerHTML = competencias.map(item =>
    `<div class="competency">${item}</div>`
  ).join("")
}

// 7. Filtros
const filtros = [
  { id: "todos", texto: "Todo" },
  { id: "web", texto: "Web · Plataformas" },
  { id: "it", texto: "IT · Desarrollo" }
]
let filtroActual = "todos"

function renderFilters() {
  $("#experienceFilters").innerHTML = filtros.map(filtro => `
    <button class="filter-btn ${filtro.id === filtroActual ? "active" : ""}" data-filter="${filtro.id}">
      ${filtro.texto}
    </button>
  `).join("")

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      filtroActual = button.dataset.filter
      renderFilters()
      renderExperience()
    })
  })
}

// 8. Experiencia
function renderExperience() {
  const container = $("#experienceList")
  const lista = filtroActual === "todos"
    ? experiencia
    : experiencia.filter(item => item.categoria === filtroActual)

  container.innerHTML = lista.map((trabajo, index) => `
    <article class="experience-item">
      <div class="period">${trabajo.periodo}</div>
      <div class="experience-main">
        <h3>${trabajo.puesto}</h3>
        <p class="company">${trabajo.empresa} · ${trabajo.lugar}</p>
        <span class="category">${trabajo.etiqueta}</span>
      </div>
      <button class="details-btn" data-index="${index}">Mostrar funciones +</button>
      <div class="functions" id="functions-${index}">
        <ul>${trabajo.funciones.map(funcion => `<li>${funcion}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("")

  document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
      const panel = $(`#functions-${button.dataset.index}`)
      panel.classList.toggle("open")
      button.textContent = panel.classList.contains("open")
        ? "Ocultar funciones −"
        : "Mostrar funciones +"
    })
  })
}

// 9. Formación
function renderEducation() {
  $("#educationList").innerHTML = formacion.map(estudio => `
    <article class="education-card ${estudio.destacada ? "featured" : ""}">
      <span class="education-year">${estudio.periodo}</span>
      <h3>${estudio.titulo}</h3>
      <p><strong>${estudio.centro}</strong></p>
      <p>${estudio.descripcion}</p>
    </article>
  `).join("")
}

// 10. Habilidades
function renderSkills() {
  $("#technicalSkills").innerHTML = habilidades.map(skill => `
    <div class="skill">
      <div class="skill-head"><span>${skill.nombre}</span><span>${skill.nivel}%</span></div>
      <div class="progress"><div class="progress-bar" data-level="${skill.nivel}"></div></div>
    </div>
  `).join("")

  setTimeout(() => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
      bar.style.width = `${bar.dataset.level}%`
    })
  }, 100)
}

// 11. Conocimientos e idiomas
function renderKnowledge() {
  $("#knowledgeTags").innerHTML = conocimientos.map(item =>
    `<span class="tag">${item}</span>`
  ).join("")
}

function renderLanguages() {
  $("#languagesList").innerHTML = idiomas.map(item => `
    <div class="language">
      <strong>${item.idioma}</strong>
      <span>${item.nivel}</span>
    </div>
  `).join("")
}

// 12. Contacto y botón de copiar
function renderContact() {
  $("#contactIntro").textContent =
    "Si quieres conocer más sobre mi perfil profesional o contactar conmigo para una oportunidad, puedes encontrarme aquí:"

  $("#contactList").innerHTML = `
    <div class="contact-item">
      <div class="contact-item-info">
        <strong>Email</strong>
        <span>${perfil.email}</span>
      </div>
      <button class="copy-btn" id="copyEmail">Copiar</button>
    </div>
    <a class="contact-item">
      <div class="contact-item-info">
        <strong>Teléfono</strong>
        <span>${perfil.telefono}</span>
      </div>
    </a>
    <a class="contact-item" href="${perfil.linkedin}" target="_blank" rel="noopener noreferrer">
      <div class="contact-item-info">
        <strong>LinkedIn</strong>
        <span>Perfil profesional</span>
      </div>
      <span>→</span>
    </a>
  `

  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      $("#copyEmail").textContent = "¡Copiado!"
    } catch {
      $("#copyEmail").textContent = "No disponible"
    }
    setTimeout(() => $("#copyEmail").textContent = "Copiar", 1800)
  })
}

// 13. Menú móvil
function initMenu() {
  const toggle = $("#menuToggle")
  const links = $("#navLinks")

  toggle.addEventListener("click", () => links.classList.toggle("open"))

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => links.classList.remove("open"))
  })
}

// 14. Modo claro/oscuro (con localStorage)
function initTheme() {
  const button = $("#themeToggle")
  const savedTheme = localStorage.getItem("cv-theme")

  if (savedTheme === "dark") {
    document.body.classList.add("dark")
    button.textContent = "☀"
  }

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    const darkMode = document.body.classList.contains("dark")
    localStorage.setItem("cv-theme", darkMode ? "dark" : "light")
    button.textContent = darkMode ? "☀" : "☾"
  })
}

// 15. Footer
function renderFooter() {
  $("#footerText").textContent =
    `© ${new Date().getFullYear()} ${perfil.nombre} · Currículum web`
}

// 16. Inicialización
function init() {
  renderPrincipal()
  renderStats()
  renderProfile()
  renderFilters()
  renderExperience()
  renderEducation()
  renderSkills()
  renderKnowledge()
  renderLanguages()
  renderContact()
  renderFooter()
  initMenu()
  initTheme()
}

document.addEventListener("DOMContentLoaded", init)
