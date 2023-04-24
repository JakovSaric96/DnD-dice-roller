let result = document.getElementById("resultEl");
let sum = document.getElementById("sumEl");
let numThrown = document.getElementById("numThrown");
let total = 0;
let throws = [];

showSelf();

function d4El() {
    roll(4);
}
function d6El() {
    roll(6);
}
function d8El() {
    roll(8);
}
function d10El() {
    roll(10);
}
function d12El() {
    roll(12);
}
function d20El() {
    reset();
    roll(20);
}

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