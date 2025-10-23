const singlePerson = {
  name: 'Charlie',
  age: 28,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const items = ['item1', 'item2', 'item3'];

module.exports.items = items;

module.exports.singlePerson = singlePerson;