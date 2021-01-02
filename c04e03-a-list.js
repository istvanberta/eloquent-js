function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
  	list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return list = {value: element, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
