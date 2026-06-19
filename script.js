function showLove(){

alert(
"హ్యాపీ ఫాదర్స్ డే నాన్న ❤️\n\n" +
"మీరు నా ప్రపంచం.\n" +
"నేను మిమ్మల్ని ఎంతో ప్రేమిస్తున్నాను."
);

}

setInterval(() => {

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.fontSize =
(Math.random() * 25 + 20) + "px";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

},8000);

},500);
