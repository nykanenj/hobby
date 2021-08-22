const { generatePrimeNumbers, sumAll } = require("./primesGenerator");

const problem37 = () => {
  const upperlimit = 10000;
  const { primesArr, primesObj } = generatePrimeNumbers(upperlimit);
  //sumAll(primesArr);

  const primeDigits = [2, 3, 5, 7];
  const truncPrimes = [];

  const addDigitAtStart = (truncNumber, newDigit, digits) => {
    return newDigit * Math.pow(10, digits) + truncNumber;
  };

  const addDigitAtEnd = (truncNumber, newDigit, digits) => {
    return truncNumber * Math.pow(10, digits) + newDigit;
  };

  const recursive = (truncNumber, digits) => {
    if (digits >= 5) return;
    digits++;
    //console.log(`${truncNumber}`)
    if (primesObj[truncNumber]) {
      truncPrimes.push(truncNumber);
      for (const newDigit of primeDigits) {
        console.log(
          `  truncNumber: ${truncNumber} newDigit: ${newDigit} digits: ${digits}`
        );
        console.log(
          `  addDigitAtStart(truncNumber, newDigit, digits): ${addDigitAtStart(
            truncNumber,
            newDigit,
            digits
          )}`
        );
        recursive(addDigitAtStart(truncNumber, newDigit, digits), digits);
        recursive(addDigitAtEnd(truncNumber, newDigit, digits), digits);
      }
    }
  };

  const truncTest = (arr) => {
    let constructedNumber = 0;
    let multiplier = 1;
    for (const val of arr) {
      constructedNumber += val * multiplier;
      multiplier *= 10;
      if (!primesObj[constructedNumber]) return false;
    }
    console.log(`ConstructedNumber: ${constructedNumber} found as prime`);
    recursive(constructedNumber, 1);
    return true;
  };

  for (const i of primeDigits) {
    for (const j of primeDigits) {
      truncTest([i, j]);
    }
  }
  console.log(JSON.stringify(truncPrimes));
};

problem37();
