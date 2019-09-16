(() => {
  let code: (string | number);
  code = 1234; // OK
  code = "ABC"; // OK
  code = false; // Error
})();