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
    let words = expr.toString().split('**********');
    let res = ''

    let decodeWord = word =>{
        let result = '';
        for(let i = 0; i < word.length; i += 10){
            let letter = word.slice(i, i + 10);
            let morseLetter = letterToMorse(letter);
            result += MORSE_TABLE[morseLetter];
        }
        return result;
    }

    let letterToMorse = letter =>{
        let result = '';
        for(let i = 0; i < letter.length; i++){
            if(letter.charAt(i) == 1){
                if(letter.charAt(i + 1) == 1){
                    result += '-';
                    i++;
                }
                else {
                    result += '.';
                    i ++;
                }
            }
        }
        return result;
    }

    words.forEach(element => {
        res += decodeWord(element)
        res += ' '
    });
    return res.trim();
}

module.exports = {
    decode
}