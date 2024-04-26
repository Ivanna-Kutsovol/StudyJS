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




// document.querySelector('.buttons').onclick = (event) => {
//     if (!event.target.classList.contains('buttons')) return;
    
// };





// function sum(a, b) {
//     return a + b;
// }

// function substract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function division(a, b) {
//     return a / b;
// }

// let a = '';
// let b = '';
// let sign = '';
// let finish = false;

// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// const action = ['-', '+', '*', '/'];

// const out = document.querySelector('.calc-screen p');

// function clearAll() {
//     a = '';
//     b = '';
//     sign = '';
//     finish = false;
//     out.textContent = 0;
// }

// document.querySelector('.btn_ac_bg-grey').addEventListener('click', clearAll);

// document.querySelectorAll('.buttons .btn').forEach(button => {
//     button.addEventListener('click', (event) => {
//         const key = event.target.textContent;

//         if (digit.includes(key)) {
//             if (finish) {
//                 a = '';
//                 finish = false;
//             }
//             if (sign === '') {
//                 a += key;
//                 out.textContent = a;
//             } else {
//                 b += key;
//                 out.textContent = b;
//             }
//         }

//         if (action.includes(key)) {
//             sign = key;
//             out.textContent = sign;
//         }

//         if (key === '=') {
//             finish = true;
//             let result;
//             switch (sign) {
//                 case '+':
//                     result = sum(parseFloat(a), parseFloat(b));
//                     break;
//                 case '-':
//                     result = subtract(parseFloat(a), parseFloat(b));
//                     break;
//                 case '*':
//                     result = multiply(parseFloat(a), parseFloat(b));
//                     break;
//                 case '/':
//                     result = divide(parseFloat(a), parseFloat(b));
//                     break;
//                 default:
//                     break;
//             }
//             out.textContent = result;
//             a = result.toString();
//             b = '';
//             sign = '';
//         }
//     });
// });

// function sum(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         alert('Cannot divide by zero!');
//         return NaN;
//     }
//     return a / b;
// }
