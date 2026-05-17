/* =========================================
   RPS SYSTEM
========================================= */

const middlePanel =
  document.querySelector(".middle-empty-panel");

/* =========================================
   OPCIONES
========================================= */

const RPS_OPTIONS = [

  {
    name: "rock",
    image: "images/rock.png"
  },

  {
    name: "paper",
    image: "images/paper.png"
  },

  {
    name: "scissors",
    image: "images/scissors.png"
  }

];

/* =========================================
   LIMPIAR PANEL
========================================= */

function clearRPS() {

  middlePanel.innerHTML = "";
}

/* =========================================
   CREAR BOTON
========================================= */

function createRPSButton(option, callback) {

  const button =
    document.createElement("button");

  button.classList.add("rps-btn");

  button.dataset.choice = option.name;

  button.innerHTML = `
    <img
      src="${option.image}"
      alt="${option.name}"
    >
  `;

  /* =========================================
     CLICK
  ========================================= */

  button.addEventListener("click", () => {

    // QUITAR BOTONES
    clearRPS();

playRPSAttackAnimation(

  option.name,

  () => {

    if (callback) {

      callback(option.name);
    }
  }
);

  });

  return button;
}

/* =========================================
   INICIAR RPS
========================================= */

function startRPS(callback) {

  // LIMPIAR
  clearRPS();

  // CONTENEDOR
  const container =
    document.createElement("div");

  container.classList.add("rps-container");

  // CREAR BOTONES
  RPS_OPTIONS.forEach(option => {

    const button =
      createRPSButton(option, callback);

    container.appendChild(button);
  });

  // AGREGAR AL PANEL
  middlePanel.appendChild(container);
}