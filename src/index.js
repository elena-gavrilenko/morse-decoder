const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let arrNew = [];

  for (let i = 0; i < expr.length; i = i + 10) {
    arr.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < arr.length; i++) {
    arrNew[i] = [];
    for (let j = 0; j < 10; j = j + 2) {
      if (arr[i].slice(j, j + 2) == 10) {
        arrNew[i].push(".");
      } else if (arr[i].slice(j, j + 2) == 11) {
        arrNew[i].push("-");
      }
    }
  }

  let a = arrNew.map((elem) => elem.join(""));
  return a.map((elem) => (elem ? MORSE_TABLE[elem] : " ")).join(""); // write your solution here
}

module.exports = {
  decode,
};
