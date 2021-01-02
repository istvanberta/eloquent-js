function loop(i, test, update, execute) {
  while (test(i)) {
    execute(i);
    i = update(i);
  }
}
