const timeout = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

function inc(a) {
  return timeout().then(() => a + 1);
}

const sum = function (a, b) {
  return timeout().then(() => a + b);
};

const max = (a, b) => timeout().then(() => (a > b ? a : b));

const avg = (a, b) => sum(a, b).then((sum) => sum / 2);

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return timeout().then(() => this.name.split(sep));
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return timeout().then(() => new Person(name));
  }

  split(sep = " ") {
    return timeout().then(() => this.name.split(sep));
  }
}

inc(4).then((i) => console.log("inc(4) =", i))
  .then(() => sum(4, 6))
  .then((i) => console.log("sum(4, 6) =", i))

  .then(() => max(10, 100))
  .then((i) => console.log("max(10, 100) =", i))

  .then(() => avg(7, 9))
  .then((i) => console.log("avg(7, 7) =", i))

  .then(() => obj.split())
  .then((i) => console.log("obj.split() =", i))
  
  .then(() => Person.of("Marcus Aurelius"))
  .then((p) => p.split())
  .then((i) => console.log("person.split() =", i));