function range(start, end, step = 1) {
  let range = [];
  if (step < 0) {
  	for (let i = start; i >= end; i += step) {
    	range.push(i);
    }
  } else {
  	for (let i = start; i <= end; i += step) {
    	range.push(i);
    }
  }
  return range;
}

function sum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}
