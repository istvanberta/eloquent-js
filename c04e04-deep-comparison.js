function deepEqual(value1, value2) {
  if (value1 === value2) return true;
  
  if (value1 == null || value2 == null) return false;
  
  if (typeof value1 != 'object' ||
      typeof value2 != 'object') return false;
  
  let props1 = Object.keys(value1);
  let props2 = Object.keys(value2);
  
  if (props1.length != props2.length) return false;
  
  for (let property of props1) {
    if (!(property in value2) ||
        !(deepEqual(value1[property] , value2[property]))) {
      return false;
    }
  }

  return true;
}
