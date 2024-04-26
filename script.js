let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', '*', '/', '%'];


const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.btn_ac_bg-grey').onclick = clearAll;


document.querySelector('.buttons').addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.buttons > div');
    if (!clickedButton) return;
    if (event.target.classList.contains('btn_ac_bg-grey')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;    
        }
        else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b; 
        }
        console.log(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') 
            b = a;
        
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "*":
                a = a * b;
                break;
            case "%":
                if (a !== '' && b === '') {
                    a = (parseFloat(a) / 100).toFixed(2)
                }
                break;
        }
    }
    a = (parseFloat(a) / 100).toFixed(2)
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
});
