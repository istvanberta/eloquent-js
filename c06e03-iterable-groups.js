class Group {
  constructor() {
    this.values = [];
  }

  get size() {
  	return this.values.length;
  }

  add(value) {
    if (!this.values.includes(value)) this.values.push(value);
  }

  delete(value) {
    this.values = this.values.filter(v => v !== value);
  }

  has(value) {
    return this.values.includes(value);
  }

  getValue(index) {
  	return this.values[index];
  }

  static from(obj) {
    let group = new Group;
    for (let element of obj) {
      group.add(element);
    }
    return group;
  }
  
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.counter = 0;
  }
  
  next() {
    if (this.counter < this.group.size) {
      let value = {value: this.group.getValue(this.counter), done: false};
      this.counter++;
      return value;
    } else {
      return {done: true}
    }
  }
}
