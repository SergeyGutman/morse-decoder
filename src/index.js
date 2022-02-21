const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        let subExpr = expr.substring(i, i + 10);
        let signal = "";
        if (subExpr === "**********") {
            result += " ";
        } else {
            for (let j = 0; j < subExpr.length; j += 2) {
                if (subExpr.substring(j, j + 2) == "10") {
                    signal += ".";
                } else if (subExpr.substring(j, j + 2) == "11") {
                    signal += "-";
                }
            }
            result += MORSE_TABLE[signal];
        }
    }
    return result;
}

module.exports = {
    decode
}