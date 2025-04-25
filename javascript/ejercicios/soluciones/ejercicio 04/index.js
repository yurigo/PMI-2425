const $ = (selector) => document.querySelector(selector);
// const $$ = (selector) => document.querySelectorAll(selector);

const formulario = $("#formulario");
const respuesta = $("#respuesta > p");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // const textoACambiar = texto.value;
  // const aReemplazar = reemplazada.value;
  // const nuevoTextoAReemplazar = nuevoTexto.value;

  const formData = new FormData(formulario);

  const op = formData.get("operacion");
  const v1 = Number(formData.get("v1"));
  const v2 = Number(formData.get("v2"));

  let resultado;

  if (op === "suma") resultado = suma(v1, v2);
  if (op === "resta") resultado = resta(v1, v2);
  if (op === "multiplicacion") resultado = multiplicacion(v1, v2);
  if (op === "division") resultado = division(v1, v2);

  respuesta.innerText = resultado;
});

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const c = (a, b) => a * b;
const division = (a, b) => a / b;
