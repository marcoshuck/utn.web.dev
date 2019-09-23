function insertionSort(array: number[]): number[] {
  let i: number;
  let j: number;
  let key: number;
  const copy: number[] = [...array];

  for(i = 1; i < array.length; i++) {
    key = copy[i];
    j = i - 1;

    while(j >= 0 && copy[j] > key) {
      copy[j + 1] = copy[j];
      j = j - 1;
    }
    copy[j + 1] = key;
  }

  return copy;
}