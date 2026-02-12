document.addEventListener("DOMContentLoaded", function() {

  const fondos = [
    "#FADADD",
    "#F8C8DC",
    "#F6C1D1",
    "#F9D5E5",
    "#FFD6E0",
    "#FBC4D8"
  ];

  const frases = [
    "recuerda que eres increíblemente inteligente.",
    "no olvides lo capaz que eres.",
    "tienes una luz que no se apaga.",
    "eres más fuerte de lo que imaginas.",
    "todo lo que haces tiene valor.",
    "tu mente es brillante y hermosa.",
    "mereces todo lo bueno que te pase.",
    "confía en ti, porque yo lo hago.",
    "haces que mis días tengan un tono más suave.",
    "mi lugar favorito sigue siendo contigo.",
    "eres mi casualidad favorita.",
    "hidrátate, recuerda tomar agua.",
    "estás hermosa.",
    "me encanta pasar tiempo contigo.",
    "cocinas delicioso."
  ];

  document.body.style.background =
    fondos[Math.floor(Math.random() * fondos.length)];

  const frase =
    frases[Math.floor(Math.random() * frases.length)];

  const mensajeCompleto = "Frida, " + frase;

  const elemento = document.getElementById("mensaje");

  let i = 0;
  function escribirTexto() {
    if (i < mensajeCompleto.length) {
      elemento.innerHTML += mensajeCompleto.charAt(i);
      i++;
      setTimeout(escribirTexto, 40);
    }
  }

  escribirTexto();

});
