function reverseArray(array) {
  let revArray = [];
  let length = array.length;
  for (let i = 1; i <= length; i++) {
    revArray.push(array[length-i]);
  }
  return revArray;
}

function reverseArrayInPlace(array) {
  let revArray = [];
  while (array.length) {
    revArray.push(array.pop());
  }
  for (let element of revArray) {
	array.push(element);
  }
}
