function bubbleSort(array: number[]) {
  let i: number;
  let j: number;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        array = sswap(array, j, j + 1);
      }
    }
  }
}
