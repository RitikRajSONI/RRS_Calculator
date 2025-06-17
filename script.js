let curdisplay = '';
document.querySelector('#screen').value = curdisplay;
let val;
function modify(val) {
    switch (val) {
        
        case "7": {
            curdisplay += '7';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "8": {
            curdisplay += '8';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "9": {
            curdisplay += '9';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "-": {
            curdisplay += '-';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "4": {
            curdisplay += '4';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "5": {
            curdisplay += '5';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "6": {
            curdisplay += '6';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "/": {
            curdisplay += '/';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "1": {
            curdisplay += '1';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "2": {
            curdisplay += '2';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "3": {
            curdisplay += '3';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "*": {
            curdisplay += '*';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case ".": {
            curdisplay += '.';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "0": {
            curdisplay += '0';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "=": {
            let result = eval(curdisplay);
            curdisplay = result;
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "+": {
            curdisplay += '+';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "C": {
            curdisplay = '';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "del": {
            let newStr = curdisplay.slice(0, -1);
            curdisplay = newStr;
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case "(": {
            curdisplay += '(';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        case ")": {
            curdisplay += ')';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
        default: {
            curdisplay = 'ERROR !!';
            document.querySelector('#screen').value = curdisplay;
            break;
        }
    }
}