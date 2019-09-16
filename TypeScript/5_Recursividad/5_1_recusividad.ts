(() => {
  function contarRecursivamenteHasta10(contador: number): void {
    if(contador < 10) {
      console.log(contador);
    }
    if(contador === 10) {
      console.log(contador);
      return;
    }
    contarRecursivamenteHasta10(contador + 1);
    return;
  }

  contarRecursivamenteHasta10(0);
})();