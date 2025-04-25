const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const formAtter = $("#formAtter");
const result = $("#result");
const num = $("#num");
const culture = $("#culture");

function updateResult() {
  // const n = 100_000_000_000_000;
  const formData = new FormData(formAtter);
  const number = Number(formData.get("num"));
  const culture = formData.get("culture");
  result.innerText = number.toLocaleString(culture);
}

num.addEventListener("keyup", () => {
  updateResult();
});

culture.addEventListener("change", () => {
  updateResult();
});
