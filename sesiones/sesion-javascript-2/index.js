console.log("Hello world ahora sí!!");
console.log("No estamos suspendidos si lo hacemos así!!");

const title = document.getElementById("title");
console.log(title);

// // Pass in the id of an element
// let confetti = new Confetti("title");

// // Edit given parameters
// confetti.setCount(75);
// confetti.setSize(1);
// confetti.setPower(25);
// confetti.setFade(false);
// confetti.destroyTarget(false);

const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 30,
    scalar: 1.2,
    shapes: ["circle", "square"],
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  });

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: ["🦄", "🌈"],
      },
    },
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
setTimeout(shoot, 2000);

document.getElementById("title").addEventListener("click", () => {
  shoot();
});

// VARIABLE DECLARATION

var a = 10;
let b = true;
const c = "hola";

// c = "33";  // Uncaught TypeError: Assignment to constant variable.

// FUNCTION DECLARATION

// function declaration
function suma(a, b) {
  return a + b;
}

const result1 = suma(4, 3);
console.log(result1);

console.log(suma(4, 3));

// function expression
const resta = function (a, b) {
  return a - b;
};

const result2 = resta(4, 3);
console.log(result2);

// arrow function
const multiplicacion = (a, b) => {
  return a * b;
};

const result3 = multiplicacion(3, 7);
console.log(result3); // 21

const division = (a, b) => a / b;

const square = (a) => a * a;

const cube = (a) => a ** 3;

// CALLBACK FUNCTION

function sumaAsync(a, b, callback) {
  //cuerpo de funcion
  const result = a + b;
  callback(result);
}

function test(text) {
  console.log("***", text, "***");
}

function test2(text) {
  console.log("🦄", text, "🦄");
}

console.log(sumaAsync(5, 5, test)); // *** 10 ***
console.log(sumaAsync(5, 5, test2)); // 🦄 10 🦄

// PROMISES

const promise = new Promise(((resolve) => resolve(""), (reject) => reject("")));

promise.then(/*callbackTodoHaIdoBien*/ () => "ok");
promise.catch(/*callbackTodoHaIdoMal*/ () => "nok");

// FETCH API PASO A PASO CON

const fetchResult = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

console.log("promise pending -> ", fetchResult);

function haIdoBienAlLeerElBodyDeLaResponse(data) {
  console.log("🎉 data 🎉");
  console.log(JSON.parse(data));

  // en este punto tengo la información de la api.
  const result = document.getElementById("result");
  result.innerHTML = "<h2>" + JSON.parse(data).species.name + "</h2>";
}
function haIdoMalAlLeerElBodyDeLaResponse(error) {
  console.error("error :(", error);
}

function todoHaIdoBien(response) {
  console.log("todo ha ido bien:");
  console.log("response.ok", response.ok);
  console.log(response);
  const dataPromise = response.text();
  console.log("data", dataPromise);
  dataPromise.then(haIdoBienAlLeerElBodyDeLaResponse);
  dataPromise.catch(haIdoMalAlLeerElBodyDeLaResponse);
}

function todoHaIdoMal(error) {
  console.error("todo ha ido mal:");
  console.error("error:", error);
}

fetchResult.then(todoHaIdoBien);
fetchResult.catch(todoHaIdoMal);

// FETCH API REFACTOR 1

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const result = document.getElementById("result");
    result.innerHTML = "<h2>" + data.species.name + "</h2>";
  })
  .catch((error) => {
    console.error("error:", error);
  });

// FETCH API REFACTOR 2

function showData(data) {
  const result = document.getElementById("result");
  result.innerHTML = result.innerHTML + "<h2>" + data.species.name + "</h2>";
}

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if (!response.ok) throw new Exception("no ha ido bien");
    return response.json();
  })
  .then(showData)
  .catch((error) => console.error("error:", error));

// FETCH ASYNC/AWAIT

async function getData(url) {
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
  showData(data);
  return data;
}

const data = getData("https://pokeapi.co/api/v2/pokemon/pikachu");

console.log(data);

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHH!!!!");
