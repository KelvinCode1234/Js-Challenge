function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }

  console.log(sumEvenNumbers([1, 2, 3, 4, 5])); 
console.log(sumEvenNumbers([10, 20, 30, 40])); 