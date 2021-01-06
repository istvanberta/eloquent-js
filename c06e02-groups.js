class Group {
  constructor() {
    this.values = [];
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

  static from(obj) {
    let group = new Group;
    for (let element of obj) {
      group.add(element);
    }
    return group;
  }
}
