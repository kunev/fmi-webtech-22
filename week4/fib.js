function fibonacciSeeder() {
  let a = 0;
  let b = 1;
  function fibonacciGenerator() {
    let result = a + b;
    a = b;
    b = result;
    return result;
  }

  return fibonacciGenerator;
}
