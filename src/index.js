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
//10 stands for dot(.), 11 stands for dash(-).
function decode(expr) {
    let mem=expr.toString().split("");
    let result=[];
    //console.log(mem)
    while(mem.length>0) {
        switch (mem.splice(0,10).join("")){
            case "0000001011":
                result.push("a");
                break;
            case "0011101010":
                result.push("b");
                break; 
            case "0011101110":
                result.push("c");
                break;
            case "0000111010":
                result.push("d");
                break;
            case "0000000010":
                result.push("e");
                break;
            case "0010101110":
                result.push("f");
                break;
            case "0000111110":
                result.push("g");
                break;
            case "0010101010":
                result.push("h");
                break;
            case "0000001010":
                result.push("i");
                break;
            case "0010111111":
                result.push("j");
                break;
            case "0000111011":
                result.push("k");
                break;
            case "0010111010":
                result.push("l");
                break;
            case "0000001111":
                result.push("m");
                break;
            case "0000001110":
                result.push("n");
                break;
            case "0000111111":
                result.push("o");
                break;
            case "0010111110":
                result.push("p");
                break;
            case "0011111011":
                result.push("q");
                break;
            case "0000101110":
                result.push("r");
                break;
            case "0000101010":
                result.push("s");
                break;
            case "0000000011":
                result.push("t");
                break;
            case "0000101011":
                result.push("u");
                break;
            case "0010101011":
                result.push("v");
                break;
            case "0000101111":
                result.push("w");
                break;
            case "0011101011":
                result.push("x");
                break;
            case "0011101111":
                result.push("y");
                break;
            case "0011111010":
                result.push("z");
                break;
            case "**********":
                result.push(" ");
                break;
            case "1011111111":
                result.push("1");
                break;
            case "1010111111":
                result.push("2");
                break;
            case "1010101111":
                result.push("3");
                break;
            case "1010101011":
                result.push("4");
                break;
            case "1010101010":
                result.push("5");
                break;
            case "1110101010":
                result.push("6");
                break;
            case "1111101010":
                result.push("7");
                break;
            case "1111111010":
                result.push("8");
                break;
            case "1111111110":
                result.push("9");
                break;
            case "1111111111":
                result.push("0");
                break;
        }
    }
    return (result.join(""))
}

module.exports = {
    decode
}