'use strict';

class CustomSet {
  constructor(set) {
    this.set = set || [];
  }

  eql(subject) {
    let set1 = this.set.sort();
    let set2 = subject.set.sort();

    return (set1.length === set2.length && set1.every((el, i) => {
      return el === set2[i];
    }));
  }

  delete(val) {
    this.set = this.set.filter((el) => {
      return el !== val;
    });
    return this;
  }

  difference(subject) {
    this.set = this.set.filter((el) => {
      return subject.set.indexOf(el) === -1;
    });
    return this;
  }

  disjoint(subject) {
    return this.set.every((el, i) => {
      return subject.set.indexOf(el) === -1;
    });
  }

  empty() {
    this.set = [];
    return this;
  }
}

module.exports = CustomSet;
