function longConsequtiveSeqUsingSorting(inputarray) {
  if (inputarray.length === 0) {
    return 0;
  }
  inputarray.sort((a, b) => a - b);
  let countValue = 1;
  let maxcountValue = 1;
  for (let i = 1; i < inputarray.length; i++) {
    if (inputarray[i - 1] + 1 === inputarray[i]) {
      countValue++;
    } else if (inputarray[i - 1] !== inputarray[i]) {
      countValue = 1;
    }

    maxcountValue = Math.max(maxcountValue, countValue);
  }
  return maxcountValue;
}
const inputArray = [1, 1, 9, 3, 10, 4, 20, 2];
const outputLongValue = longConsequtiveSeqUsingSorting(inputArray);
console.log(outputLongValue);
