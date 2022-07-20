"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('in1');
let input2 = document.getElementById('in2');
function adicionarNumero(n1, n2) {
    return n1 + n2;
}
if (button) {
    button.addEventListener('click', () => {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value)));
    });
}
