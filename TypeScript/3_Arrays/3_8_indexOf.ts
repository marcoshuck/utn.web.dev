(() => {
  const edades: number[] = [55, 33, 22, 11, 99, 66];

  const index: number = edades.indexOf(99);

  if(index === -1) {
    return;
  }
  console.log(index);
})();