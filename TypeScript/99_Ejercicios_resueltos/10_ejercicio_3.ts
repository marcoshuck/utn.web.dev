function create(size: number, from: string, to: string) {
  const result: string[] = [];
  let i: number;

  for (i = 0; i < size; i++) {
    const charCode: number = Math.floor(Math.random() * (to.charCodeAt(0) - from.charCodeAt(0)) + from.charCodeAt(0));
    const word: string = String.fromCharCode(charCode);
    result.push(word);
  }

  return result;
}

function bubbleSort(array: string[]) {
  let i: number;
  let j: number;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}


function swap(array: string[], from: number, to: number) {
  [array[from], array[to]] = [array[to], array[from]];
}

function show(array: string[]) {
  console.log(array);
}

function main() {
  const array: string[] = create(10, 'A', 'Z');
  show(array);
  bubbleSort(array);
  show(array);
}
main();