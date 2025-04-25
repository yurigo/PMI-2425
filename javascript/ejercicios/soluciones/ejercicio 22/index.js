// console.log("Hello world!");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const formAtter = $("#formAtter");
const result = $("#result");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formAtter);
  const number = Number(formData.get("num"));
  const culture = formData.get("culture");

  // console.log(number.toLocaleString());

  result.innerText = number.toLocaleString(culture);
}

formAtter.addEventListener("submit", handleSubmit);
