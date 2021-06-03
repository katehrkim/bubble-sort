function bubble_sort(numbers) {
  var swaps = 0;
  var index = 0;
  while (index + 1 < numbers.length) {
    let previous = numbers[index];
    let current = numbers[index + 1];
    if (previous > current) {
      numbers[index] = current;
      numbers[index + 1] = previous;
      ++swaps;
      index = 0;
    }
    else {
      ++index;
    }
  }
  let output = [numbers, swaps]
  return output
};

var sequence = [4, 3, 5, 0, 1];
console.log(bubble_sort(sequence));

// console.log("Final result: " + result)
// console.log("Swaps: " + swaps)
