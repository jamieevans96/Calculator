document.getElementById("btn1").onclick = function() {one()};
document.getElementById("btn2").onclick = function() {two()};
document.getElementById("btn3").onclick = function() {three()};
document.getElementById("btn4").onclick = function() {four()};
document.getElementById("btn5").onclick = function() {five()};
document.getElementById("btn6").onclick = function() {six()};
document.getElementById("btn7").onclick = function() {seven()};
document.getElementById("btn8").onclick = function() {eight()};
document.getElementById("btn9").onclick = function() {nine()};
document.getElementById("btn0").onclick = function() {zero()};
document.getElementById("btndot").onclick = function() {dot()};
document.getElementById("btnadd").onclick = function() {add()};
document.getElementById("btnmin").onclick = function() {min()};
document.getElementById("btnx").onclick = function() {xx()};
document.getElementById("btndiv").onclick = function() {div()};
document.getElementById("btnc").onclick = function() {clear()};
document.getElementById("btnbck").onclick = function() {back()};
document.getElementById("btneq").onclick = function() {equals()};

let x = '';

function one() {
    x = x + 1;
    document.getElementById("screenbottom").innerHTML = x;
}

function two() {
    x = x + 2;
    document.getElementById("screenbottom").innerHTML = x;
}

function three() {
    x = x + 3;
    document.getElementById("screenbottom").innerHTML = x;
}

function four() {
    x = x + 4;
    document.getElementById("screenbottom").innerHTML = x;
}

function five() {
    x = x + 5;
    document.getElementById("screenbottom").innerHTML = x;
}

function six() {
    x = x + 6;
    document.getElementById("screenbottom").innerHTML = x;
}

function seven() {
    x = x + 7;
    document.getElementById("screenbottom").innerHTML = x;
}

function eight() {
    x = x + 8;
    document.getElementById("screenbottom").innerHTML = x;
}

function nine() {
    x = x + 9;
    document.getElementById("screenbottom").innerHTML = x;
}

function zero() {
    x = x + 0;
    document.getElementById("screenbottom").innerHTML = x;
}

function dot() {
    if (x.includes('.') == false) {
        x = x + '.';
        document.getElementById("screenbottom").innerHTML = x;
    }
}

function min() {
    var firstNum = x;
    x = ''
    document.getElementById("screentop").innerHTML = firstNum + '-';
    document.getElementById("screenbottom").innerHTML = '';
}

function add() {
    var firstNum = x;
    x = ''
    document.getElementById("screentop").innerHTML = firstNum + '+';
    document.getElementById("screenbottom").innerHTML = '';
}

function xx() {
    var firstNum = x;
    x = ''
    document.getElementById("screentop").innerHTML = firstNum + 'x';
    document.getElementById("screenbottom").innerHTML = '';
}

function div() {
    var firstNum = x;
    x = '';
    document.getElementById("screentop").innerHTML = firstNum + '/';
    document.getElementById("screenbottom").innerHTML = '';
}

function clear() {
    x = '';
    document.getElementById("screentop").innerHTML = '';
    document.getElementById("screenbottom").innerHTML = '';
}

function back() {
    x = x.substring(0, x.length - 1);
    document.getElementById("screenbottom").innerHTML = x;
}

function equals() {
    var secondNum = x;
    var result = firstNum * secondNum;
    document.getElementById("screenbottom").innerHTML = result;
}