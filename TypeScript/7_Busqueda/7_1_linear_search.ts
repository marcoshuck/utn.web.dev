function linearSearch(array: number[], target: number): number {
  let i: number;
  for (i = 0; i < array.length; i++) {
    if(array[i] == target) {
      return i;
    }
  }
  return -1;
}