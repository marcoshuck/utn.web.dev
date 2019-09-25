function create(size: number = 10, min: number = 0, max: number = 10): number[] {
  const result: number[] = [];
  let i: number;

  for (i = 0; i < size; i++) {
    result.push(Math.random() * (max - min) + min);
  }

  return result;
}

function show(array: number[]) {
  const size: number = array.length;
  let i: number = 0;

  for(i = 0; i < size; i++) {
    console.log(`${i} | ${array[i]}`);
  }
}

function main() {
  let array: number[];

  array = create(100, 1, 99);

  show(array);
}
main();