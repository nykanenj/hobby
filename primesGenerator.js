const sumAll = (numberArray) => {
  let sum = 0;
  numberArray.forEach((number) => (sum += number));
  console.log(`count: ${numberArray.length}`); // should be 25 if primes less than 100
  console.log(`sum: ${sum}`); // should be 1060 if primes less than 100
};

const generatePrimeNumbers = (uptoNumber = 100) => {
  if (uptoNumber < 7) {
    console.log(
      `Prime list with values less than 7 are not yet supported by generatePrimeNumbers`
    );
    return;
  }
  if (uptoNumber < 11)
    return {
      primesArr: [2, 3, 5, 7],
      primesObj: { 2: true, 3: true, 5: true, 7: true },
    };

  const primesArr = [3, 7]; // 5 omitted
  const primesObj = { 2: true, 3: true, 5: true, 7: true };
  let currentSquareRoot = 3;

  const integerSquareRoot = (x) => {
    const result = Math.sqrt(x);
    const roundedResult = parseInt(result);
    if (roundedResult > currentSquareRoot) {
      currentSquareRoot = roundedResult;
    }
    if (result === roundedResult) {
      return true;
    } else {
      return false;
    }
  };

  const testIfPrime = (primeUnderTest) => {
    const hasSquareRoot = integerSquareRoot(primeUnderTest);
    if (hasSquareRoot) return false;

    for (const prime of primesArr) {
      if (prime >= currentSquareRoot) {
        primesArr.push(primeUnderTest);
        primesObj[primeUnderTest] = true;
        return true;
      }
      const remainder = primeUnderTest % prime;
      if (remainder === 0) {
        return false;
      }
    }
  };

  let skip5 = 2;

  for (let i = 11; i < uptoNumber; i += 2) {
    if (skip5 === 4) {
      skip5 = 0;
    } else {
      skip5++;
      testIfPrime(i);
    }
  }
  primesArr.push(2);
  primesArr.push(5);
  return { primesArr, primesObj };
};

//const { primesArr, primesObj } = generatePrimeNumbers();
//sumAll(primesArr);

exports.generatePrimeNumbers = generatePrimeNumbers;
exports.sumAll = sumAll;
