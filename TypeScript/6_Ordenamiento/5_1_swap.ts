function swap(array: number[], from: number, to: number) {
  const tmp: number = array[from];
  array[from] = array[to];
  array[to] = tmp;
}

function sswap(array: number[], from: number, to: number): number[] {
  const copy: number[] = [...array];
  const tmp: number = copy[from];
  copy[from] = copy[to];
  copy[to] = tmp;
  return copy;
}

function rswap(array: number[], from: number, to: number) {
  [array[from], array[to]] = [array[to], array[from]];
}