do {
    var num = parseInt(prompt(`Ededlerin sayini daxil edin`));
} while (isNaN(num));

let cal = prompt(`Hesablama isaresini daxil edin (+, -, *, /)`);
if (cal == '+') {
    Add();
} else if (cal == '-') {
    Sub();
} else if (cal == '*') {
    Mul();
} else if (cal == '/') {
    Div();
} else {
    alert(`Duzgun operator secilmeyib`);
}

function Add() {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        var drp = parseFloat(prompt(`Ededlerin: ${i + 1} cisini daxil edin`));
        sum += drp;
    }
    console.log(sum.toFixed(2));
}
function Sub() {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        var drp = parseFloat(prompt(`Ededlerin: ${i + 1} cisini daxil edin`));
        if (i == 0) {
            sum = drp;
        } else {
            sum -= drp;
        }
    }
    console.log(sum.toFixed(2));
}
function Mul() {
    let sum = 1;
    for (let i = 0; i < num; i++) {
        var drp = parseFloat(prompt(`Ededlerin: ${i + 1} cisini daxil edin`));
        sum *= drp;
    }
    console.log(sum.toFixed(2));
}
function Div() {
    let sum = 1;
    for (let i = 0; i < num; i++) {
        var drp = parseFloat(prompt(`Ededlerin: ${i + 1} cisini daxil edin`));
        if (i == 0) {
            sum = drp;
        } else {
            sum /= drp;
        }
    }
    console.log(sum.toFixed(2));
}