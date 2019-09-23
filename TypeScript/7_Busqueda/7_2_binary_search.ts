function binarySearch(array: number[], target: number): number {
  let left: number = 0;
  let right: number = array.length - 1;
  let middle: number;
  let position: number = -1;

  while ((position === -1) && (left <= right)) {
    middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      position = middle;
    }

    if (array[middle] > target) {
      right = middle - 1;
    }

    if (array[middle] < target) {
      left = middle + 1;
    }
  }
  return position;
}