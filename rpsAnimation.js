/* =========================================
   RPS ANIMATION
========================================= */

function playRPSAttackAnimation(playerChoice,callback){

const middlePanel=
document.querySelector(
".middle-empty-panel"
);

/* =========================================
   CPU
========================================= */

const cpuChoices=[

"rock",
"paper",
"scissors"

];

const cpuChoice=

cpuChoices[
Math.floor(
Math.random()*
cpuChoices.length
)
];

/* =========================================
   TEXTO
========================================= */

function getChoiceText(choice){

if(choice==="rock")
return "PIEDRA";

if(choice==="paper")
return "PAPEL";

if(choice==="scissors")
return "TIJERA";

}

const playerText=
getChoiceText(playerChoice);

const cpuText=
getChoiceText(cpuChoice);

/* =========================================
   GANADOR
========================================= */

let resultText="";
let resultColor="";
let winner="";

if(playerChoice===cpuChoice){

resultText="¡EMPATE!";
resultColor="#b5b4b4";
winner="draw";

}

else if(

(playerChoice==="rock" &&
cpuChoice==="scissors")

||

(playerChoice==="paper" &&
cpuChoice==="rock")

||

(playerChoice==="scissors" &&
cpuChoice==="paper")

){

resultText="¡SASUKE GANA!";
resultColor="#6fa8ff";
winner="sasuke";

}

else{

resultText="¡NARUTO GANA!";
resultColor="#f6ff00";
winner="naruto";

}

/* =========================================
   SASUKE
========================================= */

middlePanel.innerHTML=`

<div class="rps-animation-container">

<div class="top-lines"></div>
<div class="bottom-lines"></div>

<div class="energy-burst energy-top"></div>
<div class="energy-burst energy-bottom"></div>

<img
class="rps-character"
src="images/sasuke-action.png"
>

</div>

`;

setTimeout(()=>{

middlePanel.innerHTML=`

<div class="rps-result-box">

<div class="rps-result-text">

<span class="sasuke-result-name">
Sasuke (Tú)
</span>

ha usado

<span class="rps-choice-text">
"${playerText}"
</span>

</div>

</div>

`;

},1600);

/* =========================================
   NARUTO
========================================= */

setTimeout(()=>{

middlePanel.innerHTML=`

<div class="naruto-animation-container">

<div class="fire fire-1"></div>
<div class="fire fire-2"></div>
<div class="fire fire-3"></div>

<img
class="naruto-character"
src="images/naruto-action.png"
>

<div class="ember ember-1"></div>
<div class="ember ember-2"></div>
<div class="ember ember-3"></div>

</div>

`;

},3400);

setTimeout(()=>{

middlePanel.innerHTML=`

<div class="rps-result-box">

<div class="rps-result-text">

<span class="naruto-result-name">
Naruto
</span>

ha usado

<span class="rps-choice-text">
"${cpuText}"
</span>

</div>

</div>

`;

},5200);

/* =========================================
   RESULTADO
========================================= */

setTimeout(()=>{

middlePanel.innerHTML=`

<div class="winner-container">

<div
class="winner-text"
style="color:${resultColor}"
>

${resultText}

</div>

</div>

`;

},7000);

/* =========================================
   PUNTOS
========================================= */

setTimeout(()=>{

if(winner==="sasuke"){

sasukePoints+=2;

updatePointsUI();

middlePanel.innerHTML=`

<div class="winner-container">

<div
style="
font-size:9px;
color:white;
text-align:center;
line-height:2;
"
>

Sasuke ha obtenido

<span
style="
color:#ffb347;
"
>

x2

</span>

Pts

</div>

</div>

`;

}

else if(winner==="naruto"){

narutoPoints+=2;

updatePointsUI();

middlePanel.innerHTML=`

<div class="winner-container">

<div
style="
font-size:9px;
color:white;
text-align:center;
line-height:2;
"
>

Naruto ha obtenido

<span
style="
color:#ffb347;
"
>

x2

</span>

Pts

</div>

</div>

`;

}

},8500);

/* =========================================
   CONTINUAR
========================================= */

setTimeout(()=>{

middlePanel.innerHTML="";

if(callback){

callback(
playerChoice,
cpuChoice
);

}

},11000);

}