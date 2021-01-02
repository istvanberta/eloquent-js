function every1(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function every2(array, test) {
  if (array.some(n => !test(n))) return false;
  return true;
}
