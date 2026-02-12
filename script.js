// 🎨 Fondos rosa pastel que cambian
const fondos = [
  "#FADADD",
  "#F8C8DC",
  "#F6C1D1",
  "#F9D5E5",
  "#FFD6E0",
  "#FBC4D8"
];

// 💌 Tus frases (puedes agregar muchas más)
const frases = [
  "recuerda que eres increíblemente inteligente.",
  "no olvides lo capaz que eres.",
  "tienes una luz que no se apaga.",
  "eres más fuerte de lo que imaginas.",
  "todo lo que haces tiene valor.",
  "tu mente es brillante y hermosa.",
  "mereces todo lo bueno que te pase.",
  "confía en ti, porque yo lo hago.",
  "recuerda que tu disciplina vale más que cualquier excusa.",
"lo que hoy parece difícil mañana será parte de tu fuerza.",
"cada pequeño avance cuenta, aunque nadie lo vea.",
"tienes una mente que resuelve más de lo que imaginas.",
"no subestimes el impacto de tu constancia.",
"incluso en tus dudas sigues siendo brillante.",
"los retos no llegan para detenerte, llegan para elevarte.",
"estás construyendo algo grande, paso a paso.",
"tu potencial no tiene techo, solo etapas.",
"confía en tu proceso, está funcionando.",
"haces que mis días tengan un tono más suave.",
"mi lugar favorito sigue siendo contigo.",
"tu voz es mi sonido favorito.",
"si el mundo pesa, quiero ser tu descanso.",
"tu existencia hace que todo tenga más sentido.",
"me encanta la persona que eres cuando nadie te está mirando.",
"contigo hasta los silencios se sienten bonitos.",
"eres mi casualidad favorita.",
"cada versión tuya me enamora.",
"si tuviera que elegir otra vez, te elegiría igual.",
"eres el catalizador que acelera mi felicidad.",
"tenemos más química que una tabla periódica completa.",
"si fueras elemento, serías esencial en mi fórmula.",
"mi estado de ánimo cambia cuando reaccionas conmigo.",
"somos un enlace covalente fuerte y estable.",
"tu sonrisa eleva mi energía como reacción exotérmica.",
"contigo todo alcanza equilibrio dinámico.",
"no eres reactiva, eres selectivamente increíble.",
"nuestra conexión no necesita energía de activación.",
"contigo no hay descomposición, solo síntesis de momentos.",
"hidrátate, recuerda tomar aguaaaaaa.",
"respira profundo, tu cuerpo también merece calma.",
"duerme bien, preciosa!.",
"come algo nutritivo, necesitas energía!!",
"estírate un poco y descansa los hombros, cuídate!!",
"date un descanso, pero no dejes todo a lo último",
"sal a tomar un poco de sol hoy.",
"no olvides moverte, aunque sea unos minutos.",
"desconectarte un rato también cuenta como avanzar.",
"siempre estoy pensando en ti.",
"escuchando tu música favorita es mi manera de sentirme más cerca de ti.",
"amé conocerte.",
"todo me recuerda a ti.",
"estás hermosa.",
"me encanta pasar tiempo contigo.",
"cocinas delicioso!",

];

// Elegir fondo aleatorio
document.body.style.background = fondos[Math.floor(Math.random() * fondos.length)];

// Elegir frase aleatoria
const frase = frases[Math.floor(Math.random() * frases.length)];

// Siempre inicia con su nombre
const mensajeCompleto = "Frida, " + frase;

// ✨ Efecto máquina de escribir
let i = 0;
function escribirTexto() {
  if (i < mensajeCompleto.length) {
    document.getElementById("mensaje").innerHTML += mensajeCompleto.charAt(i);
    i++;
    setTimeout(escribirTexto, 50);
  }
}

escribirTexto();
