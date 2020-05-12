let arg1 = '';
let opr1 = [];

function calc(value) {
    if (value == 'x' || value == '/' || value == '-' || value == '+') {
        if (opr1.includes('x') || opr1.includes('/') || opr1.includes('-') || opr1.includes('+')) {
            opr1.push(arg1);
            operate();
        }

        else if (arg1 != '') {
            opr1.push(arg1);
        }
        arg1 = '';

        opr1.push(value);

        document.getElementById('screentop').innerHTML = opr1.join(' ');
        document.getElementById('screenbottom').innerHTML = ('');
    }

    else if (value == '=') {
        opr1.push(arg1);
        operate();
    }

    else if (value == 'c') {
        arg1 = '';
        opr1 = [];
        document.getElementById('screentop').innerHTML = ('');
        document.getElementById('screenbottom').innerHTML = ('');
    }

    else if (value == 'b') {
        if (arg1 == '') {
            return;
        }
        else{
            arg1 = arg1.substring(0, arg1.length - 1);
            document.getElementById('screenbottom').innerHTML = arg1;
            console.log(arg1);
        }
    }

    else if (value == '.') {
        if (arg1.includes('.') == false) {
            arg1 += value;
            document.getElementById("screenbottom").innerHTML = arg1;
        }
    }

    else {
        arg1 += value;
        document.getElementById('screenbottom').innerHTML = arg1;
    }
}


function operate() {
    if (opr1[1] == 'x') {
        let ans1 = '';

        ans1 = multiply(opr1[0], opr1[2]);

        opr1 = [ans1];

        arg1 = '';

        document.getElementById('screentop').innerHTML = ('');

        if (Number.isInteger(ans1) == false) {
            document.getElementById('screenbottom').innerHTML = ans1.toFixed(4);
        }
        else {
            document.getElementById('screenbottom').innerHTML = ans1;
        }

    }

    else if (opr1[1] == '/') {
        let ans1 = '';

        ans1 = divide(opr1[0], opr1[2]);

        opr1 = [ans1];

        arg1 = '';

        document.getElementById('screentop').innerHTML = ('');

        if (Number.isInteger(ans1) == false) {
            document.getElementById('screenbottom').innerHTML = ans1.toFixed(4);
        }
        else {
            document.getElementById('screenbottom').innerHTML = ans1;
        }
    }

    else if (opr1[1] == '+') {
        let ans1 = '';

        ans1 = add(opr1[0], opr1[2]);

        opr1 = [ans1];

        arg1 = '';

        document.getElementById('screentop').innerHTML = ('');

        if (Number.isInteger(ans1) == false) {
            document.getElementById('screenbottom').innerHTML = ans1.toFixed(4);
        }
        else {
            document.getElementById('screenbottom').innerHTML = ans1;
        }
    }

    else if (opr1[1] == '-') {
        let ans1 = '';

        ans1 = subtract(opr1[0], opr1[2]);

        opr1 = [ans1];

        arg1 = '';

        document.getElementById('screentop').innerHTML = ('');

        if (Number.isInteger(ans1) == false) {
            document.getElementById('screenbottom').innerHTML = ans1.toFixed(4);
        }
        else {
            document.getElementById('screenbottom').innerHTML = ans1;
        }
    }
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}