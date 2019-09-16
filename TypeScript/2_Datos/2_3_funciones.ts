function sumar(a: number, b: number): number {
  return a + b;
}

const restar: Function = function(a: number, b: number): number {
  return a - b;
}

const multiplicar: Function = (a: number, b: number): number => (a * b);


function division(a: number, b: number): number {
  return a / b;
}

const dividir: Function = division;

function main() {
  sumar(2, 3);
  restar(5, 2);
  multiplicar(3, 5);
  dividir(6, 2);
}