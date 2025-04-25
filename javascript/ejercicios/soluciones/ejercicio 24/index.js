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

  const textoACambiar = formData.get("inputTexto");
  const aReemplazar = formData.get("inputReemplazada");
  const nuevoTextoAReemplazar = formData.get("inputNuevoTexto");

  //prettier-ignore
  const nuevo = textoACambiar
     .replaceAll(aReemplazar, nuevoTextoAReemplazar);

  respuesta.innerText = nuevo;
});
