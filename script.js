/* =========================================
   ELEMENTOS
========================================= */

const storyText = document.querySelector(".story-text");
const storyBox = document.querySelector(".story-box");

/* =========================================
   PUNTOS DEL JUEGO
========================================= */

let sasukePoints = 2;
let narutoPoints = 2;

const pointsElements =
document.querySelectorAll(".points-box strong");

const sasukePointsUI =
pointsElements[0];

const narutoPointsUI =
pointsElements[1];

function updatePointsUI(){

    sasukePointsUI.textContent =
    sasukePoints;

    narutoPointsUI.textContent =
    narutoPoints;
}

updatePointsUI();

/* =========================================
   DIALOGOS INTRO
========================================= */

const introDialogues = [

{
speaker:"Naruto",
color:"#f6ff00",
text:"¡Bien! ¡Empecemos el juego!"
},

{
speaker:"Naruto",
color:"#f6ff00",
text:"Sasuke te recordaré el juego, la apuesta es simple, tu novia o la mía. La del perdedor se desnuda"
},

{
speaker:"Sasuke (Tú)",
color:"#6fa8ff",
text:"Hn. No puedo creer que accedí a esto..."
},

{
speaker:"Sasuke (Tú)",
color:"#6fa8ff",
text:"Como sea, no pienso perder"
},

{
speaker:"Hinata",
color:"#40afdb",
text:"Na-Naruto..."
},

{
speaker:"Sakura",
color:"#fb59aa",
text:"*Cerraría el puño con fuerza*<br><br>Naruto eres un idiota... si esto sale mal, te rompo los huesos"
},

{
speaker:"",
color:"#ffffff",
text:"|- REGLAS DEL JUEGO -|<br><br>1. Antes de cada ronda, juegas PIEDRA, PAPEL O TIJERA, El ganador obtiene puntos extra."
},

{
speaker:"",
color:"#ffffff",
text:"<br><br><br>Selecciona una opción:"
},

{
speaker:"",
color:"#ffffff",
text:"<br><br><br>"
}

];

let currentDialogue=0;
let autoTimer=null;
let typingInterval=null;
let dialogueLocked=false;

/* =========================================
   INTRO
========================================= */

function startIntroDialogue(){

currentDialogue=0;

showDialogue();

}

/* =========================================
   DIALOGO
========================================= */

function showDialogue(){

clearTimeout(autoTimer);
clearInterval(typingInterval);

if(currentDialogue>=introDialogues.length){

clearTimeout(autoTimer);
clearInterval(typingInterval);

return;

}

const dialogue=
introDialogues[currentDialogue];

dialogueLocked=
dialogue.text.includes(
"Selecciona una opción"
);

if(dialogueLocked){

startRPS((choice)=>{

dialogueLocked=false;

nextDialogue();

});

}

storyText.innerHTML=`

<span style="color:${dialogue.color}">
${dialogue.speaker}:
</span>

<span class="typing-text"></span>

`;

const typingText=
storyText.querySelector(
".typing-text"
);

const fullText=
dialogue.text;

let index=0;

typingInterval=
setInterval(()=>{

if(index<fullText.length){

typingText.innerHTML=
fullText.substring(
0,
index+1
);

index++;

}

else{

clearInterval(
typingInterval
);

if(
dialogue.text.includes(
"Selecciona una opción"
)
){

return;

}

autoTimer=
setTimeout(()=>{

nextDialogue();

},5000);

}

},17);

}

/* =========================================
   SIGUIENTE
========================================= */

function nextDialogue(){

clearTimeout(autoTimer);

clearInterval(
typingInterval
);

currentDialogue++;

showDialogue();

}

/* =========================================
   CONTROLES
========================================= */

storyBox.addEventListener(
"click",
()=>{

if(dialogueLocked)return;

nextDialogue();

}
);

document.addEventListener(
"keydown",
(e)=>{

if(e.code==="Space"){

e.preventDefault();

if(dialogueLocked)return;

nextDialogue();

}

}
);