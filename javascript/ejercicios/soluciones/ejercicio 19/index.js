const form = document.querySelector("#form");
const result = document.querySelector("#result");

const dictionary = {
  a: "·-",
  b: "-···",
  c: "-·-·",
  d: "-··",
  e: "·",
  f: "··-·",
  g: "--·",
  h: "····",
  i: "··",
  j: "·---",
  k: "-·-",
  l: "·-··",
  m: "--",
  n: "-·",
  o: "---",
  p: "·--·",
  q: "--·-",
  r: "·-·",
  s: "···",
  t: "-",
  u: "··-",
  v: "···-",
  w: "·--",
  x: "-··-",
  y: "-·--",
  z: "--··",
  0: "-----",
  1: "·----",
  2: "··---",
  3: "···--",
  4: "····-",
  5: "·····",
  6: "-····",
  7: "--···",
  8: "---··",
  9: "----·",
  ".": "·-·-·-",
  ",": "--··--",
  "?": "··--··",
  "'": "·----·",
  "!": "-·-·--",
  "/": "-··-·",
  "(": "-·--·",
  ")": "-·--·-",
  "&": "·-···",
  ":": "---···",
  ";": "-·-·-·",
  "=": "-···-",
  "+": "·-·-·",
  "-": "-····-",
  _: "··--·-",
  '"': "·-··-·",
  $: "···-··-",
  "@": "·--·-·",
  " ": " ",
};

const translate = (text) => {
  // pasar a minusculas
  const lowerText = text.toLowerCase();

  // me paseo por cada letra y la traduzco
  // let result = "";
  // for (let i = 0; i < lowerText.length; i++) {
  //   const letter = lowerText[i];
  //   const translation = dictionary[letter];
  //   result += translation + " ";
  // }

  // const arrayOfTransaltions = lowerText.split("").map((letter) => {
  //   return dictionary[letter];
  // });

  // return arrayOfTransaltions.join(" ");

  return lowerText
    .split("")
    .map((letter) => dictionary[letter])
    .join(" ");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const translatedText = translate(data.text);
  result.innerHTML = translatedText
    .split(" ")
    .map((char) => {
      return `<span>${char}</span>`;
    })
    .join(" ");
});
