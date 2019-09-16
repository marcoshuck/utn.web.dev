(() => {
  enum ScoreCategory {
    F = 'FAILURE',
    D = '70% - 74%',
    C = '75% - 79%',
    B = '80% - 89%',
    A = '90% - 100%',
  };
  console.log(ScoreCategory.D);
})();