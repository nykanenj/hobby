const { generatePrimeNumbers, sumAll } = require("./primesGenerator");

const problem37 = () => {
  const { primesArr, primesObj } = generatePrimeNumbers(10000);
  //sumAll(primesArr);

  const primeDigits = [2, 3, 5, 7];
  const truncPrimes = [];

  const recursive = (trunc, digits) => {
    if ((digits = 5)) return;

    for (const i of primeDigits) {
    }
  };

  const truncTest = (arr) => {
    let constructedNumber = 0;
    let multiplier = 1;
    for (const val of arr) {
      constructedNumber += val * multiplier;
      multiplier *= 10;
    }
    if (primesObj[constructedNumber]) {
      console.log(`ConstructedNumber: ${constructedNumber} found as prime`);
      truncPrimes.push(constructedNumber);
      //recursive(constructedNumber, 2);
      return true;
    } else {
      console.log(`ConstructedNumber: ${constructedNumber} not prime`);
      return false;
    }
  };

  for (const i of primeDigits) {
    for (const j of primeDigits) {
      truncTest([i, j]);
      truncTest([j, i]);
    }
  }
  console.log(JSON.stringify(truncPrimes));
};

problem37();
