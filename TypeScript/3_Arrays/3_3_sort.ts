(() => {
  const edades: number[] = [55, 33, 22, 11, 99, 66];

  function ascendente(a: number, b: number): number {
    return a - b;
  }

  function descendente(a: number, b: number): number {
    return b - a;
  }

  console.log(edades);

  console.log(edades.sort(ascendente));

  console.log(edades.sort(descendente));
})();