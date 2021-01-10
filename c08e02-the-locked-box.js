function withBoxUnlocked(body) {
  let wasLocked = box.locked;
  if (box.locked) {
    box.unlock();
  }
  try {
    body();
  } finally {
    if (wasLocked) box.lock();
  }
}
