// menu.js

const startMenu = document.getElementById("start-menu");
const gameContainer = document.getElementById("game-container");

function startGame() {

  startMenu.classList.add("menu-hide");

  gameContainer.classList.add("game-show");

  // Esperar un poco a que desaparezca el menú
  setTimeout(() => {

    startIntroDialogue();

  }, 300);
}

startMenu.addEventListener("click", startGame);