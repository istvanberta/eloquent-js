function reliableMultiply(a, b) {
  let result = null;
  while (!result) {
    try {
      result = primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e;
    }
  }
  return result;
}
