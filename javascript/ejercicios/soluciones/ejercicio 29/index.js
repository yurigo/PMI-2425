// console.log("Hello world!");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const btn = $("#clicker");
// const c1 = $(".counter.left");
// const c2 = $(".counter.right");
const counters = $$(".counters > .counter");

// console.log("counters", counters);

// function esteEsElNombreDeLaFuncionQueVoyAEjecutarPorCadaElemento(elemento) {
//   console.log("tralarero tralarà", elemento);
// }

const esteEsElNombreDeLaFuncionQueVoyAEjecutarPorCadaElemento = (elem) => {
  // console.log("bombardiro cocodrilo", elem);
};

function handleClick(event) {
  // let countValue = parseInt(btn.innerText);
  // let countValue = parseFloat(btn.innerText);
  let countValue = Number(btn.innerText);

  countValue += 1;

  btn.innerText = countValue;
  //   c1.innerText = countValue;
  //   c2.innerText = countValue;

  //   for (let index = 0; index < counters.length; index++) {
  //     const element = counters[index];
  //     console.log(element);
  //   }

  // counters.forEach(esteEsElNombreDeLaFuncionQueVoyAEjecutarPorCadaElemento);
  counters.forEach((elem) => {
    // console.log("tung tung tung tugn tugn sahur", elem);
    elem.innerText = countValue;
  });

  if (countValue >= 10) {
    btn.setAttribute("disabled", true);
  }
}

btn.addEventListener("click", handleClick);
