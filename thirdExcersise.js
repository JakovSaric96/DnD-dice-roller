let result = document.getElementById("resultEl");
let sum = document.getElementById("sumEl");
let numThrown = document.getElementById("numThrown");
let total = 0;
let throws = [];

showSelf();
document.getElementById("d4El").addEventListener("click", d4El)
function d4El() {
    roll(4);
}
document.getElementById("d6El").addEventListener("click", d6El)
function d6El() {
    roll(6);
}
document.getElementById("d8El").addEventListener("click", d8El)
function d8El() {
    roll(8);
}
document.getElementById("d10El").addEventListener("click", d10El)
function d10El() {
    roll(10);
}
document.getElementById("d12El").addEventListener("click", d12El)
function d12El() {
    roll(12);
}
document.getElementById("d20El").addEventListener("click", d20El)
function d20El() {
    reset();
    roll(20);
}
document.getElementById("resetEl").addEventListener("click", reset)
function reset() {
    throws.length = 0;
    total = 0;
    showSelf();
}

function roll(x) {
    i = (Math.floor(Math.random() * x) + 1);
    throws.push(i);
    total += i;
    showSelf();
}

function showSelf() {
    result.innerText = "Throws: " + throws;
    sum.innerText = "Total:" + total;
    numThrown.innerText = "Dice thrown: " + throws.length;
}