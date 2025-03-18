// console.log("Hello world ahora sí!!");
// console.log("No estamos suspendidos si lo hacemos así!!");

// const title = document.getElementById("title");
// console.log(title);

// Pass in the id of an element
// let confetti = new Confetti('title');

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
  })