const { generatePrimeNumbers, sumAll } = require("./primesGenerator");

const problem37 = () => {
  const { primesArr, primesObj } = generatePrimeNumbers(100);
  sumAll(primesArr);
  return;
  /*
  const primesObj = primesArr.reduce();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {}
  }
  */
};

problem37();
