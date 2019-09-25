function encode(message: string): string {
  const size: number = message.length;
  let shift: number = Math.floor(size * 2);
  let shiftedCode: number;
  let result: string;
  let array: string[];
  let i: number;

  message = message.toLowerCase();
  array = message.split('');

  for(i = 0; i < size; i++) {
    shiftedCode = array[i].charCodeAt(0) + shift;
    if(shiftedCode > 122) {
      shiftedCode -= 26;
    }
    array[i] = String.fromCharCode(shiftedCode);
  }

  result = array.join('');

  return result;
}

function main() {
  const text: string = 'utn';
  console.log(text);
  console.log(encode(text));
}
main();