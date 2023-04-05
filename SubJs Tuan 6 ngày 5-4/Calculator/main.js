var input = document.getElementById('input');
var result = document.getElementById('result');

function insert(value) {
    input.value += value;
}

function clearAll() {
    input.value = '';
    result.value = '';
}

function clearLast() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    result.value = eval(input.value);
}