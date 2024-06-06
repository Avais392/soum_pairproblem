function pairproblem(words) {
  let counter = [];
  for (let word of words) {
    let count = 0;
    let i = 0;
    while (i < word.length - 1) {
      if (word[i] === word[i + 1]) {
        count++;
        i++;
      }
      i++;
    }
    counter.push(count);
  }
  return counter;
}

function driverFunction() {
  // Sample input data
  const words = ["a", "abb", "abbba"];

  const result = pairproblem(words);

  console.log(result);
}

driverFunction();
